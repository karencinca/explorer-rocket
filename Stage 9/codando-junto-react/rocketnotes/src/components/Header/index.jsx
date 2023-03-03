import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/karencinca.png" alt="Minha foto" />

                <div>
                    <span>Bem-vinda,</span>
                    <strong>Karen Cinca</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}