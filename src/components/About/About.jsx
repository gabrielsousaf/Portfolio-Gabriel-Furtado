import { Section, Container, Title, Text } from "./About.style";
import ButtonAbout from "../Ui/ButtonAbout/ButtonAbout";
import ScrollToTopButton from "../Ui/ScrollToTopButton/ScrollToTopButton";

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Title>Sobre</Title>
        <Text>
          Olá! Me chamo Gabriel Furtado, sou
          formado em Análise e Desenvolvimento de Sistemas pela faculdade
          Pitágoras. Tenho conhecimento sólido em <span>TypeScript, React e
          JavaScript</span>, e atualmente estou focado no aprofundamento do framework <span>Next.js</span>
          . Minha trajetória na programação envolve cursos online, estudo
          de documentações oficiais e a constante prática por meio de projetos
          pessoais. Busco consolidar minha carreira como desenvolvedor
          Front-End, com o objetivo de evoluir para o Full-Stack, sempre
          contribuindo para a criação de soluções inovadoras e interfaces web
          eficientes. Nas horas vagas, gosto de ler livros, mangás e assistir
          animes.
        </Text>

        <div>
          <ButtonAbout />
        </div>

        <ScrollToTopButton />
      </Container>
    </Section>
  );
};

export default About;
