import { Section, Container, Title, Text } from "./About.style"
import ButtonAbout from "../Ui/ButtonAbout/ButtonAbout"
import ScrollToTopButton from "../Ui/ScrollToTopButton/ScrollToTopButton"

const About = () => {
  return (
    <Section id='about' >
      <Container >
        <Title>
          Sobre
        </Title>
        <Text>
          Olá, me chamo Gabriel Furtado e sou Técnico em Redes de Computadores e Tecnólogo em Análise e Desenvolvimento de Sistemas formado pela faculdade Pitágoras. Possuo conhecimento sólido em <span>TypeScript, React e JavaScript</span> e atualmente, estou dedicado ao estudo aprofundado do framework <span>Next.js.</span> Minha jornada na programação inclui cursos online, leituras de documentações e a prática constante na construção de projetos pessoais na área. Meu objetivo é consolidar minha carreira como programador Front-End, e eventualmente, Full-Stack, contribuindo para a criação de softwares inovadores e interfaces web atraentes e eficientes. Nos momentos de lazer, tenho como hobbies a leitura de livros, mangás, e assistir animes.
        </Text>

        
          <div>
            <ButtonAbout/>      
          </div>

          <ScrollToTopButton/>
      </Container>
    </Section>
  )
}

export default About