import styled from 'styled-components'

export const InputContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 15px;



input {
    width: 100%;
    height: 80px;
    background-color: ${props => props.theme.screen_background};
    color:  ${props => props.theme.text_screen};
    border: none;
    padding-right: 5px;
    font-size: 26px;
    text-align: end;
    border-radius: 8px;
}

input::placeholder{
color:${props => props.theme.text_screen};
}
`