import styled from 'styled-components'

export const Title = styled.div`
width:100%;
height: 512px;

display:flex;
flex-direction: row;
justify-content: space-between;
position: relative;

margin-bottom: 64px;
background-color: #cc0000;



img{
    width: 650px;
    height: 500px;
    object-fit: cover;
    position: absolute;
    margin-right: 160px;
    filter: drop-shadow(11px -1px 20px #660000);
    right: 0%;
    top: 7%;

}
@media (max-width: 1250px){
    img{
        position: absolute;
        width: 650px;
        height: 500px;
        margin-bottom: -50px;
        object-fit: cover;
    }
}
@media (max-width: 892px){
    img{
        display: none;
    }
}
`;

export const TextTitle = styled.div`
    
    display: flex;
    flex-direction: column;

    color: #fbf5f2;
    margin-left: 240px;
    padding: 20px;
    font-size: 32px;
    
span{
    font-size: 30px;
    font-weight:400;
    text-decoration: underline;
    
    z-index: 1;
}

@media (max-width: 887px){
    justify-content: center;
    margin: auto;
}
@media (max-width: 562px){
    font-size: 25px;
    span{
        font-size: 23px;
    }
}
`;