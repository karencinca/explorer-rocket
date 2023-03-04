import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Container, Stars } from "./styles";
import { Tag } from '../Tag'

export function Movie({ data, ...rest }) {
    return (
        <Container {...rest}>
            <h3>{data.title}</h3>
            <Stars>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />  
            </Stars>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, dolores? Illum, fugit cupiditate nihil soluta cumque reiciendis incidunt natus quos, dicta eveniet fuga molestias voluptatibus aliquid alias quasi delectus placeat!</p>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }  
                </footer>

            }

        </Container>
    )
}