import { useEffect } from "react"
import Typed from 'typed.js';
import { Main, Container, Name, Title, Content } from "./Home.style"
import Socials from "../Ui/Socials/Socials";
import Button from "../Ui/Button/Button";

const Home = () => {
  useEffect(() => {
    const typed = new Typed('.typing', {
      strings: ["Programador Front-End", "Desenvolvedor Web", "Programador Front-End"],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true
  });

  return () => {
    typed.destroy();
  };
}, []);
  return (
    <Main id="home">
      <Container>
        <Name>Olá, meu nome é  <br/> <span>Gabriel Furtado</span></Name>
        <Title>Sou <span className="typing">Desenvolvedor Front-End</span></Title>
        <Content>Estudande de programação, com foco em desenvolvimento front-end. Possuo conhecimento em  <span>NextJs, TypeScript, React e JavaScript</span>, e estou determinado a aprender mais.</Content>
        <Socials/>
        <Button/>
      </Container>
    </Main>
  )
}

export default Home