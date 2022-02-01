import styled from 'styled-components'

export const Pages = styled.nav`
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 16px;
    color: black;
    margin-right: 5px;

`;

export const Button = styled.button`
        background-color: #f13e2a;
        border: none;
        border-radius: 5px;
        padding: 10px;
        margin-left: 9px;
        transition: 0.3s all ease;
        font: 400 14px 'Roboto', Arial;
        color: white;
    :hover{
        cursor: pointer;
        background-color: #cc0000;
    }
`;