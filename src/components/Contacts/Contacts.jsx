import {Footer, Title, Container, ContainerAll, Content, Contact, Ul, Li, Social, SocialLink} from './Contacts.style'

const Contacts = () => {
  return (
    <Footer>
      <Container id="contacts">
        <Title>Contatos</Title>

        <ContainerAll>
          <Content>
            <p>Estou interessado em trabalhar com qualquer empresa que acredite que minhas habilidades serão úteis para eles. Se você está procurando alguém como eu, por favor me avise. Ou você pode simplesmente &apos;dizer oi&apos; para mim.</p>

            <a href="">Entre em Contato</a>
          </Content>
          <Contact>
            <Ul>
              <Li>
                <Social>E-mail</Social>
                <SocialLink href="" target="blank">gabriell.furtado2002@gmail.com</SocialLink>
              </Li>
              <Li>
                <Social>Linkedin</Social>
                <SocialLink href="" target="blank">linkedin/gabriel-furtado</SocialLink>
              </Li>
              <Li>
                <Social>Github</Social>
                <SocialLink href="" target="blank">github.com/gabrielsousaf</SocialLink>
              </Li>
            </Ul>
          </Contact>
        </ContainerAll>

      </Container>
    </Footer>
  )
}

export default Contacts