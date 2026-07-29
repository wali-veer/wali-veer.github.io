document.addEventListener("DOMContentLoaded", function () {

  // ---- "Active Initiatives" listing rendered dynamically by category ----
  var progressEl = document.getElementById("progress-list");

  function makeLogEntry(item) {
    var li = document.createElement("li");
    li.className = "log-entry";
    li.innerHTML =
      '<span class="log-date">' + item.date + '</span>' +
      '<span class="log-tag">' + item.tag + '</span>' +
      '<span class="log-text">' + item.text + '</span>';
    return li;
  }

  if (progressEl && typeof CertsCourses !== "undefined") {
    progressEl.innerHTML = "";
    var categories = ["Certs / Course", "Article", "Books", "Project"];
    var visibleLimit = typeof PROGRESS_VISIBLE_COUNT !== "undefined" ? PROGRESS_VISIBLE_COUNT : 1;

    categories.forEach(function (categoryName) {
      var matchingItems = CertsCourses.filter(function (item) {
        return item.tag.toLowerCase() === categoryName.toLowerCase();
      });

      if (matchingItems.length === 0) return;

      // Render initial visible items for this category
      var initialVisible = matchingItems.slice(0, visibleLimit);
      initialVisible.forEach(function (item) {
        progressEl.appendChild(makeLogEntry(item));
      });

      // Render hidden overflow items
      var overflowItems = matchingItems.slice(visibleLimit);

      if (overflowItems.length > 0) {
        var overflowContainer = document.createElement("div");
        overflowContainer.style.display = "none";

        overflowItems.forEach(function (item) {
          overflowContainer.appendChild(makeLogEntry(item));
        });
        progressEl.appendChild(overflowContainer);

        var actionLi = document.createElement("li");
        actionLi.style.cssText = "list-style:none; margin-bottom: 24px;";

        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "log-toggle";
        btn.textContent = "View all " + categoryName + " (" + overflowItems.length + " more) ↓";

        btn.addEventListener("click", function () {
          var isHidden = overflowContainer.style.display === "none";
          overflowContainer.style.display = isHidden ? "block" : "none";
          btn.textContent = isHidden
            ? "Show fewer " + categoryName + " ↑"
            : "View all " + categoryName + " (" + overflowItems.length + " more) ↓";
        });

        actionLi.appendChild(btn);
        progressEl.appendChild(actionLi);
      }
    });
  }

// Certifications & Credentials Grid
  var credentialsEl = document.getElementById("credentials-list");
  if (credentialsEl && typeof credentials !== "undefined") {
    credentialsEl.innerHTML = "";
    credentials.forEach(function (item) {
      var cardWrapper = document.createElement("div");
      cardWrapper.className = "flip-card";

      var issuerHtml = item.url
        ? '<a href="' + item.url + '" target="_blank" rel="noopener" class="card-btn">Verify Credential ↗</a>'
        : '';

      var backDescription = item.backDesc || "Enterprise qualification verifying hands-on expertise and continuous domain mastery.";

      cardWrapper.innerHTML =
        '<div class="flip-card-inner">' +
          '<div class="flip-card-front cert-item">' +
            '<div>' +
              '<span class="cert-name">' + item.name + '</span>' +
            '</div>' +
            '<span class="cert-issuer">' + item.issuer + '</span>' +
          '</div>' +
          '<div class="flip-card-back">' +
            '<h3>Credential Overview</h3>' +
            '<p>' + backDescription + '</p>' +
            issuerHtml +
          '</div>' +
        '</div>';

      credentialsEl.appendChild(cardWrapper);
    });
  }

  // ---- Footer date stamp ----
  var el = document.getElementById("last-updated");
  if (el) {
    var months = ["January","February","March","April","May","June",
                  "July","August","September","October","November","December"];
    var now = new Date();
    el.textContent = months[now.getMonth()] + " " + now.getFullYear();
  }
});