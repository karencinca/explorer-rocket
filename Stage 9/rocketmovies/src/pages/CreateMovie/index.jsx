import { Container, GoBack, Content } from "./styles";
import { BsArrowLeft } from 'react-icons/bs'
import { useState } from "react";
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from "../../components/Input";
import { Markers } from "../../components/Markers";
import { Marker } from "../../components/Marker";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function CreateMovie() {
    const [title, setTitle] = useState("")
    const [grade, setGrade] = useState("")
    const [description, setDescription] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewMovie() {
        if(!title) {
            return alert("Informe o nome do filme")
        }

        if(newTag) {
            return alert("Você deixou uma tag no campo para adicionar. Adicione ou deixe o campo vazio.")
        }

        await api.post("/movie_notes", {
            title,
            grade,
            description,
            tags
        })
        .then(() => {
            alert("Filme cadastrado com sucesso!")
            navigate("/")
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível cadastrar.")
            }
        })
    }

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
                <h2>Novo filme</h2>

                <div className="name-grade">
                    <Input 
                        type="text"
                        placeholder="Título"
                        onChange={e => setTitle(e.target.value)}
                    />
                    
                    <Input 
                        type="number"
                        placeholder="Sua nota (de 0 a 5)"
                        onChange={e => setGrade(e.target.value)}
                    />
                </div>

                <textarea 
                name="observations" 
                id="observations" 
                cols="30" 
                rows="10" 
                placeholder="Observações"
                onChange={e => setDescription(e.target.value)}>
                </textarea>

                <Markers>
                    {
                        tags.map((tag, index) => (
                            <Marker 
                            key={String(index)}
                            value={tag}
                            onClick={() => handleRemoveTag(tag)}
                            />
                        ))
                    }
                    <Marker 
                    isNew 
                    placeholder="Novo marcador" 
                    onChange={e => setNewTag(e.target.value)}
                    value={newTag}
                    onClick={handleAddTag}
                    />
                </Markers>

                <div className="buttons">
                    <Button
                    id="delete" 
                    type="button"
                    title="Excluir filme"
                    />

                    <Button 
                    type="button"
                    title="Salvar alterações"
                    onClick={handleNewMovie}
                    />  
                </div>


            </Content>
        </Container>
    )
}