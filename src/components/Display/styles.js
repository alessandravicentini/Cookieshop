import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: flex-start;

width: 70%;

margin: auto;

background-color: ${(props) => props.theme.backgroundColor};
color: ${(props) => props.theme.color};

transition: background-color 0.8s linear, color 0.5s linear;
`
