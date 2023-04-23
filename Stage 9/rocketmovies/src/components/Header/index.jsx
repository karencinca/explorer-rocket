import { Container, Profile } from './styles'
import { Input } from '../Input'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function Header() {
    const { signOut } = useAuth()

    return (
        <Container>
            <Link to="/">
                <span className='logo'>RocketMovies</span>
            </Link>
            

            <div className='inputbar'>
              <Input placeholder="Pesquisar pelo título" />  
            </div>
            

            <Profile>
                <div>
                    <Link to="/profile" className='name'>Karen Cinca</Link>
                    <span onClick={signOut}>sair</span>
                </div>
                    <Profile to="/profile">
                        <img className='logoImg' src="https://github.com/karencinca.png" alt="Imagem do usuário" />
                    </Profile>
            </Profile>
        </Container>
    )
}