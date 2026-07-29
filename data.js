/* ============================================================
   DATA FILE — Edit this file to add courses, books, or projects.
   ============================================================ */

const PROGRESS_VISIBLE_COUNT = 0;

const CertsCourses = [
  {
    date: "21-07-2026",
    tag: "Certs / Course",
    text: `<a href="https://www.coursera.org/account/accomplishments/verify/6TRG03YIA5YI" target="_blank" rel="noopener"> AppDynamics </a> — AppDynamics: From Basics to Performance Mastery.`
  },
  {
    date: "20-07-2026",
    tag: "Certs / Course",
    text: `<a href="https://www.coursera.org/account/accomplishments/verify/3F52PU8UCU9Y" target="_blank" rel="noopener">EFK Certified Admin</a> — Elasticsearch, Fluent Bit & Kibana.`
  },
  {
    date: "20-07-2026",
    tag: "Certs / Course",
    text: `<a href="https://www.udemy.com/certificate/UC-3c3bca89-8fd3-44dc-b97f-5ee6594a5b10/" target="_blank" rel="noopener"> Prompt Engineering </a> — Prompt Engineering: Build AI Apps with OpenAI (ChatGPT).`
  },
  {
    date: "18-07-2026",
    tag: "Certs / Course",
    text: `<a href="https://www.coursera.org/account/accomplishments/verify/YWN7N3NDWAZG" target="_blank" rel="noopener">Apache Kafka</a> — Apache Kafka Fundamentals & Core Architecture.`
  },
  {
    date: "15-07-2026",
    tag: "Certs / Course",
    text: `<a href="https://www.coursera.org/account/accomplishments/specialization/certificate/GBJI3XEYJUJP" target="_blank" rel="noopener">DevOps </a> — DevOps Mastery, Specialization (8 courses).`
  },
  {
    date: "16-06-2026",
    tag: "Certs / Course",
    text: `<a href="https://www.udemy.com/certificate/UC-eb9c1e54-19e8-45b3-b2ac-f13945a22db8/" target="_blank" rel="noopener">Prometheus & Grafana</a> — Mastering Prometheus and Grafana Stack.`
  },
  {
    date: "22-05-2026",
    tag: "Certs / Course",
    text: `<a href="https://www.coursera.org/account/accomplishments/specialization/PWLTOF5JQA7V" target="_blank" rel="noopener">Generative AI</a> — Generative AI for Executives and Business Leaders, Specialization.`
  },
  {
    date: "22-05-2026",
    tag: "Certs / Course",
    text: `<a href="https://www.coursera.org/account/accomplishments/verify/WKU0XSS2RK3F" target="_blank" rel="noopener">Generative AI</a> — GenAI for Execs & Business Leaders: Integration Strategy.`
  },  
  {
    date: "20-05-2026",
    tag: "Certs / Course",
    text: `<a href="https://www.udemy.com/certificate/UC-aac49cf8-f4e5-4c1a-9d70-4ac168d004b2/" target="_blank" rel="noopener"> Chaos Engineering </a> — Chaos Engineering - AWS FIS hands-on project.`
  },
  {
    date: "17-05-2026",
    tag: "Certs / Course",
    text: `<a href="https://www.coursera.org/account/accomplishments/professional-cert/JTLT30RIKPFS" target="_blank" rel="noopener">Bedrock</a> — AWS Generative AI and AI Agents with Amazon Bedrock, Professional Cert.`
  },
  {
    date: "17-05-2026",
    tag: "Certs / Course",
    text: `<a href="https://www.coursera.org/account/accomplishments/verify/23V1SV5G1BQX" target="_blank" rel="noopener">Amazon Bedrock</a> — Generative AI Applications with Amazon Bedrock.`
  },
  {
    date: "16-05-2026",
    tag: "Certs / Course",
    text: `<a href="https://www.coursera.org/account/accomplishments/verify/I9L9LETXWQF2" target="_blank" rel="noopener">Generative AI</a> — Microsoft Gen AI for Executives Course - Gen AI Adoption.`
  },
  {
    date: "15-05-2026",
    tag: "Certs / Course",
    text: `<a href="https://www.coursera.org/account/accomplishments/verify/IPSN4FM5KI4B" target="_blank" rel="noopener">Generative AI</a> — Getting Started with AWS Generative AI for Developers.`
  },
  {
    date: "13-05-2026",
    tag: "Certs / Course",
    text: `<a href="https://www.udemy.com/certificate/UC-f844e0fa-57e5-498b-b02c-d64447909a92/" target="_blank" rel="noopener">Gen AI on AWS </a> — Generative AI on AWS - Amazon Bedrock, RAG & AWS Langchain [2026].`
  },
  {
    date: "04-05-2026",
    tag: "Certs / Course",
    text: `<a href="https://www.udemy.com/certificate/UC-412d1a6d-4298-48a4-984d-88253eed70fa/" target="_blank" rel="noopener">Containers on AWS</a> — Containers on AWS - ECS, EKS, and Fargate.`
  },
  {
    date: "13-04-2026",
    tag: "Certs / Course",
    text: `<a href="https://www.udemy.com/certificate/UC-1572f3f2-cbd0-4ebe-ad35-82ca000e9f02/" target="_blank" rel="noopener"> Resilient Architectures </a> — Resilient Architectures on AWS with Practical Solutions.`
  },
  {
    date: "09-04-2026",
    tag: "Certs / Course",
    text: `<a href="https://www.linkedin.com/learning/certificates/81a325d398e61dba53e32567b16e64181ec39292befcbda1fa73e66106a92bac?trk=share_certificate" target="_blank" rel="noopener"> Managing Project Stakeholders </a> — Managing Project Stakeholders.`
  },
  {
    date: "12-03-2026",
    tag: "Certs / Course",
    text: `<a href="https://www.linkedin.com/learning/certificates/842404701572c4b180082de26649458e83434908f6a3f4b0be31a7a76875e1fd?trk=share_certificate" target="_blank" rel="noopener"> Giving and Receiving Feedback </a> — Giving and Receiving Feedback.`
  },
  {
    date: "11-03-2026",
    tag: "Certs / Course",
    text: `<a href="https://www.linkedin.com/learning/certificates/d3e14b02d2a37404da3326d83568d40377f43acabadaf8e5e3eb7075bb5e2ff7?trk=share_certificate" target="_blank" rel="noopener"> System Design </a> — System Design in Cloud.`
  },
  {
    date: "13-02-2026",
    tag: "Certs / Course",
    text: `<a href="https://www.linkedin.com/learning/certificates/06614dff244421d45048b372a53062e415525eca292eafb2d0cf937a4e5ac4e5?trk=share_certificate" target="_blank" rel="noopener"> OpenAI API for Python Developers </a> — OpenAI API for Python Developers.`
  },
  {
    date: "05-07-2026",
    tag: "Books",
    text: `"HBR's 10 Must Reads on AI" - <a href="https://www.goodreads.com/review/list/197420053-veeresh-wali?ref=nav_mybooks&shelf=read" target="_blank" rel="noopener">goodreads bookshelf</a>`
  },
  {
    date: "29-06-2026",
    tag: "Books",
    text: `"Language That Leads: Communication Strategies that Inspire and Engage" - <a href="https://www.goodreads.com/review/list/197420053-veeresh-wali?ref=nav_mybooks&shelf=read" target="_blank" rel="noopener">goodreads bookshelf</a>`
  },
  {
    date: "18-06-2026",
    tag: "Books",
    text: `"Competing in the Age of AI: Strategy and Leadership When Algorithms and Networks Run the World" - <a href="https://www.goodreads.com/review/list/197420053-veeresh-wali?ref=nav_mybooks&shelf=read" target="_blank" rel="noopener">goodreads bookshelf</a>`
  },
  {
    date: "01-06-2026",
    tag: "Books",
    text: `"Dare to Lead" - <a href="https://www.goodreads.com/review/list/197420053-veeresh-wali?ref=nav_mybooks&shelf=read" target="_blank" rel="noopener">goodreads bookshelf</a>`
  },
  {
    date: "16-05-2026",
    tag: "Books",
    text: `"The Hidden Hindu" - <a href="https://www.goodreads.com/review/list/197420053-veeresh-wali?ref=nav_mybooks&shelf=read" target="_blank" rel="noopener">goodreads bookshelf</a>`
  },
  {
    date: "15-05-2026",
    tag: "Books",
    text: `"The Communication Book: 44 Ideas for Better Conversations Every Day" - <a href="https://www.goodreads.com/review/list/197420053-veeresh-wali?ref=nav_mybooks&shelf=read" target="_blank" rel="noopener">goodreads bookshelf</a>`
  },
  {
    date: "02-05-2026",
    tag: "Books",
    text: `"The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness" - <a href="https://www.goodreads.com/review/list/197420053-veeresh-wali?ref=nav_mybooks&shelf=read" target="_blank" rel="noopener">goodreads bookshelf</a>`
  },
  {
    date: "21-04-2026",
    tag: "Books",
    text: `"Do The Impossible : How to Become Extraordinary and Impact the World at Scale" - <a href="https://www.goodreads.com/review/list/197420053-veeresh-wali?ref=nav_mybooks&shelf=read" target="_blank" rel="noopener">goodreads bookshelf</a>`
  }, 
  {
    date: "10-04-2026",
    tag: "Books",
    text: `"The Pillars of the Earth" - <a href="https://www.goodreads.com/review/list/197420053-veeresh-wali?ref=nav_mybooks&shelf=read" target="_blank" rel="noopener">goodreads bookshelf</a>`
  }, 
  {
    date: "10-03-2026",
    tag: "Books",
    text: `"The Ramayana: A Shortened Modern Prose Version of the Indian Epic" - <a href="https://www.goodreads.com/review/list/197420053-veeresh-wali?ref=nav_mybooks&shelf=read" target="_blank" rel="noopener">goodreads bookshelf</a>`
  }, 
  {
    date: "28-02-2026",
    tag: "Books",
    text: `"Reset: How to Change What's Not Working" - <a href="https://www.goodreads.com/review/list/197420053-veeresh-wali?ref=nav_mybooks&shelf=read" target="_blank" rel="noopener">goodreads bookshelf</a>`
  },
  {
    date: "28-01-2026",
    tag: "Books",
    text: `"Become a Great Engineering Leader: Build Effective Skills to Lead and Grow" - <a href="https://www.goodreads.com/review/list/197420053-veeresh-wali?ref=nav_mybooks&shelf=read" target="_blank" rel="noopener">goodreads bookshelf</a>`
  },
  {
    date: "2026-07",
    tag: "Project",
    text: `Built <a href="#" target="_blank" rel="noopener">Project documentation is in progress </a> — and will be listed here soon.`
  },
  {
    date: "20-05-2026",
    tag: "Article",
    text: `"Chaos Engineering" — <a href="https://www.linkedin.com/pulse/chaos-engineering-practice-practitioners-guide-sre-teams-veeresh-wali-ujoqc" target="_blank" rel="noopener">Read Article </a>`
  },
  {
    date: "14-05-2026",
    tag: "Article",
    text: `"DR Testing - conducting test" — <a href="https://www.linkedin.com/pulse/dr-testing-chaos-engineering-resilience-before-disaster-wali-0rhwc" target="_blank" rel="noopener">Read Article </a>`
  },
  {
    date: "06-05-2026",
    tag: "Article",
    text: `"Disaster Recovery Strategies" — <a href="https://www.linkedin.com/pulse/disaster-recovery-strategies-which-one-does-our-business-veeresh-wali-lhyvc" target="_blank" rel="noopener">Read Article </a>`
  },
  {
    date: "06-05-2026",
    tag: "Article",
    text: `"A Leader's Guide to SLIs, SLOs & Error Budgets" — <a href="https://www.linkedin.com/pulse/youre-using-slos-guessing-leaders-guide-slis-error-budgets-wali-3rj7c" target="_blank" rel="noopener">Read Article </a>`
  },
  {
    date: "24-03-2026",
    tag: "Article",
    text: `"Building an SRE function in a GCC" — <a href="https://www.linkedin.com/pulse/building-sre-function-gcc-from-support-reliability-veeresh-wali-zl13c" target="_blank" rel="noopener">Read Article </a>`
  },
  {
    date: "13-02-2026",
    tag: "Article",
    text: `"Gen-AI Real-World Use Cases" — <a href="https://www.linkedin.com/pulse/from-experimentation-engineering-building-real-world-ai-veeresh-wali-5sm0c" target="_blank" rel="noopener">Read Article </a>`
  }
];

