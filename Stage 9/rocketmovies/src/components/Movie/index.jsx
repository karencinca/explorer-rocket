import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Container, Stars } from "./styles";
import { Tag } from '../Tag'

export function Movie({ data, ...rest }) {
    return (
        <Container {...rest}>
            <Link to={`/details/${data.id}`}>
                <span className='title'>{data.title}</span>
            </Link>
            
            <Stars>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />  
            </Stars>

            <p>
                {data.description}
            </p>

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

