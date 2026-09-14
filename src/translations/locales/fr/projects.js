export const projects = {
  title: "Projets",
  kicker: "Preuves",
  description:
    "Sites et produits livrés pour des indépendants, des studios et des équipes. Filtres : commande, produit, web3.",
  metaTitle: "Projets — Thibault Lenormand",
  metaDescription:
    "Sites vitrines, produits web et outils livrés par Thibault Lenormand, développeur freelance à Avignon.",
  list: {
    project1: {
      title: "Patte à Patte",
      description:
        "Plateforme pour échanger, vendre et trouver des services autour des animaux — garde, petites annonces, messagerie.",
      brief: {
        forWho: "Propriétaires d’animaux qui veulent s’entraider (garde, accessoires) sans passer par une marketplace générique.",
        problem: "Trouver un pet-sitter ou un accessoire d’occasion proche, avec un minimum de confiance entre particuliers.",
        delivered:
          "Plateforme communautaire : profils, garde entre particuliers, petites annonces, avis, géolocalisation, messagerie. Construit en équipe (Rails, PostgreSQL, Tailwind).",
        result: "Produit de fin de formation, déployé sur Fly.io. Preuve d’un parcours complet (conception, back, front).",
      },
      context: "Réalisé pendant The Hacking Project, avec Alexandre Tedesco et Manon Esquerre.",
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
      title: "i7n Graph d'Intuition",
      description:
        "Exploration du graphe de confiance Intuition en 2D, 3D et VR — filtrage, détails de nœuds, navigation.",
      brief: {
        forWho: "Équipes et contributeurs Intuition qui doivent lire un graphe sémantique trop dense pour un tableau.",
        problem: "Les identités, claims et relations on-chain restent illisibles sans une vue réseau exploitable.",
        delivered:
          "App de visualisation (2D / 3D / VR) : zoom, historique, filtres, panneau de détail, rendu Three.js / react-force-graph.",
        result: "Outil interne / démo d’exploration du graphe. Base d’une collaboration plus longue avec Intuition.",
      },
      context: "Démarré dans le cadre d’un stage THP, poursuivi en collab produit.",
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
        "Assistant IA pour rédiger des recommandations professionnelles sous forme de triples sémantiques.",
      brief: {
        forWho: "Personnes et équipes qui veulent des recommandations professionnelles structurées, réutilisables on-chain.",
        problem: "Un texte libre n’est ni vérifiable ni interrogeable. Il faut un format (sujet, relation, objet) sans écrire du RDF à la main.",
        delivered:
          "App React : saisie, extraction IA en triples, affichage clair. Branchement protocole Intuition.",
        result: "Prototype utilisable. Approche proche de travaux ultérieurs type Claimify (extraction de claims).",
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
        "Plateforme d’analyse et de gestion pour les joueurs, streamers et investisseurs de Boss Fighters.",
      brief: {
        forWho: "Joueurs, streamers et investisseurs de Boss Fighters qui ont besoin de chiffres et d’outils, pas d’un forum.",
        problem: "Le jeu est riche, les données utiles sont dispersées. Difficile de décider (roster, économie, contenu) sans un back-office dédié.",
        delivered:
          "Plateforme open-source : backend Rails (auth, paiements Stripe, mails), front React. Rôle : backend principal + une partie du front.",
        result: "Produit en ligne (agent-bossfighters.com), utilisé par la communauté autour du jeu.",
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
        "Carte de communauté pour studios de jeux : graphe de joueurs, retours, transparence — bibliothèque npm.",
      brief: {
        forWho: "Studios de jeux qui veulent montrer et lire leur communauté (pas seulement un Discord fermé).",
        problem: "Peu d’outils web3 simples pour exposer un graphe de joueurs et collecter des retours exploitables.",
        delivered:
          "Player Map : lib React/TypeScript (Wagmi, Intuition, Base), installable via npm, pensée pour s’intégrer dans une app existante.",
        result: "Prototype de hackathon Base Batch, réutilisable en bibliothèque.",
      },
      context: "Hackathon Base Batch, avec Alexandre Tedesco et Steven Ratton.",
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
        "Site vitrine pour un cabinet de luxothérapie et d’hypnose à Avignon — offre, preuves, prise de rendez-vous.",
      brief: {
        forWho: "Camille Laplace, luxothérapeute et hypnothérapeute à Avignon.",
        problem:
          "Expliquer des soins peu connus, le programme détox 21 jours et la prise de rendez-vous, sans site qui fasse amateur ni jargon.",
        delivered:
          "Site vitrine : parcours de soins, programme à distance, témoignages, appel à l’action (premier bilan offert). Textes et structure d’offre inclus.",
        result: "En ligne sur laplaceluxopuncture.fr. Recommandation LinkedIn, avril 2026.",
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
        "Site one-page pour un studio de visuels publicitaires — galerie, tarifs, contact, administration.",
      brief: {
        forWho: "Dylan Lacas / CORVUS Studio, visuels publicitaires premium.",
        problem:
          "Pas de vitrine à la hauteur de la direction artistique, ni de moyen de mettre à jour réalisations et images sans redéployer.",
        delivered:
          "One-page : réalisations, galerie filtrable, tarifs, contact. Back-office authentifié (Auth.js, Vercel Blob) pour le contenu.",
        result: "En ligne sur corvus-studio.fr. Recommandation LinkedIn, septembre 2026.",
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
        "Site associatif : récit, actions, dons HelloAsso, et administration des contenus.",
      brief: {
        forWho: "L’association « Un souffle d’espoir pour Kaïron » et la famille.",
        problem:
          "Raconter l’histoire, relayer les actions locales et orienter vers les dons officiels, sans dépendre d’un développeur pour chaque mise à jour.",
        delivered:
          "Site public (récit, événements, dons HelloAsso) + administration (textes, témoignages, chiffres) via Redis / Vercel.",
        result: "Site en production (Vercel), contenu éditable par l’association.",
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
        "Skill et dapp Hunch : passer d’une idée produit à une PR GitHub et une attestation on-chain.",
      brief: {
        forWho: "Contributeurs Intuition, y compris non développeurs, qui veulent publier une idée dans l’écosystème.",
        problem:
          "Le chemin idée → catalogue GitHub → graphe on-chain est fragmenté, et le jargon (atoms, triples) bloque.",
        delivered:
          "Skill Cursor/Claude en cinq étapes + dapp Hunch (recherche, IA, PR, attestation). Même parcours, deux surfaces.",
        result: "Skill publique (intuition-box) et dapp en ligne : ideation.intuition.box.",
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
        "Fil social classé par graphe de confiance (Circles), pas par l’engagement.",
      brief: {
        forWho: "Utilisateurs Circles et équipes qui testent un fil où la confiance a un coût économique.",
        problem: "Les feeds classés par likes n’expliquent pas pourquoi un post apparaît, ni n’incitent une action CRC.",
        delivered:
          "Mini-app : classement par relations, chemins, communautés, boosts CRC ; chaque carte explique son rang ; actions tip / boost / trust.",
        result: "Démo live (Vercel) pour Circles Garage.",
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
      title: "FMMAF — proposition de site",
      description:
        "Proposition de refonte du site de la Fédération Française de MMA : lisible, institutionnelle, sportive.",
      brief: {
        forWho: "La FMMAF (proposition — pas un site officiel livré).",
        problem:
          "Le contenu existe ; la vitrine ne suit plus la dynamique du MMA en France (délégation, reconnaissance haut niveau).",
        delivered:
          "Prototype Next.js : hiérarchie, identité sportive, avant/après sur les contenus existants, variante plus premium.",
        result: "Prototype consultable en ligne (mma-project.vercel.app).",
      },
      technologies: [
        { name: "Next.js", color: "gray" },
        { name: "TypeScript", color: "blue" },
        { name: "Tailwind CSS", color: "teal" },
      ],
      authors: ["Thibault LENORMAND"],
    },
  },
  viewDetails: "Voir le projet",
  featuredLabel: "À la une",
  filters: {
    all: "Tout",
    commande: "Commande",
    produit: "Produit",
    web3: "Web3",
  },
  details: {
    technologies: "Stack",
    links: "Liens",
    production: "Voir le site",
    dapp: "Voir la dapp",
    portal: "Voir le portal",
    authors: "Avec",
    hackathon: "Voir le hackathon",
    year: "Année",
    role: "Rôle",
    forWho: "Pour qui",
    problem: "Problème",
    delivered: "Livré",
    result: "Résultat",
    context: "Contexte",
  },
};
