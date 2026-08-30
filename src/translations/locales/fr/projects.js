export const projects = {
  title: "Projets",
  description:
    "Commandes, produits, expérimentations. Une sélection de sites et d’outils que j’ai conçus, écrits et mis en ligne.",
  list: {
    project1: {
      title: "Patte à Patte",
      description:
        "Projet de fin de formation à The Hacking Project - Plateforme communautaire pour échanger, vendre et trouver des services pour animaux de compagnie. Une communauté dynamique pour les passionnés d'animaux à travers la France.",
      longDescription:
        "Patte à Patte est mon projet de fin de formation à The Hacking Project. C'est une plateforme communautaire que j'ai développée avec deux autres étudiants, permettant aux propriétaires d'animaux d'échanger des services et des accessoires.\n\n" +
        "Le concept est simple mais efficace : créer une communauté de confiance où les propriétaires d'animaux peuvent s'entraider. La plateforme propose plusieurs fonctionnalités clés :\n\n" +
        "• Un système de garde d'animaux entre particuliers, permettant de trouver des pet-sitters de confiance à proximité\n" +
        "• Un marché d'accessoires et de produits pour animaux, où les membres peuvent vendre ou acheter des articles d'occasion\n" +
        "• Un système de recommandations et d'avis pour assurer la qualité des services\n" +
        "• Une géolocalisation pour trouver facilement les services et les membres à proximité\n" +
        "• Un système de messagerie intégré pour faciliter les échanges\n\n" +
        "Le projet a été construit avec Ruby on Rails et déployé sur Fly.io. L'interface utilisateur a été conçue avec Tailwind CSS pour une expérience fluide et responsive, tandis que JavaScript a été utilisé pour les interactions dynamiques. La base de données PostgreSQL assure une gestion efficace des données utilisateurs et des transactions.\n\n" +
        "L'aspect communautaire est au cœur du projet, avec un système de profils détaillés permettant aux membres de se présenter et de partager leur expérience avec les animaux. La plateforme encourage l'entraide et la solidarité entre propriétaires d'animaux, tout en offrant une solution pratique et économique pour les services de garde et l'achat d'accessoires.",
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
        "Projet de stage THP - Visualisation de données sémantiques en 2D, 3D et VR utilisant le protocole d'Intuition.",
      longDescription:
        "Dans le cadre d'un stage avec THP, j'ai participé au développement d'une application de visualisation de graphes interactive permettant de représenter et d'explorer des données sous forme de réseau. Le projet offre une expérience utilisateur riche avec plusieurs modes de visualisation (2D, 3D et VR) et des fonctionnalités avancées comme le filtrage en temps réel, la navigation historique, et une interface intuitive pour l'exploration des données.\n\n" +
        "L'application permet aux utilisateurs de naviguer facilement dans les graphes de données, avec des fonctionnalités comme le zoom, le déplacement, et un système de filtrage performant. Une barre latérale de détails permet d'explorer les informations des nœuds, tandis que des animations et des particules directionnelles rendent l'expérience plus immersive.\n\n" +
        "Le projet a été développé en utilisant React comme framework principal, avec des bibliothèques spécialisées comme react-force-graph pour la visualisation et three-spritetext pour le rendu de texte en 3D. L'architecture du code est bien structurée, avec une séparation claire des responsabilités entre les différents composants.\n\n" +
        "Le protocole Intuition, au cœur de ce projet, vise à résoudre un paradoxe central du Web décentralisé : malgré la promesse de systèmes 'sans confiance' basés sur la blockchain, les utilisateurs doivent toujours faire confiance à des humains. Intuition propose d'ajouter une couche de confiance 'intuitive' et vérifiable à l'interaction numérique, en construisant un graphe de confiance sémantique et communautaire. Il utilise des identifiants décentralisés (DIDs) et des preuves vérifiables (VCs) pour structurer les données d'identité et permettre des évaluations de confiance plus nuancées et probabilistes.",
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
        "Assistant IA pour la création de recommandations professionnelles sous forme de triples sémantiques, intégré au protocole Intuition.",
      longDescription:
        "DecentRep est une application web innovante qui permet de créer et de gérer des recommandations professionnelles sous forme de 'triples sémantiques' (Subject, Predicate, Object), en utilisant l'IA pour enrichir et structurer les informations.\n\n" +
        "L'application utilise l'intelligence artificielle pour transformer des textes descriptifs en triples sémantiques structurés, facilitant ainsi la création de recommandations professionnelles claires et vérifiables. Par exemple, une recommandation comme 'Elon Musk est CEO de Tesla' est structurée en triple : Subject (Elon Musk), Predicate (est CEO de), Object (Tesla).\n\n" +
        "Le projet s'intègre au protocole Intuition, contribuant à la création d'un réseau de réputation décentralisé où les recommandations sont vérifiables et immuables. Cette approche permet de lutter contre la désinformation et de créer un système de confiance plus transparent et fiable.\n\n" +
        "Développé avec React et Vite, l'application offre une interface utilisateur moderne et réactive grâce à TailwindCSS. L'architecture du code est bien structurée, avec une séparation claire des responsabilités entre les composants. Le projet utilise TypeScript pour garantir la robustesse du code et Axios pour la communication avec l'API.\n\n" +
        "Quelques mois après le développement de DecentRep, Microsoft Research a publié un projet similaire appelé Claimify, validant ainsi l'approche innovante adoptée dans ce projet.",
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
        "Plateforme open-source conçue pour optimiser l'expérience des joueurs de Boss Fighters. Elle fournit des outils d'analyse et de gestion permettant aux joueurs, streamers et investisseurs de prendre des décisions éclairées en jeu.",
      longDescription:
        "Agent est une plateforme open-source conçue pour optimiser l'expérience des joueurs de Boss Fighters. Ce projet est né d'une idée originale de Steven Ratton (Omiage), qui a rassemblé une équipe passionnée pour le développer sur plusieurs mois.\n\n" +
        "Boss Fighters est un jeu web3 d'action multijoueur asymétrique où un joueur en réalité virtuelle incarne un boss géant affrontant une équipe de combattants sur PC. Ce jeu gratuit mêle stratégie, humour et interactions physiques dans des arènes futuristes, offrant une expérience immersive et compétitive.\n\n" +
        "En tant que développeur principal, j'ai été responsable de l'ensemble du backend et d'une partie significative du frontend, travaillant en étroite collaboration avec Alexandre Tedesco et Omiage pour créer une solution complète et performante.\n\n" +
        "Découvrez la présentation de la plateforme par Merlin, chef de la guilde des Alchimists et partenaire du projet, qui vous guidera à travers les différentes fonctionnalités d'Agent.",
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
        "Solution web3 développée lors du hackathon Base Batch, permettant aux studios de jeux de visualiser et d'analyser les données de leur communauté grâce à la technologie Intuition.",
      longDescription:
        "Agent Player Map est une solution innovante développée lors du hackathon Base Batch pour répondre aux besoins des studios de jeux vidéo en matière de développement collaboratif.\n\n" +
        "Le projet vise à résoudre un problème majeur : l'absence de solutions web3 permettant aux studios d'offrir une transparence d'information à leur communauté de joueurs et de recueillir leurs retours et désirs.\n\n" +
        "Notre solution combine des outils web2 pour la compréhension, l'aide à la décision et la création de contenu, avec un outil web3 innovant 'Player Map' utilisant la technologie Intuition. Cette carte interactive permet à la communauté de créer et de construire le graphe Intuition de la communauté du jeu, offrant une transparence totale sur les données et facilitant la collecte des retours pour le studio.\n\n" +
        "Développé comme une bibliothèque open-source réutilisable, le projet peut être facilement intégré via un simple 'npm install player-map' dans n'importe quelle application.",
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
        "Site vitrine pour Camille Laplace, luxothérapeute et hypnothérapeute à Avignon — programme détox, témoignages et prise de rendez-vous.",
      longDescription:
        "Camille Luxopuncture est le site de Camille Laplace, praticienne en luxothérapie et hypnose installée à Avignon. Le projet donne une présence claire, lumineuse et rassurante à un accompagnement de santé douce.\n\n" +
        "Le site met en avant le programme détox 21 jours à distance, les séances au cabinet (luxopuncture par infrarouge, hypnose), les témoignages patients et un parcours de prise de rendez-vous simple — le premier bilan est offert.\n\n" +
        "L’enjeu n’était pas d’empiler les pages, mais de traduire une voix : douceur, clarté, preuve. Typographie soignée, rythme éditorial, galerie d’avis et appels à l’action discrets. Le site est déployé en production sur laplaceluxopuncture.fr.",
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
        "Portfolio one-page pour un studio indépendant de visuels publicitaires premium — univers cosmique, galerie et back-office.",
      longDescription:
        "Corvus Studio est le site d’un studio indépendant de création de visuels publicitaires. L’univers mêle direction artistique sombre, esthétique cosmique, typographie monumentale et touches cyan/violet.\n\n" +
        "Le site présente une accueil immersive, un bandeau de réalisations, une galerie filtrable avec modale projet, une grille tarifaire, les domaines de création, le portrait du studio (Dylan Lacas) et un formulaire de contact.\n\n" +
        "Côté technique : Next.js 15, React 19, TypeScript, Tailwind et Framer Motion. Un back-office authentifié (Auth.js + Vercel Blob) permet de gérer réalisations, images et réseaux sociaux sans redéploiement.",
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
        "Site associatif pour « Un souffle d’espoir pour Kaïron » — histoire, dons HelloAsso, événements et administration de contenu.",
      longDescription:
        "Kaïron est le site de l’association « Un souffle d’espoir pour Kaïron ». Il raconte l’histoire d’un enfant, relaye les actions de l’association et oriente vers les dons officiels HelloAsso.\n\n" +
        "Le site combine une vitrine émotionnelle — récit, visuels, événements locaux — et une administration de contenu (textes, témoignages, chiffres) pour que la famille puisse actualiser le site sans passer par le code.\n\n" +
        "Stack : React, TypeScript, Vite, Tailwind, Framer Motion, Redis (Upstash) pour le contenu dynamique, déployé sur Vercel.",
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
    project10: {
      title: "TrustBook",
      description:
        "Mini-app Circles : un fil social classé par graphe de confiance plutôt que par l’engagement.",
      longDescription:
        "TrustBook est une mini-app conçue pour Circles Garage. Le fil n’est pas classé par likes : il est rangé par confiance explicite — relations directes, chemins communs, communautés partagées, boosts CRC, et éventuellement des claims Intuition.\n\n" +
        "Chaque carte explique pourquoi elle apparaît. Un tap mène à une action CRC (tip, boost, trust). Le projet explore ce que devient un réseau social quand la confiance est un primitive économique, pas un bouton « follow ».\n\n" +
        "Next.js, TypeScript, Tailwind, SDK Circles / Gnosis. Démo live disponible.",
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
        "Refonte visuelle du site de la Fédération Française de MMA : direction sportive, lisible, institutionnelle.",
      longDescription:
        "Proposition de refonte du site de la FMMAF. L’enjeu : une fédération dont le contenu est déjà là, mais dont la vitrine numérique ne reflète plus la dynamique du MMA en France (délégation 2020, reconnaissance haut niveau 2024).\n\n" +
        "Les maquettes reprennent les contenus existants pour montrer un avant/après concret : lisibilité, identité sportive, textures d’octogone, hiérarchie claire. Une variante « Neo-Fight UI » explore un registre plus premium — noir, vert signal, structure de ligue.\n\n" +
        "Le prototype est consultable en ligne. Stack : Next.js, TypeScript, Tailwind.",
      technologies: [
        { name: "Next.js", color: "gray" },
        { name: "TypeScript", color: "blue" },
        { name: "Tailwind CSS", color: "teal" },
      ],
      authors: ["Thibault LENORMAND"],
    },
  },
  viewDetails: "Lire le projet",
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
    authors: "Avec",
    hackathon: "Voir le hackathon",
    year: "Année",
    role: "Rôle",
  },
};
