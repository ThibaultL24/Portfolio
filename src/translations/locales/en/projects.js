export const projects = {
  title: "Projects",
  kicker: "Proof",
  description:
    "Shipped sites and products for independents, studios, and teams. Filters: client, product, web3.",
  metaTitle: "Projects — Thibault Lenormand",
  metaDescription:
    "Showcase sites, web products, and tools shipped by Thibault Lenormand, freelance developer in Avignon.",
  list: {
    project1: {
      title: "Patte à Patte",
      description:
        "Platform to exchange, sell, and find pet services — sitting, classifieds, messaging.",
      brief: {
        forWho: "Pet owners who want to help each other (sitting, gear) without a generic marketplace.",
        problem: "Finding a nearby sitter or second-hand accessory, with a minimum of trust between individuals.",
        delivered:
          "Community platform: profiles, sitting, classifieds, reviews, geolocation, messaging. Built in a team (Rails, PostgreSQL, Tailwind).",
        result: "End-of-training product, deployed on Fly.io. Proof of a full cycle (design, back, front).",
      },
      context: "Built at The Hacking Project with Alexandre Tedesco and Manon Esquerre.",
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
        "Explore the Intuition trust graph in 2D, 3D, and VR — filters, node details, navigation.",
      brief: {
        forWho: "Intuition teams and contributors who need to read a semantic graph too dense for a table.",
        problem: "On-chain identities, claims, and relations stay unreadable without a usable network view.",
        delivered:
          "Visualization app (2D / 3D / VR): zoom, history, filters, detail panel, Three.js / react-force-graph.",
        result: "Internal / demo explorer for the graph. Starting point of a longer Intuition collaboration.",
      },
      context: "Started as a THP internship, continued as product work.",
      technologies: [
        { name: "React", color: "cyan" },
        { name: "Three.js", color: "blue" },
        { name: "WebGL", color: "purple" },
        { name: "VR", color: "green" },
        { name: "TypeScript", color: "blue" },
        { name: "react-force-graph", color: "orange" },
        { name: "three-spritetext", color: "pink" },
      ],
      authors: [
        "Thibault LENORMAND",
        "Alexandre TEDESCO",
        "Maxime LODATO",
        "Sacha GODEL",
        "Thomas BOBICHON",
      ],
    },
    project3: {
      title: "DecentRep",
      description:
        "AI assistant to write professional recommendations as semantic triples.",
      brief: {
        forWho: "People and teams who need structured professional recommendations, reusable on-chain.",
        problem: "Free text is neither verifiable nor queryable. You need subject–relation–object without writing RDF by hand.",
        delivered:
          "React app: input, AI extraction into triples, clear display. Intuition protocol hook-in.",
        result: "Usable prototype. Approach close to later claim-extraction work (e.g. Claimify).",
      },
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
    },
    project4: {
      title: "Agent",
      description:
        "Analytics and ops platform for Boss Fighters players, streamers, and investors.",
      brief: {
        forWho: "Boss Fighters players, streamers, and investors who need numbers and tools, not a forum.",
        problem: "Useful data is scattered. Hard to decide (roster, economy, content) without a dedicated back-office.",
        delivered:
          "Open-source platform: Rails backend (auth, Stripe, mail), React front. Role: main backend + part of the front.",
        result: "Live product (agent-bossfighters.com), used around the game.",
      },
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
        "Community map for game studios: player graph, feedback, transparency — npm library.",
      brief: {
        forWho: "Game studios that want to show and read their community (not only a closed Discord).",
        problem: "Few simple web3 tools to expose a player graph and collect usable feedback.",
        delivered:
          "Player Map: React/TypeScript lib (Wagmi, Intuition, Base), npm install, meant to drop into an existing app.",
        result: "Base Batch hackathon prototype, reusable as a library.",
      },
      context: "Base Batch hackathon, with Alexandre Tedesco and Steven Ratton.",
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
        "Showcase site for a luxotherapy and hypnosis practice in Avignon — offer, proof, booking.",
      brief: {
        forWho: "Camille Laplace, luxotherapist and hypnotherapist in Avignon.",
        problem:
          "Explain uncommon treatments, the 21-day detox program, and booking — without looking amateur or using jargon.",
        delivered:
          "Showcase site: care journey, remote program, testimonials, CTA (first assessment free). Offer structure and copy included.",
        result: "Live at laplaceluxopuncture.fr. LinkedIn recommendation, April 2026.",
      },
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
        "One-page site for an advertising visual studio — gallery, pricing, contact, admin.",
      brief: {
        forWho: "Dylan Lacas / CORVUS Studio, premium advertising visuals.",
        problem:
          "No site matching the art direction, and no way to update work and images without a redeploy.",
        delivered:
          "One-pager: work, filterable gallery, pricing, contact. Authenticated admin (Auth.js, Vercel Blob) for content.",
        result: "Live at corvus-studio.fr. LinkedIn recommendation, September 2026.",
      },
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
        "Association site: story, actions, HelloAsso donations, and content admin.",
      brief: {
        forWho: "The association “Un souffle d’espoir pour Kaïron” and the family.",
        problem:
          "Tell the story, relay local actions, and send people to official donations — without a developer for every update.",
        delivered:
          "Public site (story, events, HelloAsso) + admin (copy, testimonials, figures) via Redis / Vercel.",
        result: "Production site (Vercel), content editable by the association.",
      },
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
    project12: {
      title: "Intuition Ideation Skill",
      description:
        "Skill and Hunch dapp: from a product idea to a GitHub PR and an on-chain attestation.",
      brief: {
        forWho: "Intuition contributors, including non-developers, who want to publish an idea in the ecosystem.",
        problem:
          "The path idea → GitHub catalog → on-chain graph is fragmented, and jargon (atoms, triples) gets in the way.",
        delivered:
          "Cursor/Claude skill in five steps + Hunch dapp (search, AI, PR, attestation). Same journey, two surfaces.",
        result: "Public skill (intuition-box) and live dapp: ideation.intuition.box.",
      },
      technologies: [
        { name: "Cursor Skills", color: "orange" },
        { name: "Claude", color: "yellow" },
        { name: "Intuition Protocol", color: "cyan" },
        { name: "GitHub", color: "gray" },
        { name: "Next.js", color: "gray" },
        { name: "wagmi", color: "purple" },
      ],
      authors: ["Thibault LENORMAND"],
    },
    project10: {
      title: "TrustBook",
      description:
        "Social feed ranked by a Circles trust graph, not by engagement.",
      brief: {
        forWho: "Circles users and teams testing a feed where trust has an economic cost.",
        problem: "Like-ranked feeds don’t explain why a post appears, and don’t lead to a CRC action.",
        delivered:
          "Mini-app: ranking by relations, paths, communities, CRC boosts; each card explains its rank; tip / boost / trust.",
        result: "Live demo (Vercel) for Circles Garage.",
      },
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
        "Redesign proposal for the French MMA Federation site: readable, institutional, sporting.",
      brief: {
        forWho: "FMMAF (proposal — not an official shipped site).",
        problem:
          "The content exists; the site no longer matches MMA’s momentum in France (delegation, high-level recognition).",
        delivered:
          "Next.js prototype: hierarchy, sporting identity, before/after on existing copy, a more premium variant.",
        result: "Prototype online (mma-project.vercel.app).",
      },
      technologies: [
        { name: "Next.js", color: "gray" },
        { name: "TypeScript", color: "blue" },
        { name: "Tailwind CSS", color: "teal" },
      ],
      authors: ["Thibault LENORMAND"],
    },
  },
  viewDetails: "View project",
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
    dapp: "View the dapp",
    portal: "View the portal",
    authors: "With",
    hackathon: "View hackathon",
    year: "Year",
    role: "Role",
    forWho: "For whom",
    problem: "Problem",
    delivered: "Shipped",
    result: "Outcome",
    context: "Context",
  },
};
