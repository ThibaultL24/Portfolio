// src/features/projects/data/projects.js
import patteAPatteImg from "../../../assets/img/patte_a_patte.svg";
import decentRepImg from "../../../assets/img/decentrep/img_decentrep.webp";
import graphImg from "../../../assets/img/graph/graph1.png";
import agentImg from "../../../assets/img/agent.gif";
import playerMapImg from "../../../assets/img/agentplayermap.png";
import camilleCover from "../../../assets/img/covers/camille.jpg";
import kaironCover from "../../../assets/img/covers/kairon.jpg";
import trustbookCover from "../../../assets/img/covers/trustbook.jpg";
import mmaCover from "../../../assets/img/covers/mma.jpg";
import decentRepImg1 from "../../../assets/img/decentrep/decentrep1.png";
import decentRepImg2 from "../../../assets/img/decentrep/decentrep2.png";
import decentRepImg3 from "../../../assets/img/decentrep/decentrep3.png";
import graphImg2 from "../../../assets/img/graph/graph2.png";
import graphImg3 from "../../../assets/img/graph/graph3.png";
import graphImg4 from "../../../assets/img/graph/graph4.png";
import patteImg1 from "../../../assets/img/patte/patte1.png";
import patteImg2 from "../../../assets/img/patte/patte2.png";
import patteImg3 from "../../../assets/img/patte/patte3.png";
import patteImg4 from "../../../assets/img/patte/patte4.png";
import patteImg5 from "../../../assets/img/patte/patte5.png";
import patteImg6 from "../../../assets/img/patte/patte6.png";
import patteImg7 from "../../../assets/img/patte/patte7.png";

export const PROJECT_CATALOG = [
  {
    id: 6,
    key: "project6",
    year: "2026",
    category: "commande",
    featured: true,
    accent: "#d4b45a",
    motif: "orb",
    github: null,
    production: "https://www.laplaceluxopuncture.fr/",
    imageSrc: camilleCover,
    images: [],
  },
  {
    id: 7,
    key: "project7",
    year: "2026",
    category: "commande",
    featured: true,
    accent: "#7ec8e3",
    motif: "constellation",
    github: "https://github.com/ThibaultL24/Corvus",
    production: null,
    imageSrc: null,
    images: [],
  },
  {
    id: 8,
    key: "project8",
    year: "2026",
    category: "commande",
    featured: true,
    accent: "#8fb7d4",
    motif: "orb",
    github: "https://github.com/ThibaultL24/Kairon",
    production: "https://kairon-six.vercel.app",
    imageSrc: kaironCover,
    images: [],
  },
  {
    id: 10,
    key: "project10",
    year: "2026",
    category: "web3",
    featured: false,
    accent: "#7d9b8c",
    motif: "grid",
    github: "https://github.com/ThibaultL24/TrustBook",
    production: "https://trust-book-tau.vercel.app",
    imageSrc: trustbookCover,
    images: [],
  },
  {
    id: 11,
    key: "project11",
    year: "2026",
    category: "commande",
    featured: false,
    accent: "#00ff9c",
    motif: "octagon",
    github: "https://github.com/ThibaultL24/MMA_project",
    production: "https://mma-project.vercel.app",
    imageSrc: mmaCover,
    images: [],
  },
  {
    id: 4,
    key: "project4",
    year: "2025",
    category: "produit",
    featured: false,
    accent: "#c9a36a",
    motif: "grid",
    github: "https://github.com/Agent-BossFighters",
    production: "https://agent-bossfighters.com/",
    imageSrc: agentImg,
    images: [],
    youtube: "https://www.youtube.com/embed/470PiwCqN7Y",
  },
  {
    id: 5,
    key: "project5",
    year: "2025",
    category: "web3",
    featured: false,
    accent: "#7d9b8c",
    motif: "grid",
    github: "https://github.com/Agent-BossFighters/Player-map",
    production: "https://devfolio.co/projects/agent-player-map-759e",
    imageSrc: playerMapImg,
    images: [],
    loom: "https://www.loom.com/embed/075a0ec241ba41e3bafd02e9a0a663ed?sid=86524f64-f7bb-4079-bf23-bdff6cd30700",
    productionLabel: "hackathon",
  },
  {
    id: 2,
    key: "project2",
    year: "2025",
    category: "web3",
    featured: false,
    accent: "#7ec8e3",
    motif: "constellation",
    github: "https://github.com/ThibaultL24/intuition-graph",
    production: "https://graph.i7n.thp-lab.org/",
    imageSrc: graphImg,
    images: [graphImg2, graphImg3, graphImg4],
  },
  {
    id: 3,
    key: "project3",
    year: "2025",
    category: "web3",
    featured: false,
    accent: "#c9a36a",
    motif: "grid",
    github: "https://github.com/THP-Lab/intuition-recommendation-assistant",
    production: null,
    imageSrc: decentRepImg,
    images: [decentRepImg1, decentRepImg2, decentRepImg3],
    claimify:
      "https://www.microsoft.com/en-us/research/blog/claimify-extracting-high-quality-claims-from-language-model-outputs/",
  },
  {
    id: 1,
    key: "project1",
    year: "2024",
    category: "produit",
    featured: false,
    accent: "#d4a574",
    motif: "orb",
    github: "https://github.com/Paupiety/patte-a-patte",
    production: null,
    imageSrc: patteAPatteImg,
    images: [
      patteImg1,
      patteImg2,
      patteImg3,
      patteImg4,
      patteImg5,
      patteImg6,
      patteImg7,
    ],
  },
];

export const PROJECT_FILTERS = [
  "all",
  "commande",
  "produit",
  "web3",
];

export function getProjectById(id) {
  return PROJECT_CATALOG.find((project) => String(project.id) === String(id));
}
