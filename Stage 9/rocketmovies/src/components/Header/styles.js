import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
    grid-area: header;

    height: 116px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid; 
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 0 123px;

    .logo {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: ${({ theme }) => theme.COLORS.PINK};
        cursor: default;
    }


    > .inputbar {
        width: 630px;
    }
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 9px;
        align-items: flex-end;

        > p, span {
            font-size: 14px;
        }

        > .name {
            font-weight: 700;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        > span {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

    > img {
        height: 64px;
        width: 64px;
        border-radius: 50%;
    }
`