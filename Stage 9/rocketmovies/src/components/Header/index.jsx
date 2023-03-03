import { Container, Profile } from './styles'
import { Input } from '../Input'

export function Header() {
    return (
        <Container>
            <span>RocketMovies</span>

            <Input placeholder="Pesquisar pelo título" />

            <Profile>
                <div>
                    <p>Karen Cinca</p>
                    <span>sair</span>
                </div>
                    <img src="https://github.com/karencinca.png" alt="Imagem do usuário" />
            </Profile>
        </Container>
    )
}