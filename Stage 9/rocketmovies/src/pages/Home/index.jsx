import { Container, Content, ContentTitle } from "./styles"
import { BsPlusLg } from 'react-icons/bs'
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Movie } from '../../components/Movie'
// import { Tag } from '../../components/Tag'

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
                <Movie data={{
                    title: 'Interestellar',
                    tags: [
                        {id: '1', name: 'Ficção científica'},
                    ]
                }}
                />

                <Movie data={{
                    title: 'The last song',
                    tags: [
                        {id: '2', name: 'Romance'},
                    ]
                }}
                />

                <Movie data={{
                    title: 'Extraordinário',
                    tags: [
                        {id: '3', name: 'Drama'},
                    ]
                }}
                />
            </Content>
        </Container>
    )
}