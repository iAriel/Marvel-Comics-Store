import React, {useContext} from 'react';

import {CartContext} from '../../context/cartContext';
import {NavBar} from './styles';
import Bag from '../../assets/icons/mochila.png'
export default function PageDefault (){
    const {cart} = useContext(CartContext);
    return(
        <div>
            <NavBar>
                <button>
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