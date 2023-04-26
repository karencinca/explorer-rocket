import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Content, ContentTitle } from "./styles"
import { Link } from 'react-router-dom'
import { BsPlusLg } from 'react-icons/bs'
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Movie } from '../../components/Movie'
import { api } from '../../services/api'

export function Home() {
    const [movieNotes, setMovieNotes] = useState([])
    const navigate = useNavigate()

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`movie_notes?title&tags"`)
            setMovieNotes(response.data) 
        }

        fetchMovies()
    }, [])

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
                
                {
                    movieNotes.map(movieNote => (
                        <Movie key={String(movieNote.id)} 
                        onClick={() => handleDetails(movieNote.id)}
                        data={{
                            title: movieNote.title,
                            tags: movieNote.tags,
                            description: movieNote.description
                        }}
                        />
                    ))
                }
            </Content>
        </Container>
    )
}