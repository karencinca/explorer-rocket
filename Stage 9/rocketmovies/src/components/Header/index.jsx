import { Container, Profile } from './styles'
import { Input } from '../Input'

export function Header() {
    return (
        <Container>
            <span>RocketMovies</span>

            <div className='inputbar'>
              <Input placeholder="Pesquisar pelo título" />  
            </div>
            

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