import React from 'react'
import{CartContextProvider} from '../../context/cartContext'

import {GlobalStyle} from './styles'
import Home from '../../pages/home'


export default function PageDefault (){
    return(
        <div>
            <CartContextProvider>
                <Home />
                <GlobalStyle/>
            </CartContextProvider>
        </div>
    )
}