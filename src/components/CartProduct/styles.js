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

    > svg{
        width: 50px;

        cursor: pointer;
        transition: 0.3s;
    }

    > svg:hover{
        transform: scale(1.3);
    }

    > svg:active{
        color: firebrick;
    }

    p, span{
        flex: 1;

        border-bottom: 1px solid #222;
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