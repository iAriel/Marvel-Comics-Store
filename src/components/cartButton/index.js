import React, {useContext} from 'react';

import {CartContext} from '../../context/cartContext';
import {NavBar} from './styles';
import Bag from '../../assets/icons/mochila.png';

export default function CartButton (){
    const {cart, setPageSwitch} = useContext(CartContext);
    function handleState(){
        setPageSwitch(false)
    }
    
    return(
        <div>
            <NavBar>
                <button data-cy="go-cart" onClick={() => handleState()}>
                    <img src={Bag} alt='bag' />
                </button>
                {cart.length !== 0 ? (
                        <p>{cart.length}</p>
                    
                ):(null)
                }
            </NavBar>
        </div>
        
    )
}