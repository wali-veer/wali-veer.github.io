# Writing Articles on Your Portfolio — Complete Guide

You now have your own publishing platform. This guide walks you through
writing, previewing, and publishing a brand new article — end to end.

---

## Where Articles Live

Every article on your site is one entry in this single file:

```
frontend/src/data/articles-content.js
```

Open it in VS Code. You'll see an array of article objects. Each object has:

| Field | What it is | Example |
|---|---|---|
| `slug` | The URL of the article (letters, digits, hyphens only) | `chaos-engineering-in-practice` |
| `title` | The main heading of the article | `Chaos Engineering in Practice` |
| `subtitle` | The italic tagline shown below the title | `A practitioner's guide for SRE teams` |
| `date` | Publish date in `YYYY-MM-DD` format | `2026-05-20` |
| `readingTime` | Number of minutes it takes to read | `8` |
| `tags` | Topics as an array of short strings | `['SRE', 'Reliability']` |
| `body` | The full article content in Markdown | *(see below)* |

The article automatically shows up on:
- `/writing` (as a card in the list)
- `/writing/<slug>` (its own dedicated reading page)

---

## The 6 Markdown Basics You Need

Markdown is a plain-text way to write formatted content. You'll use exactly
six things — that's it.

### 1. Paragraphs
Just write normal text. Leave a **blank line** between paragraphs.

```
This is the first paragraph.

This is the second paragraph.
```

### 2. Section Headings
Prefix with `##` for a section heading, `###` for a sub-heading.
**Never use just one `#`** — that's reserved for the article title, which
the site adds automatically.

```
## Why reliability matters

Some intro text here.

### A deeper point

More text.
```

### 3. Bold and italic
Wrap in stars.

```
This is **bold** and this is *italic*.
```

### 4. Links
Text in square brackets, URL in parentheses right after.

```
Read the [official docs](https://kubernetes.io) for details.
```

### 5. Lists
Bullet lists use `-` at the start of each line. Numbered lists use `1.`

```
- First point
- Second point
- Third point

1. Do this first
2. Then this
3. Finally this
```

### 6. Blockquotes and separators
A `>` at the start of a line makes a large italic pull-quote (great for
memorable one-liners). Three dashes on their own line make a horizontal
separator.

```
> The best engineering leaders remain curious.

---
```

That's the entire vocabulary. You'll never need anything else for 95% of
your posts.

---

## Publishing a New Article — Step by Step

Let's publish a fictional article: *"On-Call Handover, Done Right"*.

### Step 1 — Open your source folder
Open your `veereshwali-portfolio` folder in VS Code, then open the file
`frontend/src/data/articles-content.js`.

### Step 2 — Copy the template below
Copy this entire block. Paste it inside the array `[...]`, right after
the opening `[` (so it becomes the newest article on top):

```js
  {
    slug: 'on-call-handover-done-right',
    title: 'On-Call Handover, Done Right',
    subtitle: 'Small habits that keep pagers quiet',
    date: '2026-08-10',
    readingTime: 5,
    tags: ['SRE', 'On-Call'],
    body: `
Every good on-call rotation lives or dies on the handover. Not the pager
schedule. The handover.

## The five-line rule

Every handover should fit in five lines. If it does not, something is
already wrong with the shift you are ending.

## What to include

1. **Open incidents** — with severity, owner, and next action
2. **Recent changes** — anything deployed in the last 24 hours
3. **Fragile services** — anything you touched or worried about
4. **On-call gotchas** — a new runbook, a broken alert
5. **What you would do next** — the one thing you did not get to

> A great handover leaves your successor with a five-minute head start,
> not a five-hour cleanup.

## Where teams go wrong

Copy-pasting the incident tool's dashboard is not a handover. It is an
alibi. Write in your own words, even if it takes an extra ten minutes.

---

The best on-call cultures are the ones where the *outgoing* engineer
takes pride in the shape they leave the pager in — not just the fact
that it survived their week.
    \`
  },
```

