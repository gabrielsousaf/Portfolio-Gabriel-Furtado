import MoviesLib from "../../assets/img_projects/MoviesLib.png";
import ShopEasy from "../../assets/img_projects/ShopEasy.png";
import Travel from "../../assets/img_projects/Travel.png";
import Login from "../../assets/img_projects/Login.png";
import GymWebSite from "../../assets/img_projects/GymWebsite.png";
import MiniBlog from "../../assets/img_projects/MiniBlog.png";

export const projects = [
  {
    name: "Movies Lib",
    img: MoviesLib,
    description: "Projeto consumindo a API TMDB, onde exibe os filmes por categoria, a sua nota, atores e a galeria de fotos.",
    github: "https://github.com/gabrielsousaf/Movies-Lib",
    demo: "https://movies-lib-gabrielsousaf.vercel.app/",
    tools: ["react", "api", "styled components"]
  },
  {
    name: "Shop Easy Ecommerce",
    img: ShopEasy,
    description: "Ecommerce fictício usando React, produtos vindo da API Fake Store.",
    github: "https://github.com/gabrielsousaf/ShopEasy-Ecommerce",
    demo: "https://shopeasy-ecommerce.vercel.app/",
    tools: ["react", "api", "firebase"]
  },
  {
    name: "Travel",
    img: Travel,
    description: "Site de viagens com várias funcionalidades, feito em Next.",
    github: "https://github.com/gabrielsousaf/Travel",
    demo: "https://travel-xi-ruddy.vercel.app/",
    tools: ["next", "typescript", "tailwind"]
  },
  {
    name: "Mini Blog",
    img: MiniBlog,
    description: "Mini Blog feito em React, onde posso fazer login, cadastar usuario e enviar fotos.",
    github: "https://github.com/gabrielsousaf/MiniBlog-React",
    demo: "https://mini-blog-react-eta.vercel.app/",
    tools: ["react", "firebase"]
  },
  {
    name: "Login Page",
    img: Login,
    description: "Formulário de Login e Cadastramento de usuários, feito em React e Firebase.",
    github: "https://github.com/gabrielsousaf/Login-Page",
    demo: "https://login-page-six-lyart.vercel.app/",
    tools: ["react", "firebase"]
  },
  {
    name: "Gym WebSite",
    img: GymWebSite,
    description: "Landing page desenvolvida em HTML, CSS e JavaScript de uma academia. Inclui formulário de contato e calculadora de IMC.",
    github: "https://github.com/gabrielsousaf/Gym-Website",
    demo: "https://gabrielsousaf.github.io/Gym-Website/",
    tools: ["javascript", "calculadora imc"]
  }
];
