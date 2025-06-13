export const projects = {
  title: "PROJETS",
  description:
    "Découvrez une sélection de mes projets récents qui illustrent mon approche et mes compétences en architecture et design.",
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
  },
  viewDetails: "Voir détails →",
  details: {
    technologies: "Technologies utilisées",
    links: "Liens du projet",
    production: "Voir le site",
    authors: "Auteurs du projet",
    hackathon: "Voir sur Hackathon Base",
  },
};