### Step 3 — Change the fields
- `slug` → the URL — use lowercase, dashes only, no spaces
- `title` → what appears at the top of the article
- `subtitle` → optional one-liner in italic
- `date` → today's date in `YYYY-MM-DD`
- `readingTime` → your best guess, in minutes (a 1000-word article ≈ 4 min)
- `tags` → 1–3 short labels
- `body` → the whole article, written in Markdown

### Step 4 — Save the file (`Ctrl+S` or `Cmd+S`)

### Step 5 — Preview it locally
In your terminal, from the `frontend/` folder:

```
yarn start
```

Your browser will open at `http://localhost:3000`. Click **writing** in
the top nav. You'll see your new article at the top with an amber
"ON SITE" badge. Click it, read through it, check the formatting.

Every time you edit and save, the page refreshes automatically.

Press `Ctrl+C` in the terminal when you're done previewing.

### Step 6 — Build the site
```
yarn build
```

This creates a fresh `build/` folder.

### Step 7 — Push to GitHub
Copy **everything inside** `frontend/build/` into your local
`wali-veer.github.io` repo folder, replacing the old files. Then:

```
git add .
git commit -m "New article: On-Call Handover, Done Right"
git push origin main
```

Within 60 seconds it's live at
`https://veereshwali.in/#/writing/on-call-handover-done-right`.

---

## Common Gotchas

**"My article body has backticks in it and the file breaks."**
The `body` field uses backticks to open/close the string. If your article
mentions code with backticks (like \`kubectl\`), escape them with a
backslash: `\\\`kubectl\\\``.

**"Special characters like apostrophes are misbehaving."**
Because we open the string with backticks, apostrophes and quote marks
inside the body are totally safe. But in the `title` and `subtitle` fields
(which use `'` single quotes), you need to either:
- Use double quotes: `title: "John's guide to..."`
- Or backticks: `title: \`John's guide to...\``

**"I want to add an image to my article."**
Save the image inside `frontend/public/articles/` (create the folder if
it does not exist). Then in your Markdown body:
```
![Alt text describing the image](/articles/my-image.jpg)
```
The image will be bundled and served with your site.

**"Where is the URL bar not updating cleanly?"**
Your site uses hash routing, so article URLs look like
`veereshwali.in/#/writing/my-slug`. This is normal and expected on
GitHub Pages — deep links, refresh, and share all work perfectly.

---

## Cross-Posting to LinkedIn (Recommended)

Your existing LinkedIn articles still show up on the Writing page — they
have a grey "LinkedIn" badge instead of the amber "ON SITE" one.

For every new article you publish on your site, consider posting a short
teaser on LinkedIn with a link back to `veereshwali.in/#/writing/<slug>`.
This gives you the best of both worlds — LinkedIn's reach and your own
site's ownership.

Once you're comfortable and want to fully move away from LinkedIn as
your primary writing platform, you can delete external entries from the
`articles` array in `frontend/src/data/portfolio.js`.

---

## Reference: What a Finished Article Looks Like

For a working example, open `frontend/src/data/articles-content.js` and
read the two articles that are already there:

1. **`chaos-engineering-in-practice`** — a longer technical piece
2. **`welcome-to-my-writing`** — a short intro post

Both show every Markdown feature in action. Copy either one as your
starting template.

---

## Quick Checklist Before Publishing

- [ ] `slug` is lowercase, dashes only, no spaces
- [ ] `date` is `YYYY-MM-DD`
- [ ] `body` has blank lines between paragraphs
- [ ] Section headings use `##` (not `#`)
- [ ] Ran `yarn start` and previewed locally
- [ ] Ran `yarn build` and copied contents of `build/` to the GitHub repo
- [ ] Committed and pushed to `main`
- [ ] Refreshed `veereshwali.in` and clicked into the new article

Happy writing.
