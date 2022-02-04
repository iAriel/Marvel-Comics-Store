import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 2;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  position: absolute;
  border-radius: 10px;

  @media screen and (max-width: 896px){
    width: 600px;
    height: 400px;
  }

  @media screen and (max-width: 649px){
    width: 400px;
    height: 600px;

    flex-direction: column;
  }
  @media screen and (max-width: 424px){
    width: 370px;
    height: 570px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 1.5%;
  background: none;
  border: none;
  height: 50px;
  font-size: 20px;

  :hover{
    cursor: pointer;
  }

  
`;

export const ModalImg = styled.img`
  width: 334px;
  height: 500px;
  border-radius: 10px 0 0 10px;
  background: #000;

  @media screen and (max-width: 896px){
    width: 234px;
    height: 400px;
  }
  @media screen and (max-width: 649px){
    width: 130px;
    height: 200px;

    margin: 10px auto;
    border-radius: 0;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  margin-left: 55px;
  h1{
    color: #cc0000;
  }
  p {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 896px){
    h1{
      font-size: 20px;
      }
    div{
      overflow-y: scroll;
      height: 200px;
      margin-bottom: 20px;
      p{
      margin-right: 50px;
      font-size: 15px;
      }
    }
  }
  @media screen and (max-width: 649px){
    h1{
      font-size: 18px;
    }
  }
  @media screen and (max-width: 424px){
    div{
      height: 150px;
    }
  }
`;

export const BuyButton = styled.button`
  background: #cc0000;
  border: none;
  color: #ffff;
  padding: 10px 60px 10px 60px;
  
  font: 400 20px 'Roboto', Arial;

  :hover{
    cursor: pointer;
  }
  @media screen and (max-width: 896px){
    padding: 10px 40px 10px 40px;
    
    margin-right: 50px;
  }
`;