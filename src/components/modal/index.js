import React, {useContext} from 'react';
import {CartContext} from '../../context/cartContext';

import {Background, ModalWrapper, ModalImg, ModalContent, CloseButton, BuyButton} from './styles';

export default function Modal({showModal, setShowModal, comicDetails}){
    const {cart, setCart} = useContext(CartContext);

    const addToCart = (comicDetails) => {
        setCart([...cart, comicDetails]);
    }
    return(
        <div data-cy="modal">
            {showModal ? (
                <Background>
                    <ModalWrapper showModal={showModal}>
                        <ModalImg src={comicDetails.thumbnail.path+"/portrait_xlarge.jpg"} alt={comicDetails.title}/>
                        <ModalContent>
                            <h1>{comicDetails.title}</h1>
                            <div>
                            <   p>{comicDetails.description || "Sem descrição"}</p>
                            </div>
                            
                            <BuyButton data-cy="buy-item" onClick={() => addToCart(comicDetails)}>Comprar</BuyButton>
                        </ModalContent>
                        <CloseButton data-cy="close-modal" onClick={() => setShowModal(prev => !prev)}>X</CloseButton>
                    </ModalWrapper>
                    <h1>Modal</h1>
                </Background>
            ):   
                null
            }
        </div>
    )
}