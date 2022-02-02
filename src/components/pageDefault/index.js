import React, {useState} from 'react'
import {CartContextProvider} from '../../context/cartContext';

import {GlobalStyle} from './styles'
import Banner from '../banner'
import Cards from '../cards'
import Cart from '../cart'

export default function PageDefault (){
    
    return(
        <div>
            <CartContextProvider>
                <Cart />
                <Banner />
                <Cards />
                <GlobalStyle/>
            </CartContextProvider>
            
        </div>
        
    )
}