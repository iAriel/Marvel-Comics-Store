import styled from 'styled-components'

export const TitleContent = styled.h1`
    font: 900 32px 'Roboto', Arial;
    text-align: center;
    color: rgb(59, 59, 59);
    margin-bottom: 80px;

    color: #cc0000;
    
`;

export const Card = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: auto;
    width: 80%;
    justify-content: center;
    gap: 48px 12.8px;
    z-index: -10;
`;

export const ButtonModal = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #f13e2a;
    border-radius: 5px;
    border: none;
  
    width: 400px;
    height: 250px;

    font: 400 32px 'Roboto', Arial;
    
    span{
        position: absolute;
        font-size: 15px;
        text-align: center;
        color: #f13e2a;
        top: 0;
        right: 0;
        background-color: #fde910;
        padding: 0px 25px 3px 25px;
        border-bottom-left-radius: 5px;
        border-top-right-radius: 4px;
        box-shadow: 4px 13px 15px -5px rgba(0,0,0,0.16);
    }

    img{
        width: 140px;
        height: 200px;
        transition: 0.3s all ease;
        box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.34);
        margin-left: 50px;
    }

    img:hover{
        transform: scale(1.05);
        cursor: pointer;
      }

    p{
        font-size: 16px;
        font-weight: 500;
        width: 200px;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        direction: ltr;
        color: white;
        text-align: center;
        padding: 16px;
    }

    div{
        button{
        background: white;
        padding: 7px 40px 7px 40px;
        border:none;
        margin-bottom: 16px;
        margin-left: 50px;
        transform: skewX(-30deg);
        transition: all .35s
    }
        button:hover{
            cursor: pointer;
            color: #001514;
            background: #ffebeb;
        }
    }
    
    @media screen and (max-width: 1016px) {
        
            flex-direction: column;
            width: 300px;
            height: 302px;
        
        img{
            margin-bottom: -32px;
            margin-left: 0;
            width: 100px;
            height: 150px;
        }
        p{
           width: 220px;
           margin-bottom: -8px;
           margin-top: 30px;
           margin-left: 20px;
        }
        div{
            button{
                margin-left: 85px;
            }
        }
        
    }

    @media screen and (max-width: 766px){
            flex-direction: row;
            justify-content: center;
        
            width: 650px;
            height: 250px;
        img{
            width: 140px;
            height: 200px;
            margin-left: 15px;
            margin-bottom: 8px;
        }
        p{
            flex-wrap: wrap;
            text-align: center;

        }
    }

    @media screen and (max-width: 668px){
        width: 500px;
    }
    @media screen and (max-width: 517px){
        width: 450px;
        img{
            width: 100px;
            height: 160px;
            margin-left: 25px;
        }
    }
`;