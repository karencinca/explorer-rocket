import { Container, Content, GoBack, Stars } from "./styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BsArrowLeft} from 'react-icons/bs'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { TbClockHour3 } from 'react-icons/tb'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
import { api } from "../../services/api";
import { Button } from "../../components/Button";

export function Details() {
    const [data, setData] = useState([])
    const params = useParams()
    const navigate = useNavigate()

    async function handleRemove() {
        const confirm = window.confirm(`Deseja realmente remover ${data.title}?`)

        if(confirm) {
            await api.delete(`/movie_notes/${params.id}`)
            navigate(-1)
        }
    }

    useEffect(() => {
        async function fetchMovie() {
            const response = await api.get(`/movie_notes/${params.id}`)
            setData(response.data)
            console.log(response.data)
        }

        fetchMovie()
    }, [])

    return (
        <Container>
            <Header />

            <GoBack to="/">
                <ButtonText 
                icon={BsArrowLeft}
                title="Voltar"
                />
            </GoBack>


            <Content>
                <div className="title">
                    <h2>{data.title}</h2>

                    <Stars>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />  
                    </Stars> 
                </div>

                <div className="author">
                    <img src="https://github.com/karencinca.png" alt="" />
                    <span>Por Karen Cinca</span>

                    <TbClockHour3 />
                    <span>{data.updated_at}</span>
                </div>

                {
                    data.tags && data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                }

                <p>
                    {data.description}
                </p>

                <Button
                    id="delete" 
                    type="button"
                    title="Excluir filme"
                    onClick={handleRemove}
                    />
            </Content>

        </Container>
    )
}