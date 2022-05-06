import styled from "styled-components";

export const Container = styled.nav`
width: 90vw;
height: 60px;

margin: auto;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

padding: 10px;

background-color: ${(props) => props.theme.backgroundColor};
color: ${(props) => props.theme.color};

transition: background-color 0.8s linear, color 0.5s linear;


> div{
    width: 20%;

    display: flex;
    flex-direction: row;
    justify-content: center;

    svg{
        cursor: pointer;

        transition: 0.3s;

        margin-left: 30px;

        color: ${(props) => props.theme.color};
    }

    svg:hover{
        transform: scale(1.3);
    }

    > span{
        align-self: flex-end;

        background-color: green;

        border-radius: 50%;

        height: 16px;
        aspect-ratio: 1;

        text-align: center;
        font-size: x-small;
        color: white;

        padding-top: 2px;
    }
}
`

export const Logo = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

width: 20%;
height: 100%;

h2{
    margin-left: 10px;
}

img{
    height: 100%;
}
`


