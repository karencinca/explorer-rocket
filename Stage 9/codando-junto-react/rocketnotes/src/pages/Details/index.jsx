import { Container, Links, Content } from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'


export function Details() {
  return (
    <Container>
        <Header />

        <main>
          <Content>

            <ButtonText title="Excluir a nota" />

            <h1>Introdução ao React</h1>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis commodi pariatur, dicta culpa neque voluptas cupiditate ratione facilis eos. Ratione suscipit non mollitia quo laboriosam eius officiis illum doloribus repudiandae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus corporis molestiae recusandae fugiat velit impedit. Eligendi, quaerat rem minima cumque, totam dicta ratione, error molestiae vitae asperiores ipsum amet autem.
            </p>

            <Section title="Links úteis">
              <Links>
                <li><a href="#">https://rocketseat.com.br</a></li>
                <li><a href="#">https://rocketseat.com.br</a></li>
              </Links>
            </Section>

            <Section title="Marcadores">
                <Tag title="express" />
                <Tag title="nodejs" />
            </Section>

            <Button title="Voltar"/>

        </Content>
        </main>
    </Container>
    
  )
}