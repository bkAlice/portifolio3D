import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Python",
    icon: mobile,
  },
  {
    title: "Java",
    icon: backend,
  },
  {
    title: "HTML/CSS",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    name: "Calculadora",
    description:
      "Uma calculadora simples desenvolvida em HTML, CSS e JavaScript, permitindo operações matemáticas básicas com uma interface responsiva. O projeto utiliza JavaScript para manipulação de eventos e cálculo preciso..",
    tags: [
      {
        name: "Calcular",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      
    ],
    image: carrent,
    
  },
  {
    name: "Previsão do Tempo",
    description:
      "Um site de previsão do tempo que utiliza uma API para fornecer dados meteorológicos em tempo real. Com uma interface intuitiva e responsiva, os usuários podem visualizar as condições climáticas atuais e a previsão para os proximas horas.",
    tags: [
      {
        name: "API",
        color: "blue-text-gradient",
      },
      {
        name: "Grupo",
        color: "green-text-gradient",
      },
      
    ],
    image: jobit,
  },
  {
    name: "Portifolio",
    description:
      "Um portfólio interativo em 3D criado com React, destacando habilidades e projetos. A interface utiliza 3D para mostrar o trabalho de forma envolvente e dinâmica, proporcionando uma experiência única aos visitantes.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "3D",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,

  },
];

export { services, technologies, projects };
