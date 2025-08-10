import MoviesLib from "../../assets/img_projects/MoviesLib.png";
import ShopEasy from "../../assets/img_projects/ShopEasy.png";
import CarHub from "../../assets/img_projects/CarHub.png";
import Todo from "../../assets/img_projects/Todo.png";
import Login from "../../assets/img_projects/Login.png";
import GymWebSite from "../../assets/img_projects/GymWebsite.png";

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
    name: "CarHub",
    img: CarHub,
    description: "Website de aluguel de carros, que podem escolher vários modelos e filtrar as opções.",
    github: "https://github.com/gabrielsousaf/Car-Hub",
    demo: "https://car-hub-gabrielsousaf.vercel.app/",
    tools: ["next", "typescript", "api"]
  },
  {
    name: "Todo List",
    img: Todo,
    description: "Todo List feito em TypeScript, onde é possível marcar como concluída, excluir e modificar.",
    github: "https://github.com/gabrielsousaf/Todo",
    demo: "https://todo-gabrielsousaf.vercel.app/",
    tools: ["react", "firebase"]
  },
  {
    name: "Login Page",
    img: Login,
    description: "Formulário de Login e Cadastramento de usuários, feito em React e Firebase.",
    github: "https://github.com/gabrielsousaf/Login-Form-React",
    demo: "https://login-form-react-gabrielsousaf.vercel.app/",
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
