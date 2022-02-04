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

    div{
        display: flex;
        justify-content:space-between;
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

    }

    @media screen and (max-width: 1016px) {
        
        flex-direction: column;
        width: 500px;
        height: 302px;
    
    img{
        margin-bottom: -32px;
        margin-left: 0;
        width: 100px;
        height: 150px;
    }
    span{
       width: 220px;
       margin-bottom: -8px;
       margin-top: 30px;
       margin-left: 20px;
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
    span{
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
@media screen and (max-width: 465px){
    width: 350px;
    img{
        width: 100px;
        height: 160px;
        margin-left: 60px;
    }
    span{
       margin-left: 0px;
    }
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

    @media screen and (max-width: 859px){
        p{
            font-size: 20px;
        }

        div{
            align-items: center;
            input{
                width: 150px;
                height: 30px;
                font-size: 15px;
            }
            button{
                width: 50px;
                height: 32px;

                font-size: 15px;
            }
        }
        
        @media screen and (max-width: 502px){
            flex-direction: column;
            height: 150px;
        }
        
    }
    
    
`;