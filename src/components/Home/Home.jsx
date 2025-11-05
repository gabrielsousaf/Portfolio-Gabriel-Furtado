import { Main, Container, Name, Title, Content } from "./Home.style"
import Socials from "../Ui/Socials/Socials";
import Button from "../Ui/Button/Button";
import UseTypedText from "../../hooks/UseTypedText";

const Home = () => {
  UseTypedText(".typing", [
    "Programador Full Stack",
    "Programador Front End",
    "Desenvolvedor Web"
  ]);

  return (
    <Main id="home">
      <Container>
        <Name>Olá, meu nome é  <br/> <span>Gabriel Furtado</span></Name>
        <Title>Sou <span className="typing">Programador Full Stack</span></Title>
        <Content>
          Desenvolvedor Full-Stack na <span>Faculdade Uninta</span> (desde out/2025), atuando com
          <span> Next.js, TypeScript, React e JavaScript</span>. Focado em entregar soluções performáticas e escaláveis,
          sempre evoluindo e assumindo novos desafios.
        </Content>
        <Socials/>
        <Button/>
      </Container>

    </Main>
  )
}

export default Home
