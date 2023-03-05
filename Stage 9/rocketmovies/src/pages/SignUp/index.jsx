import { Container, Form, Background } from "./styles";
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'

export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir</p>

                <h2>Crie sua conta</h2>

                <Input 
                    icon={FiUser}
                    type="text"
                    placeholder="Nome"
                />

                <Input 
                    icon={FiMail}
                    type="email"
                    placeholder="E-mail"
                />

                <Input 
                    icon={FiLock}
                    type="password"
                    placeholder="Senha"
                />

                <Button 
                    title="Cadastrar"
                />

                <Link to="/">
                    <AiOutlineArrowLeft />
                    Voltar para o login
                </Link>
            </Form>

            <Background />
        </Container>
    )
}