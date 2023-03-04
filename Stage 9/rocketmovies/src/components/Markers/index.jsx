import { Container, Content } from "./styles";

export function Markers({ children }) {
    return (
        <Container>
            <h3>Marcadores</h3>
            <Content>
                {children}
            </Content>
        </Container>
    )
}