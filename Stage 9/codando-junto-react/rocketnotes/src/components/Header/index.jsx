import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth"

export function Header() {
    const { signOut } = useAuth()
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/karencinca.png" alt="Minha foto" />

                <div>
                    <span>Bem-vinda,</span>
                    <strong>Karen Cinca</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}