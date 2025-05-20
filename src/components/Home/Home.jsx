import { useEffect } from "react"
import Typed from 'typed.js';
import { Main, Container, Name, Title, Content } from "./Home.style"
import Socials from "../Ui/Socials/Socials";
import Button from "../Ui/Button/Button";

const Home = () => {
  useEffect(() => {
    const typed = new Typed('.typing', {
      strings: ["Programador Full Stack", "Desenvolvedor Web", "Programador Front End"],
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
        <Title>Sou <span className="typing">Desenvolvedor Full Stack</span></Title>
        <Content>Desenvolvedor Full-Stack com experiência em <span> Next.js, TypeScript, React e JavaScript</span> Estou sempre em busca de novos desafios e oportunidades para expandir meus conhecimentos e habilidades na área de tecnologia.</Content>
        <Socials/>
        <Button/>
      </Container>

    </Main>
  )
}

export default Home
