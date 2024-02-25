import MoviesLib from "../../assets/img_projects/Movies_lib.png"
import ShopEasy from "../../assets/img_projects/ShopEasy.png"
import CarHub from "../../assets/img_projects/CarHub.png"
import Todo from "../../assets/img_projects/Todo.png"
import Login from "../../assets/img_projects/Login.png"
import GymWebSite from "../../assets/img_projects/GymWebsite.png"

import { ContainerAll, Container, Title, ContainerProjects, ContainerProject, ContainerImage, Details, NameProject, Description, ContainerLinks, Ul, Li, Tools } from "./Projects.style"

import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Projects = () => {
  return (
    <ContainerAll id="projects">
      <Container>
        <Title>Projetos</Title>

        <ContainerProjects>

          <ContainerProject>
            <ContainerImage>
              <a href="https://movies-lib-gabrielsousaf.vercel.app/" target="_blank" rel="noreferrer">
                <img src={MoviesLib} alt="Movies Lib" />
              </a>
            </ContainerImage>
            <Details>
              <NameProject>Movies Lib</NameProject>
              <Description>
                Projeto consumindo a API TMDB, onde exibe os filmes por categoria, a sua nota, atores e a galeria de fotos.
              </Description>
              <ContainerLinks>
                <Ul>
                  <Li>
                    <a href="https://github.com/gabrielsousaf/Movies-Lib" target="_blank" rel="noreferrer"><FaGithub/></a>
                    <a href="https://movies-lib-gabrielsousaf.vercel.app/" target="_blank" rel="noreferrer"><FaExternalLinkAlt/></a>
                  </Li>
                </Ul>
              </ContainerLinks>
              <Tools>
                <li>react</li>
                <li>api</li>
                <li>styled components</li>
              </Tools>
            </Details>
          </ContainerProject>
          
          <ContainerProject>
            <ContainerImage>
              <a href="https://shopeasy-ecommerce.vercel.app/" target="_blank" rel="noreferrer">
                <img src={ShopEasy} alt="ShopEasy" />
              </a>
            </ContainerImage>
            <Details>
              <NameProject>Shop Easy Ecommerce</NameProject>
              <Description>Ecommerce ficticio usando React, produtos vindo da API Fake Store.</Description>
              <ContainerLinks>
                <Ul>
                  <Li>
                    <a href="https://github.com/gabrielsousaf/ShopEasy-Ecommerce" target="_blank" rel="noreferrer"><FaGithub/></a>
                    <a href="https://shopeasy-ecommerce.vercel.app/" target="_blank" rel="noreferrer"><FaExternalLinkAlt/></a>
                  </Li>
                </Ul>
              </ContainerLinks>
              <Tools>
                <li>react</li>
                <li>api</li>
                <li>firebase</li>
              </Tools>
            </Details>
          </ContainerProject>

          <ContainerProject>
            <ContainerImage>
              <a href="https://car-hub-gabrielsousaf.vercel.app/" target="_blank" rel="noreferrer">
                <img src={CarHub} alt="CarHub" />   
              </a>
            </ContainerImage>
            <Details>
              <NameProject>CarHub</NameProject>
              <Description>Website de aluguel de carros, que podem escolher vários modelos e filtrar as opções.</Description>
              <ContainerLinks>
                <Ul>
                  <Li>
                    <a href="https://github.com/gabrielsousaf/Car-Hub" target="_blank" rel="noreferrer"><FaGithub/></a>
                    <a href="https://car-hub-gabrielsousaf.vercel.app/" target="_blank"rel="noreferrer"><FaExternalLinkAlt/></a>
                  </Li>
                </Ul>
              </ContainerLinks>
              <Tools>
                <li>next</li>
                <li>typescript</li>
                <li>api</li>
              </Tools>
            </Details>
          </ContainerProject>

          <ContainerProject>
            <ContainerImage>
              <a href="https://todo-gabrielsousaf.vercel.app/" target="_blank" rel="noreferrer">
                <img src={Todo} alt="TodoList" />
              </a>
            </ContainerImage>
            <Details>
              <NameProject>Todo List</NameProject>
              <Description> Todo List feito em TypeScript, onde é possivel marcar a tarefa como concluida, excluir e modificar.</Description>
              <ContainerLinks>
                <Ul>
                  <Li>
                    <a href="https://github.com/gabrielsousaf/Todo" target="_blank" rel="noreferrer"><FaGithub/></a>
                    <a href="https://todo-gabrielsousaf.vercel.app/" target="_blank" rel="noreferrer"><FaExternalLinkAlt/></a>
                  </Li>
                </Ul>
              </ContainerLinks>
              <Tools>
                <li>react</li>
                <li>firebase</li>
              </Tools>
            </Details>
          </ContainerProject>

          <ContainerProject>
            <ContainerImage>
              <a href="https://login-form-react-gabrielsousaf.vercel.app/" target="blank">
                <img src={Login} alt="LoginPage" />
              </a>
            </ContainerImage>
            <Details>
              <NameProject>Login Page</NameProject>
              <Description> Formulário de Login e Cadastramento de usuários, feito em React e Firebase.</Description>
              <ContainerLinks>
                <Ul>
                  <Li>
                    <a href="https://github.com/gabrielsousaf/Login-Form-React" target="_blank" rel="noreferrer"><FaGithub/></a>
                    <a href="https://login-form-react-gabrielsousaf.vercel.app/" target="_blank" rel="noreferrer"><FaExternalLinkAlt/></a>
                  </Li>
                </Ul>
              </ContainerLinks>
              <Tools>
                <li>react</li>
                <li>firebase</li>
              </Tools>
            </Details>
          </ContainerProject>

          <ContainerProject>
            <ContainerImage>
              <a href="https://gabrielsousaf.github.io/Gym-Website/" target="_blank" rel="noreferrer">
                <img src={GymWebSite} alt="GymWebSite" />
              </a>
            </ContainerImage>
            <Details>
              <NameProject>Gym WebSite</NameProject>
              <Description>Landing page desenvolvida em HTML, CSS e JavaScript de uma academia. A página inclui um formulário de contato, calculadora de IMC</Description>
              <ContainerLinks>
                <Ul>
                  <Li>
                    <a href="https://github.com/gabrielsousaf/Gym-Website" target="_blank" rel="noreferrer"><FaGithub/></a>
                    <a href="https://gabrielsousaf.github.io/Gym-Website/" target="_blank" rel="noreferrer"><FaExternalLinkAlt/></a>
                  </Li>
                </Ul>
              </ContainerLinks>
              <Tools>
                <li>javascript</li>                
                <li>calculadora imc</li>
              </Tools>
            </Details>
          </ContainerProject>

        </ContainerProjects>


      </Container>
    </ContainerAll>
  )
}

export default Projects