const credentials = [
  { name: "AWS Certified Machine Learning - Specialty", issuer: "Amazon Web Services", type: "Certification", url: "https://www.credly.com/badges/8933682b-505c-4164-afaa-3a2eb9b1f7ff", backDesc: "Advanced ML models, SageMaker deployment, enterprise data engineering, and predictive AI pipelines." },
  { name: "AWS Certified AI Practitioner", issuer: "Amazon Web Services", type: "Certification", url: "https://www.credly.com/badges/b1a79e03-ea81-4694-893f-d099a4d68c10", backDesc: "Generative AI foundational models, Bedrock integrations, prompt engineering, and operational governance." },
  { name: "AWS Certified Solutions Architect - Professional", issuer: "Amazon Web Services", type: "Certification", url: "https://www.credly.com/badges/1b6de1a6-8256-4006-8361-1b605c900fc9", backDesc: "Multi-account AWS architectures, zero-trust security controls, high availability, and DR topologies." },
  { name: "Professional Cloud Architect", issuer: "Google Cloud", type: "Certification", url: "./certificates/GCP_Prof_cloud_architect.pdf", backDesc: "GCP enterprise design, Shared VPCs, Kubernetes/GKE orchestration, and secure hybrid cloud solutions." },
  { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft Azure", type: "Certification", url: "https://www.credly.com/badges/39b9d03f-8b89-4958-8adb-2db56678e9ac", backDesc: "Cloud security concepts, Azure resource management, core cloud services, and compliance governance." },
  { name: "FinOps Certified Practitioner", issuer: "FinOps Foundation", type: "Certification", url: "https://verify.skilljar.com/c/f5rrphu259ep", backDesc: "Cloud cost optimization strategies, unit economics tracking, enterprise allocation, and cloud financial management." },
  { name: "Terraform Associate", issuer: "HashiCorp - IBM Professional", type: "Certification", url: "https://www.credly.com/badges/0797bcd4-6a41-4b5b-a8d7-565bfba77d71", backDesc: "Infrastructure as Code (IaC) modularization, state management, automated CI/CD cloud provisioning pipelines." },
  { name: "Splunk Certified Power User", issuer: "Splunk", type: "Certification", url: "https://www.credly.com/badges/bbfde02a-c52d-4391-bcdb-e6f21e1a8de5", backDesc: "Complex SPL search queries, operational dashboard creation, log analysis, and incident investigation." },
  { name: "Certified Scrum Master", issuer: "Scrum Alliance", type: "Certification", backDesc: "Agile project execution, Scrum team coaching, sprint planning, backlog grooming, and velocity tracking." },
  { name: "ITIL V3 Foundation", issuer: "APMG International", type: "Certification", url: "./certificates/ITIL_V3_Foundation.jpg", backDesc: "IT Service Management framework / ITIL (IT infrastructure library) incident, transition, release, problem, change managements, SLA/SLO metrics, and operational readiness." }
];