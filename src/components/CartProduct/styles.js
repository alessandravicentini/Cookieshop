import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;

height: 100px;
width: 80%;

    > img{
        height: 100%;
        width: 80px;
    }

    svg{
        width: 20px;

        cursor: pointer;
        border-radius: 50%;
    }
    
    svg:hover{
        transition: 0.5s;
        
        color: ${(props) => props.theme.hover.color};
        background-color: ${(props) => props.theme.hover.backgroundColor};
    }


    p, span{
        flex: 1;

        border-bottom: 1px solid ${(props) => props.theme.color};
    }

    span{
        text-align: right;
    }

    > div{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 100px;

        margin-left: 20px;

        > span{
            border: none;

            font-size: small;
            text-align: center;
        }

        > svg{
            cursor: pointer;
            
            margin-left: 5px;
        }

       
    }

`