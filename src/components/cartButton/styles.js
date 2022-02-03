import styled from 'styled-components';

export const NavBar = styled.div`
    position: absolute;
    color: #FFFFFF;
    right: 3%;
    z-index: 3;

    font: 400 10px 'Roboto', Arial;

    p{
        position: absolute;
        right: 3%;

        background: #fbf5f2;
        padding: 3px;
        border-radius: 50%;
        color: #cc0000;
    }
    button{
        background: none;
        border: none;
        img{
            position: absolute;
            right: 0;
            width: 50px;
            height: 50px;
        }
        :hover{
            cursor: pointer;
        }
    }
    
`;