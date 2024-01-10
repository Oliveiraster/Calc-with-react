import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
background-color:${props => props.theme.main_background};

display: flex;
align-items: center;
justify-content: center;
`

export const Content = styled.div` 
background-color: ${props => props.theme.main_background};
`

export const ContentKey = styled.div` 
background-color: ${props => props.theme.keypad_background};
padding: 10px;
border-radius: 10px;
`

export const Row = styled.div` 
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`