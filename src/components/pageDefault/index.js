import React from 'react'

import {GlobalStyle} from './styles'
import Banner from '../banner'
import Cards from '../cards'

export default function PageDefault (){
    return(
        <div>
            <GlobalStyle>
                <Banner />
                <Cards />
            </GlobalStyle>
        </div>
        
    )
}