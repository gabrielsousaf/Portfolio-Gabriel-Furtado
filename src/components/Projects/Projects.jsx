import { projects } from "../../data/projects/projects";
import { ContainerAll, Container, Title, ContainerProjects, ContainerProject, ContainerImage, Details, NameProject, Description, ContainerLinks, Ul, Li, Tools } from "./Projects.style";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <ContainerAll id="projects">
      <Container>
        <Title>Projetos</Title>
        <ContainerProjects>
          {projects.map((project, index) => (
            <ContainerProject key={index}>
              <ContainerImage>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <img src={project.img} alt={project.name} />
                </a>
              </ContainerImage>
              <Details>
                <NameProject>{project.name}</NameProject>
                <Description>{project.description}</Description>
                <ContainerLinks>
                  <Ul>
                    <Li>
                      <a href={project.github} target="_blank" rel="noreferrer"><FaGithub /></a>
                      <a href={project.demo} target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a>
                    </Li>
                  </Ul>
                </ContainerLinks>
                <Tools>
                  {project.tools.map((tool, i) => (
                    <li key={i}>{tool}</li>
                  ))}
                </Tools>
              </Details>
            </ContainerProject>
          ))}
        </ContainerProjects>
      </Container>
    </ContainerAll>
  );
};

export default Projects;
