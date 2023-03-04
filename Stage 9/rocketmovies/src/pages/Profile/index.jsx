import { Container, Avatar, Form } from "./styles"
import { Button } from '../../components/Button'
import { ButtonText } from "../../components/ButtonText"
import { Input } from '../../components/Input'
import { BsArrowLeft } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { FiCamera, FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom' 

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                    <ButtonText 
                        icon={BsArrowLeft}
                        title="Voltar"
                    />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/karencinca.png" alt="Imagem do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input type="file" id="avatar" />
                    </label>
                </Avatar> 

                <Input 
                    icon={FiUser}
                    type="text"
                    value="Karen Cinca"
                />

                <Input 
                    icon={FiMail}
                    type="email"
                    value="karencinca@hotmail.com"
                />  

                <Input 
                    icon={FiLock}
                    type="password"
                    placeholder="Senha atual"
                />

                <Input 
                    icon={FiLock}
                    type="password"
                    placeholder="Nova senha"
                />

                <Button title="Salvar" />
            </Form>

        </Container>
    )
}