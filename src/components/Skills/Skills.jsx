import ImagesSkills from "../Ui/ImagesSkills/ImagesSkills"

import { ContainerAll, Container, Title, Content } from"./Skills.style"

const Skills = () => {
  return (
    <ContainerAll id="skills">
      <Container>
        <Title>Tecnologias e Ferramentas</Title>
        <Content>
          Usando uma combinação de tecnologias de ponta e software de código aberto confiável, crio aplicativos e sites de alto desempenho e focados no usuário para smartphones, tablets e desktops.
        </Content>
        <ImagesSkills/>
      </Container>
    </ContainerAll>
  )
}

export default Skills