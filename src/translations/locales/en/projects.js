export const projects = {
  title: "Projects",
  description:
    "Commissions, products, experiments. A selection of sites and tools I designed, wrote, and shipped.",
  list: {
    project1: {
      title: "Patte à Patte",
      description:
        "Final project at The Hacking Project - Community platform for exchanging, selling, and finding pet services. A dynamic community for pet lovers across France.",
      longDescription:
        "Patte à Patte is my final project at The Hacking Project. It's a community platform I developed with two other students, allowing pet owners to exchange services and accessories.\n\n" +
        "The concept is simple yet effective: create a trusted community where pet owners can help each other. The platform offers several key features:\n\n" +
        "• A pet-sitting system between individuals, allowing users to find trusted pet-sitters nearby\n" +
        "• A marketplace for pet accessories and products, where members can sell or buy second-hand items\n" +
        "• A recommendation and review system to ensure service quality\n" +
        "• Geolocation to easily find services and members nearby\n" +
        "• An integrated messaging system to facilitate exchanges\n\n" +
        "The project was built with Ruby on Rails and deployed on Fly.io. The user interface was designed with Tailwind CSS for a smooth and responsive experience, while JavaScript was used for dynamic interactions. The PostgreSQL database ensures efficient management of user data and transactions.\n\n" +
        "The community aspect is at the heart of the project, with a detailed profile system allowing members to introduce themselves and share their experience with animals. The platform encourages mutual aid and solidarity between pet owners, while offering a practical and economical solution for pet-sitting services and accessory purchases.",
      technologies: [
        { name: "Ruby on Rails", color: "red" },
        { name: "PostgreSQL", color: "blue" },
        { name: "Tailwind CSS", color: "teal" },
        { name: "JavaScript", color: "yellow" },
        { name: "Fly.io", color: "purple" },
        { name: "Figma", color: "pink" },
      ],
      authors: ["Alexandre TEDESCO", "Manon ESQUERRE", "Thibault LENORMAND"],
    },
    project2: {
      title: "i7n Graph of Intuition",
      description:
        "Visualization of semantic data in 2D, 3D and VR for the Intuition trust protocol.",
      longDescription:
        "The Intuition protocol aims to resolve the paradox of trust in decentralized systems. It proposes an intuitive and verifiable layer of trust, using decentralized identifiers (DIDs) and verifiable credentials (VCs) to structure identity data and enable nuanced trust assessments. The ultimate goal is to create a semantic and community trust graph.",
      technologies: [
        { name: "React", color: "blue" },
        { name: "react-force-graph", color: "green" },
        { name: "three-spritetext", color: "purple" },
      ],
      authors: [
        "Thibault Bobichon",
        "Alexandre Tedesco",
        "Maxime Lodato",
        "Sacha Godel",
        "Thomas Bobichon",
      ],
    },
    project3: {
      title: "DecentRep",
      description:
        "AI assistant for creating professional recommendations as semantic triples, integrated with the Intuition protocol.",
      longDescription:
        "DecentRep is an innovative web application that enables the creation and management of professional recommendations in the form of 'semantic triples' (Subject, Predicate, Object), using AI to enrich and structure information.\n\n" +
        "The application uses artificial intelligence to transform descriptive texts into structured semantic triples, making it easier to create clear and verifiable professional recommendations. For example, a recommendation like 'Elon Musk is CEO of Tesla' is structured as a triple: Subject (Elon Musk), Predicate (is CEO of), Object (Tesla).\n\n" +
        "The project integrates with the Intuition protocol, contributing to the creation of a decentralized reputation network where recommendations are verifiable and immutable. This approach helps combat misinformation and creates a more transparent and reliable trust system.\n\n" +
        "Built with React and Vite, the application offers a modern and responsive user interface thanks to TailwindCSS. The code architecture is well-structured, with a clear separation of responsibilities between components. The project uses TypeScript to ensure code robustness and Axios for API communication.\n\n" +
        "A few months after developing DecentRep, Microsoft Research released a similar project called Claimify, validating the innovative approach taken in this project.",
      technologies: [
        { name: "React", color: "cyan" },
        { name: "TypeScript", color: "blue" },
        { name: "TailwindCSS", color: "teal" },
        { name: "Vite", color: "purple" },
        { name: "Axios", color: "green" },
        { name: "Intuition", color: "orange" },
        { name: "ESLint", color: "yellow" },
      ],
      authors: ["Thibault LENORMAND"],
      links: {
        claimify:
          "https://www.microsoft.com/en-us/research/blog/claimify-extracting-high-quality-claims-from-language-model-outputs/",
      },
    },
    project4: {
      title: "Agent",
      description:
        "Open-source platform designed to optimize the experience of Boss Fighters players. It provides analytical and management tools, enabling players, streamers, and investors to make informed in-game decisions.",
      longDescription:
        "Agent is an open-source platform designed to optimize the experience of Boss Fighters players. This project originated from an original idea by Steven Ratton (Omiage), who brought together a passionate team to develop it over several months.\n\n" +
        "Boss Fighters is a web3 asymmetric multiplayer action game where a player in virtual reality embodies a giant boss facing a team of PC fighters. This free-to-play game combines strategy, humor, and physical interactions in futuristic arenas, offering an immersive and competitive experience.\n\n" +
        "As the lead developer, I was responsible for the entire backend and a significant portion of the frontend, working closely with Alexandre Tedesco and Omiage to create a complete and performant solution.\n\n" +
        "Discover the platform presentation by Merlin, leader of the Alchemists guild and project partner, who will guide you through Agent's various features.",
      technologies: [
        { name: "Ruby on Rails 8.0", color: "red" },
        { name: "PostgreSQL", color: "blue" },
        { name: "Devise", color: "purple" },
        { name: "JWT", color: "orange" },
        { name: "Stripe", color: "green" },
        { name: "Mailjet", color: "pink" },
        { name: "React", color: "cyan" },
        { name: "Vite", color: "purple" },
        { name: "TailwindCSS", color: "teal" },
        { name: "TypeScript", color: "blue" },
        { name: "Radix UI", color: "orange" },
      ],
      authors: [
        "Thibault LENORMAND",
        "Alexandre TEDESCO",
        "Steven RATTON (Omiage)",
      ],
    },
    project5: {
      title: "Agent Player Map",
      description:
        "Web3 solution developed during the Base Batch hackathon, enabling game studios to visualize and analyze their community data using Intuition technology.",
      longDescription:
        "Agent Player Map is an innovative solution developed during the Base Batch hackathon to address game studios' needs for collaborative development.\n\n" +
        "The project aims to solve a major problem: the lack of web3 solutions allowing studios to provide information transparency to their gaming community and collect their feedback and desires.\n\n" +
        "Our solution combines web2 tools for understanding, decision support, and content creation with an innovative web3 tool 'Player Map' using Intuition technology. This interactive map allows the community to create and build the game's Intuition Graph, providing complete transparency on data and facilitating feedback collection for the studio.\n\n" +
        "Developed as a reusable open-source library, the project can be easily integrated via a simple 'npm install player-map' in any application.",
      technologies: [
        { name: "React", color: "cyan" },
        { name: "TypeScript", color: "blue" },
        { name: "Wagmi", color: "purple" },
        { name: "Intuition", color: "orange" },
        { name: "Base", color: "green" },
        { name: "NPM", color: "red" },
      ],
      authors: [
        "Thibault LENORMAND",
        "Alexandre TEDESCO",
        "Steven RATTON (Omiage)",
      ],
    },
    project6: {
      title: "Camille Luxopuncture",
      description:
        "Showcase site for Camille Laplace, luxotherapy and hypnosis practitioner in Avignon — detox program, testimonials, and booking.",
      longDescription:
        "Camille Luxopuncture is the website of Camille Laplace, a luxotherapy and hypnosis practitioner based in Avignon. The project gives a clear, luminous, reassuring presence to a gentle-health practice.\n\n" +
        "The site highlights a 21-day remote detox program, in-cabinet sessions (infrared luxopuncture, hypnosis), patient testimonials, and a simple booking path — the first assessment is free.\n\n" +
        "The brief was voice, not volume: softness, clarity, proof. Careful type, editorial rhythm, a gallery of reviews, quiet calls to action. Live at laplaceluxopuncture.fr.",
      technologies: [
        { name: "React", color: "cyan" },
        { name: "Vite", color: "purple" },
        { name: "TypeScript", color: "blue" },
        { name: "Vercel", color: "gray" },
      ],
      authors: ["Thibault LENORMAND"],
    },
    project7: {
      title: "Corvus Studio",
      description:
        "One-page portfolio for an independent premium advertising visual studio — cosmic art direction, gallery, and admin.",
      longDescription:
        "Corvus Studio is the site of an independent studio making premium advertising visuals. The world mixes dark art direction, cosmic aesthetics, monumental type, and cyan/violet accents.\n\n" +
        "It includes an immersive landing, a work marquee, a filterable gallery with project modal, pricing, creation fields, a studio portrait (Dylan Lacas), and a contact form.\n\n" +
        "Built with Next.js 15, React 19, TypeScript, Tailwind and Framer Motion. An authenticated back-office (Auth.js + Vercel Blob) manages works, images and social links without redeploying.",
      technologies: [
        { name: "Next.js 15", color: "gray" },
        { name: "React 19", color: "cyan" },
        { name: "TypeScript", color: "blue" },
        { name: "Tailwind CSS", color: "teal" },
        { name: "Framer Motion", color: "pink" },
        { name: "Auth.js", color: "purple" },
        { name: "Vercel Blob", color: "orange" },
      ],
      authors: ["Thibault LENORMAND"],
    },
    project8: {
      title: "Kaïron",
      description:
        "Association site for “Un souffle d’espoir pour Kaïron” — story, HelloAsso donations, events, and content admin.",
      longDescription:
        "Kaïron is the website of the association “Un souffle d’espoir pour Kaïron”. It tells a child’s story, relays the association’s actions, and points to official HelloAsso donations.\n\n" +
        "The site combines an emotional showcase — narrative, visuals, local events — with a content admin so the family can update copy, testimonies and figures without touching code.\n\n" +
        "Stack: React, TypeScript, Vite, Tailwind, Framer Motion, Upstash Redis for dynamic content, deployed on Vercel.",
      technologies: [
        { name: "React", color: "cyan" },
        { name: "TypeScript", color: "blue" },
        { name: "Vite", color: "purple" },
        { name: "Tailwind CSS", color: "teal" },
        { name: "Framer Motion", color: "pink" },
        { name: "Upstash Redis", color: "red" },
        { name: "Vercel", color: "gray" },
      ],
      authors: ["Thibault LENORMAND"],
    },
    project9: {
      title: "Fenêtre Ouverte",
      description:
        "Local real-estate and commerce gazette — articles, merchants, subscriptions, and an editorial back-office.",
      longDescription:
        "Fenêtre Ouverte (Proximo) is a local gazette app: territorial news, real estate, nearby merchants, and a back-office to write, publish and track activity.\n\n" +
        "The product mixes public reading (article cards, towns, merchants, PWA) with operational tools (editorial, analytics, commissions, Stripe subscriptions). The aim: give a field gazette a contemporary vitrine and a real working tool.\n\n" +
        "React/TypeScript/Vite frontend, dedicated backend, Vercel deploy and containerized infrastructure.",
      technologies: [
        { name: "React", color: "cyan" },
        { name: "TypeScript", color: "blue" },
        { name: "Vite", color: "purple" },
        { name: "TanStack Query", color: "red" },
        { name: "PWA", color: "orange" },
        { name: "Stripe", color: "green" },
      ],
      authors: ["Thibault LENORMAND"],
    },
    project10: {
      title: "TrustBook",
      description:
        "Circles mini-app: a social feed ranked by a trust graph instead of engagement.",
      longDescription:
        "TrustBook is a mini-app built for Circles Garage. The feed is not ranked by likes: it is ranked by explicit trust — direct relations, shared paths, communities, CRC boosts, and optional Intuition claims.\n\n" +
        "Every card explains why it appears. One tap leads to a CRC action (tip, boost, trust). The project asks what a social network becomes when trust is an economic primitive, not a follow button.\n\n" +
        "Next.js, TypeScript, Tailwind, Circles / Gnosis SDK. Live demo available.",
      technologies: [
        { name: "Next.js", color: "gray" },
        { name: "TypeScript", color: "blue" },
        { name: "Tailwind CSS", color: "teal" },
        { name: "Circles", color: "green" },
        { name: "Gnosis", color: "orange" },
        { name: "Intuition", color: "purple" },
      ],
      authors: ["Thibault LENORMAND"],
    },
    project11: {
      title: "FMMAF — site proposal",
      description:
        "Visual redesign of the French MMA Federation website: sporting, readable, institutional.",
      longDescription:
        "A redesign proposal for the FMMAF website. The federation already has the content; the digital vitrine no longer matches MMA’s momentum in France (2020 delegation, 2024 high-level recognition).\n\n" +
        "The mockups reuse existing copy to show a concrete before/after: readability, sporting identity, octagon textures, clear hierarchy. A “Neo-Fight UI” variant explores a more premium register — black, signal green, league structure.\n\n" +
        "The prototype is live. Stack: Next.js, TypeScript, Tailwind.",
      technologies: [
        { name: "Next.js", color: "gray" },
        { name: "TypeScript", color: "blue" },
        { name: "Tailwind CSS", color: "teal" },
      ],
      authors: ["Thibault LENORMAND"],
    },
  },
  viewDetails: "Read the project",
  featuredLabel: "Featured",
  filters: {
    all: "All",
    commande: "Client",
    produit: "Product",
    web3: "Web3",
  },
  details: {
    technologies: "Stack",
    links: "Links",
    production: "View site",
    authors: "With",
    hackathon: "View hackathon",
    year: "Year",
    role: "Role",
  },
};
