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
`;

export const Products = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #f13e2a;
    border-radius: 5px;
  
    width: 400px;
    height: 250px;

    font: 400 32px 'Roboto', Arial;

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
    @media screen and (max-width: 1016px) {
        {
            flex-direction: column;
            width: 300px;
            height: 302px;
        }
        img{
            margin-bottom: -32px;
            margin-left: 0;
            width: 100px;
            height: 150px;
        }
        p{
           width: 100%;
           margin-bottom: -8px;
           margin-top: 30px;
           margin-left: -20px;
        }
        button{
            margin-left: 85px;
        }
    }
    @media screen and (max-width: 746px){
        flex-direction: row;
        width: 450px;
        height: 250px;

        img{
            width: 140px;
            height: 200px;
            margin-bottom: 10px;
            margin-left: 40px;
        }
    }

    @media screen and (max-width: 746px){
        {
            flex-direction: column;
            width: 390px;
            height: 302px;
        }
        img{
            margin-bottom: -32px;
            margin-right: 50px;
            width: 100px;
            height: 150px;
        }
        p{
            display: flex;
            justify-content: center;
            
            width: 100px:
            height: 200px;
            margin-top: 30px;
        }
        button{
            margin: 0px 120px 0px;
        }
    }
`;
