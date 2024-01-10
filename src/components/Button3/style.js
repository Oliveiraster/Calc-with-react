import styled from 'styled-components'

export const ButtonContainer = styled.button`
height: 35px;
padding: 10px;
border: none;
background-color:${props => props.theme.equals_key};
color: ${props => props.theme.text_button_equals};
font-size: 18px;
font-weight: 700;
flex:1;
margin: 6px;
border-radius: 5px ;
box-shadow: 0px 3px ${props => props.theme.equals_shadow};
cursor: pointer;

&:hover{
    background-color:${props => props.theme.equals_houver}; 
  
}
&:active{
    position: relative;
    top: 1px;
    box-shadow: 0px 2px ${props => props.theme.equals_shadow};
}
`
