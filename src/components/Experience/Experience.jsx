import { Section, Container, Title, Card, Header, Role, Company, Period, Bullets, BulletItem, Tags, Tag } from "./Experience.style";

const Experience = () => {
  return (
    <Section id="experience">
      <Container>
        <Title>Experiência</Title>

        <Card>
          <Header>
            <div>
              <Role>Desenvolvedor Full-Stack</Role>
              <Company>Faculdade Uninta</Company>
            </div>
            <Period>out/2025 — atual</Period>
          </Header>

          <Bullets>
            <BulletItem>
              Atuação no desenvolvimento e manutenção de plataformas educacionais e médicas com foco em <span>performance</span>, <span>escalabilidade</span> e <span>acessibilidade</span>.
            </BulletItem>
            <BulletItem>
              Desenvolvimento Front-end com <span>React.js</span>, <span>Next.js</span> e <span>TypeScript</span> (SSR/SSG, otimização e roteamento).
            </BulletItem>
            <BulletItem>
              Implementação Back-end em <span>PHP/Laravel</span> e <span>Node.js</span> (APIs REST, autenticação e filas).
            </BulletItem>
            <BulletItem>
              Integração de recursos de IA assistida para: geração e revisão automática de provas e questões; criação de simulados personalizados; análise de desempenho e métricas de aprendizagem.
            </BulletItem>
            <BulletItem>
              Gerenciamento de infraestrutura em <span>AWS</span> (<span>EC2</span>, <span>S3</span>, <span>RDS</span>, <span>Lambda</span>) com automações e boas práticas de segurança.
            </BulletItem>
            <BulletItem>
              Uso de <span>Git</span>, <span>CI/CD</span>, <span>Clean Code</span> e arquitetura modular.
            </BulletItem>
          </Bullets>

          <Tags>
            {[
              "React",
              "Next.js",
              "TypeScript",
              "PHP",
              "Laravel",
              "Node.js",
              "AWS",
              "CI/CD",
              "IA"
            ].map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </Tags>
        </Card>
      </Container>
    </Section>
  );
};

export default Experience;
