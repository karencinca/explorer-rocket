import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 16px;
    padding: 32px;
    margin-bottom: 24px;

    > h3 {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
    }
`

export const Stars = styled.div`
    margin: 8px 0 15px 0;

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-right: 6px;
    }
`