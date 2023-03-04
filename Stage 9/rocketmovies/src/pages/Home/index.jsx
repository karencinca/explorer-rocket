import { Container, Content, ContentTitle } from "./styles"
import { Link } from 'react-router-dom'
import { BsPlusLg } from 'react-icons/bs'
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Movie } from '../../components/Movie'

export function Home() {
    return (
        <Container>
            <Header />

            <ContentTitle>
                <span>Meus filmes</span>
                <Link to="createmovie">
                    <Button 
                        icon={BsPlusLg}
                        title="Adicionar filme"
                    />          
                </Link>

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
                    title: 'Interestellar',
                    tags: [
                        {id: '2', name: 'Ficção científica'},
                    ]
                }}
                />

                <Movie data={{
                    title: 'Interestellar',
                    tags: [
                        {id: '3', name: 'Ficção científica'},
                    ]
                }}
                />
            </Content>
        </Container>
    )
}