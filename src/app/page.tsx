import Image from "next/image";

const sections = [
  {
    id: "about",
    title: "About",
    paragraphs: [
  "I am an Associate Professor of Computer Science at California Lutheran University, with previous teaching appointments at New College of Florida, Grinnell College, Bucknell University, and the University of North Texas.",

  "My teaching spans programming, algorithms, software engineering, and AI. My research explores computing education, natural language processing, recommender systems, and health-related misinformation.",

  "I enjoy mentoring students as they turn ideas into working tools and thoughtful experiments. I welcome new projects with CLU students, including AI transparency, dataset documentation, and evaluating AI-generated information.",
],
  },
  {
    id: "research",
    title: "Research & Opportunities",
    paragraphs: [
  "My research explores how computing can help people find, understand, and use information. My work has included natural language processing, text summarization, recommender systems, health-related misinformation, and computing education. Across these areas, I am interested in how we build useful systems and evaluate them in the contexts where people use them.",

  "One direction I would like to explore with CLU students is AI transparency: what should people know about an AI system, and transparency to whom? A developer, a student using an AI tool, and a person affected by an automated decision may need different information. Possible projects include documenting datasets, evaluating the reliability of AI-generated answers, and designing explanations for different audiences.",

  "I also welcome conversations about projects in natural language processing, educational technology, recommender systems, and human-computer interaction. A project might involve developing a prototype, comparing methods, analyzing a dataset, or investigating how a tool supports learning. We can shape the question and scope together around your interests and preparation.",

  "You do not need a fully developed research proposal to start a conversation. Tell me what interests you, which relevant courses or experiences you have, and what you hope to learn. Depending on the project, useful contributions may include programming, reading research papers, documenting data, designing interfaces, or analyzing results. We will discuss a manageable first task and the skills needed to pursue it.",
],
  },
  {
    id: "student-work",
    title: "Student Work",
   paragraphs: [
  "Undergraduate research gives students an opportunity to move from learning established methods to asking and investigating their own questions. I have mentored work in areas including recommender systems, neural rendering, social media analysis, misinformation, educational applications, and software development.",

  "The projects below highlight students’ questions, approaches, and contributions. Some led to posters, theses, or publications; others produced working software and practical experience in designing and evaluating a system. These examples can offer starting points as you consider your own interests.",
],
  },
  {
    id: "publications",
    title: "Publications",
    paragraphs: [
  "My publications span computing education, natural language processing and information retrieval, and the human context of health information. The selected work below includes studies of programming-course design, Bengali named entity recognition, text summarization, health-related misinformation, and sociocultural barriers to breast cancer awareness.",

  "For students exploring research, these papers offer examples of how a broad interest becomes a specific question, a method, and an analysis. You are welcome to contact me about a paper that connects with something you would like to investigate.",
],
  },
  {
    id: "teaching",
    title: "Teaching",
    paragraphs: [
  "I teach across the undergraduate computer science curriculum, from introductory programming to data structures, algorithms, software engineering, artificial intelligence, and natural language processing. My teaching experience includes Python, Java, C/C++, and functional programming.",

  "I aim to help students understand why an approach works, explain their reasoning, and apply what they learn to unfamiliar problems. My courses combine conceptual discussion with programming practice, code review, and projects that encourage students to design, test, and improve their solutions.",

  "I also value the connection between teaching and research. A classroom question, a challenging assignment, or an unexpected result can become the starting point for a deeper investigation. Enrolled students should use Canvas for current course materials, announcements, and deadlines.",
],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
  "CLU students interested in research are welcome to email me with a brief introduction. Include the topic or project that interests you, your relevant courses or experience, and what you would like to learn. If you are still exploring, that is a useful starting point too.",

  "I also welcome inquiries about research collaboration and computing education. My office is in Ahmanson Science Center, Room 120. Please email to arrange a meeting.",
],
  },
];

const studentTheses = [
  {
    title:
      "CanvasCram: Automating the Generation of Learning Materials Using Retrieval-Augmented Generation (RAG)",
    student: "Paige Grimes",
    term: "Spring 2026",
  },
  {
    title:
      "Enhancing Communication in Amateur Soccer Teams Through a Centralized Management App",
    student: "Manuel A. Rodriguez",
    term: "Spring 2026",
  },
  {
    title:
      "Pathfinder: The Development and Pursuit of a Fair and Enjoyable Challenge with the Godot Game Engine",
    student: "Seamus Jackson",
    term: "Fall 2025",
  },
  {
    title: "Exploiting Prisoner’s Dilemma",
    student: "Boland Unfug",
    term: "Fall 2024",
  },
  {
    title: "Personal Calendar App Using Ionic",
    student: "Andrew Gordon",
    term: "Fall 2024",
  },
  {
    title:
      "Optimizing Motor Imagery BCIs: A Motor Imagery EEG Classification Protocol Using Evolutionary Optimization and Low Sample Training-Sets",
    student: "Marios Petrov",
    term: "Spring 2024",
  },
  {
    title: "NCF Forum: A Secure Student Communication Platform",
    student: "Nicolas Pitcher",
    term: "Spring 2024",
  },
  {
    title:
      "Medical Relevancy of Cancer-Related Tweets and Their Relation to Misinformation",
    student: "Melanie McCord",
    term: "Spring 2023",
  },
];

