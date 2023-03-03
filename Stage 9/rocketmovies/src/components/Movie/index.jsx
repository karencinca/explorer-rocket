import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Container, Stars } from "./styles";

export function Movie({ title }) {
    return (
        <Container>
            <h3>{title}</h3>
            <Stars>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />  
            </Stars>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, dolores? Illum, fugit cupiditate nihil soluta cumque reiciendis incidunt natus quos, dicta eveniet fuga molestias voluptatibus aliquid alias quasi delectus placeat!</p>

        </Container>
    )
}