import { Container, Profile } from './styles'
import { Input } from '../Input'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <Container>
            <Link to="/">
                <span className='logo'>RocketMovies</span>
            </Link>
            

            <div className='inputbar'>
              <Input placeholder="Pesquisar pelo título" />  
            </div>
            

            <Profile to="/profile">
                <div>
                    <span className='name'>Karen Cinca</span>
                    <span>sair</span>
                </div>
                    <img src="https://github.com/karencinca.png" alt="Imagem do usuário" />
            </Profile>
        </Container>
    )
}