const studentPosters = [
  {
    title:
      "ρ-NLR: A Neural Lumigraph Renderer with Controllable Illumination",
    students: "Beau Perkins",
    context: "SIGCSE TS 2022",
    description:
      "Explored neural rendering to generate new views of an object and control its illumination. Developed a TensorFlow implementation of Neural Lumigraph Rendering and extended it to support relighting.",
  },
  {
    title:
      "Examining the Efficacy of Social Media Data Extraction on Multiple Platforms",
    students: "Marios Petrov and Shawn Nash",
    context: "CCSC Northeast 2023",
    description:
      "Compared data extraction from Facebook, Twitter, and Reddit, examining differences in access, documentation, and platform restrictions. Proposed a standardized approach to researcher access that considers privacy and security.",
  },
  {
    title: "Multilingual Analysis of COVID-19 Vaccine Tweets",
    students: "Nisanur Genc",
    context: "Summer Research 2021",
    description:
      "Contributed to a dataset of 489 vaccine-related tweets in English, Turkish, and Russian, labeled as informative, misinformative, or unverified. Examined differences in hashtag use and the challenges of fact-checking multilingual social media content.",
  },
  {
    title: "Personalized Hybrid Artist Recommender System",
    students: "Linh Tang",
    context: "Summer Research 2019 · Grinnell College",
    description:
      "Combined collaborative filtering with personalized listener and artist features to explore more varied music recommendations. Evaluated the system against a baseline using precision, recall, and F1 score.",
  },
];

export default function Home() {
  return (
    <>
    <header id="home" className="site-header">
      <a className="site-name" href="#home">
          Fahmida Hamid
        </a>

        <nav aria-label="Main navigation">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.title}
            </a>
          ))}
        </nav>
      </header> 
    <main className="container">
   <section className="hero">
  <div className="hero-text">
    <p className="eyebrow">
      Computer Science · California Lutheran University
    </p>

    <h1>
      Fahmida Hamid<span>, Ph.D.</span>
    </h1>

    <p className="eyebrow">
      Associate Professor of Computer Science
    </p>

    <p className="intro">
      I teach computer science and mentor undergraduate research that
      connects computing with questions about learning, language, and
      people. My interests include natural language processing, applied
      machine learning, computing education, and human-computer interaction.
    </p>

    <p className="intro">
      Curious about research? Explore examples of past student work and
      ideas for new projects. Whether you have a question of your own or
      are still discovering your interests, I welcome a conversation
      about where to begin.
    </p>


    <div className="hero-actions">
      <a className="button" href="#research">
        Explore research opportunities
      </a>

      <a className="secondary-link" href="#student-work">
        Discover student work
      </a>
    </div>
  </div>

  <Image
    src="/images/hamid.jpg"
    alt="Fahmida Hamid"
    width={480}
    height={600}
    className="profile-photo"
    sizes="(max-width: 760px) 240px, 300px"
    priority
  />
</section>

        {sections.map((section) => (
  <section
    key={section.id}
    id={section.id}
    className="content-section"
  >
    <h2>{section.title}</h2>

    {section.paragraphs.map((paragraph, index) => (
      <p key={`${section.id}-${index}`} className="section-paragraph">
        {paragraph}
      </p>
    ))}

    {section.id === "publications" && (
  <div className="section-links">
    <a
      href="https://scholar.google.com/citations?user=HJcTj_4AAAAJ&hl=en"
      target="_blank"
      rel="noopener noreferrer"
    >
      View my Google Scholar profile
    </a>
  </div>
)}

    {section.id === "student-work" && (
  <div className="student-work-groups">
    <div>
      <h3>Undergraduate Theses</h3>
      <p className="group-note">
        Theses sponsored at New College of Florida.
      </p>

      <ul className="student-work-list">
        {studentTheses.map((thesis) => (
          <li key={thesis.title}>
            <strong>{thesis.title}</strong>
            <span className="student-work-meta">
              {thesis.student} · {thesis.term}
            </span>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3>Research Posters</h3>

      <ul className="student-work-list">
        {studentPosters.map((poster) => (
          <li key={poster.title}>
            <strong>{poster.title}</strong>
            <span className="student-work-meta">
              {poster.students} · {poster.context}
            </span>
            <p>{poster.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
)}

    {section.id === "about" && (
      
      <>
      <div className="education">
  <h3>Education</h3>

  <ul>
    <li>
      <strong>Ph.D. in Computer Science and Engineering</strong>
      <span>{" "} University of North Texas · 2016</span>
      <p>
        Ph.D. advisor:{" "}
        <a
          href="https://engineering.unt.edu/people/paul-tarau.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Paul Tarau
        </a>
      </p>
    </li>

    <li>
      <strong>M.Sc. in Computer Science and Engineering</strong>
      <span>{" "}  University of Dhaka · 2009</span>
    </li>

    <li>
      <strong>B.Sc. in Computer Science and Engineering</strong>
      <span>{" "}  University of Dhaka · 2007</span>
    </li>
  </ul>
</div>
      <div className="section-links">
        <a
          href="/files/Fahmida_Hamid_Updated_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View CV
        </a>

        <a
          href="https://github.com/FahmidaHamid"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      </>
      
    )}

    {section.id === "contact" && (
  <div className="contact-details">
    <p>
      <strong>
        <a href="mailto:fhamid@callutheran.edu">
          fhamid@callutheran.edu
        </a>
      </strong>
    </p>
<div className="office-hours">
  <h3>Fall 2026 Office Hours</h3>

  <ul>
    <li>
      <strong>Monday and Wednesday</strong>
      <span>11:00 a.m.–12:00 p.m.</span>
    </li>
    <li>
      <strong>Thursday</strong>
      <span>11:30 a.m.–12:30 p.m.</span>
    </li>
  </ul>

  <p>Pacific Time · Ahmanson Science Center, Room 120</p>
</div>

    
  </div>
)}
  </section>
))}
      </main>

      <footer className="container site-footer">
        Fahmida Hamid · California Lutheran University
      </footer>

      <a
  href="#home"
  className="back-to-top"
  aria-label="Back to top of page"
>
  ↑ Back to top
</a>
    </>
  );
}