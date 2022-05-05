import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

width: clamp(100px, 30%, 200px);
height: 400px;

margin: 10px;

border-bottom: 1px solid #222;

> img{
    width: 90%;

    transition: 0.5s;

    filter: drop-shadow(3px 3px 3px #222);
}

> img:hover{
    transform: scale(1.3);
}
`

export const Details = styled.p`
text-align: justify;
font-size: 0.9rem;

height: 25%;
`

export const Content = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;

width: 100%;

> svg{
    margin-left: 10px;

    cursor: pointer;
    transition: 0.3s;
    }

> svg:hover{
    transform: scale(1.3);
    }

>svg:active{
    color: green;
}
`

export const Title = styled.p`
font-weight: bold;

margin-bottom: 10px;
`