import React from 'react'

import Banner from '../banner'
import Cards from '../cards'

export default function PageDefault (){
    return(
        <div>
            <div className="nav-bar">
                <p>MARVEL</p>
            </div>
            <Banner />
            <Cards />
        </div>
        
    )
}