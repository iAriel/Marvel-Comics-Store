import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const NavBar = styled.div`
    width: 100%;
    height: 50px;

    margin-bottom: 25px;

    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #cc0000;

    button{
        background: none;
        border: 1px solid white;
        border-radius: 5px;
        font-weight: 400;
        padding: 9px;

        font-size: 17px;
        color: white;
        
        transition: 0.3s all ease;

        :hover{
            cursor: pointer;
            background: white;
            color: #cc0000;
        }
    }

    span{
        font-size: 20px;
        font-weight: 900;
        color: white;
    }
`;


export const CardContainer = styled.aside`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: auto;
    width: 80%;
    justify-content: center;
    gap: 10px;
`;

export const CardCart = styled.div`
    background: #f13e2a;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 70%;
    border-radius: 5px;

    margin-bottom: 25px;

    font: 400 32px 'Roboto', Arial;
    
    span{
        margin: auto;
        font-size: 16px;
        font-weight: 500;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        direction: ltr;
        color: white;
        text-align: center;
    }

    img{
        width: 90px;
        height: 120px;
        margin: 10px 25px;
    }
`;

export const PriceArea = styled.aside`
    display: flex;

    width: 100%;
   height: 90px;

    background-color: #adb5bd;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 70%;

    border-radius: 5px;

    p{
        font-size: 25px;
        color: white;
    }

    div{
        display: flex;
        justify-content: center;

        input{
        width: 250px;
        height: 50px;
        font-size: 25px;
        border-radius: 5px;

        border: none;

    }

    button{
        margin-left: -3px;
        height: 52px;
        border: none;
        background: white;
        width: 100px;
        border-left: 1px solid #c1c1c1;
        font-size: 18px;

        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        
        transition: 0.3s all ease;

        :hover{
            cursor: pointer;
            background: #f94144;
            color: white;
        }
        
    }
    }
    
    
`;