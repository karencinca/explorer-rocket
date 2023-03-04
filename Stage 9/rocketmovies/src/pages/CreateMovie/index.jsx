import { Container, GoBack, Content } from "./styles";
import { BsArrowLeft } from 'react-icons/bs'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from "../../components/Input";
import { Markers } from "../../components/Markers";
import { Marker } from "../../components/Marker";

export function CreateMovie() {
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
                    />
                    
                    <Input 
                        type="number"
                        placeholder="Sua nota (de 0 a 5)"
                    />
                </div>

                <textarea 
                name="observations" 
                id="observations" 
                cols="30" 
                rows="10" 
                placeholder="Observações">
                </textarea>

                <Markers>
                    <Marker value="Ficção científica" />
                    <Marker value="Drama" />
                    <Marker isNew placeholder="Novo marcador" />
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
                    />  
                </div>


            </Content>
        </Container>
    )
}