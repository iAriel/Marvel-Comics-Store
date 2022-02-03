import React, {useContext} from 'react';

import {CartContext} from '../../context/cartContext'

import Banner from '../../components/banner/index';
import Cards from '../../components/cards/index';
import Cart from '../../pages/cart'
export default function Home (){
    const {pageSwitch} = useContext(CartContext)
    return(
        <div>
            {pageSwitch ? (
                <>
                    <Banner />
                    <Cards />
                </>
            ): (<Cart/>)}
            
        </div>
    )
}