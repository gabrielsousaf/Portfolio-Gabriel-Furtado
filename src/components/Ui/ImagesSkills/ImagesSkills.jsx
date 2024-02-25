import bootstrap from '../../../assets/icons/bootstrap.svg'
import chakraUI from '../../../assets/icons/chakraUi.png'
import css from '../../../assets/icons/css3.svg'
import sass from '../../../assets/icons/sass.svg'
import express from '../../../assets/icons/express.svg'
import firebase from '../../../assets/icons/firebase.svg'
import git from '../../../assets/icons/git.svg'
import html from '../../../assets/icons/html5.svg'
import javascript from '../../../assets/icons/javascript.svg'
import jquery from '../../../assets/icons/jquery.png'
import jest from '../../../assets/icons/jest.png'
import mongodb from '../../../assets/icons/mongodb.svg'
import nextjs from '../../../assets/icons/next.png'
import nodejs from '../../../assets/icons/nodejs.svg'
import react from '../../../assets/icons/React.png'
import redux from '../../../assets/icons/redux.svg'
import styled_components from '../../../assets/icons/styled-components.png'
import typescript from '../../../assets/icons/typescript.png'

import { Container, Title, Content } from './ImagesSkills.style'

const ImagesSkills = () => {
  return (
    <Container>

      <Content>
        <img src={typescript} alt="TypeScript" />
        <Title>TypeScript</Title>
      </Content>
      <Content>
        <img src={nextjs} alt="NextJs" />
        <Title>Nextjs</Title>
      </Content>
      <Content>
        <img src={react} alt="React" />
        <Title>React</Title>
      </Content>
      <Content>
        <img src={redux} alt="Redux" />
        <Title>Redux</Title>
      </Content>
      <Content>
        <img src={jest} alt="Jest" />
        <Title>Jest</Title>
      </Content>
      <Content>
        <img src={javascript} alt="JavaScript" />
        <Title>JavaScript</Title>
      </Content>
      <Content>
        <img src={styled_components} alt="Styled Components" />
        <Title>Styled Components</Title>
      </Content>
      <Content>
        <img src={chakraUI} alt="ChakraUi" />
        <Title>Chakra UI</Title>
      </Content>
      <Content>
        <img src={bootstrap} alt="Bootstrap" />
        <Title>Bootstrap</Title>
      </Content>
      <Content>
        <img src={sass} alt="Sass" />
        <Title>Sass</Title>
      </Content>
      <Content>
        <img src={git} alt="Git" />
        <Title>Git</Title>
      </Content>
      <Content>
        <img src={jquery} alt="Jquery" />
        <Title>Jquery</Title>
      </Content>
      <Content>
        <img src={html} alt="Html" />
        <Title>Html</Title>
      </Content>
      <Content>
        <img src={css} alt="Css" />
        <Title>Css</Title>
      </Content>
      <Content>
        <img src={firebase} alt="Firebase" />
        <Title>Firebase</Title>
      </Content>
      <Content>
        <img src={nodejs} alt="NodeJs" />
        <Title>NodeJS</Title>
      </Content>
      <Content>
        <img src={express} alt="Express" />
        <Title>Express</Title>
      </Content>
      <Content>
        <img src={mongodb} alt="MongoDB" />
        <Title>MongoDb</Title>
      </Content>
    </Container>
  )
}

export default ImagesSkills