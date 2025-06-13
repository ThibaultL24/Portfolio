export const projects = {
  title: "PROJECTS",
  description:
    "Discover a selection of my recent projects that showcase my approach and skills in architecture and design.",
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
  },
  viewDetails: "View details →",
  details: {
    technologies: "Technologies used",
    links: "Project links",
    production: "View site",
    authors: "Project authors",
    hackathon: "View on Hackathon Base",
  },
};
