import { Container, Content, ContentTitle } from "./styles"
import { BsPlusLg } from 'react-icons/bs'
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Movie } from '../../components/Movie'
import { Tag } from '../../components/Tag'

export function Home() {
    return (
        <Container>
            <Header />

            <ContentTitle>
                <span>Meus filmes</span>
                <Button 
                    icon={BsPlusLg}
                    title="Adicionar filme"
                />          
            </ContentTitle>
            <Content>
                <Movie title="Interestellar" />
                <Movie title="The fault in our stars" />
                <Movie title="The last of us" />
                <Movie title="Grey's Anatomy" />
                <Movie title="Stranger Things" />
                <Movie title="Friends" />
                <Movie title="Suits" />
            </Content>
        </Container>
    )
}