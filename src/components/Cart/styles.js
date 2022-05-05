import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

margin-top: 10px;

height: 89vh;

> button{
    margin-top: 20px;

    padding: 0 4px;

    cursor: pointer;
}
`

export const Content = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

> h2{
    margin-bottom: 20px;
    margin-right: 30px;
}

> svg{
    margin-bottom: 20px;

    cursor: pointer;
}
`

export const Cards = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

max-height: 80%;
width: 70%;

margin-bottom: 20px;

overflow: hidden;

border-bottom: 1px solid #222;

::-webkit-scrollbar{
    background-color: transparent;
}
`