import React, {useEffect, useRef} from 'react';
import Typed from 'typed.js';

import {Title, TextTitle} from './styles';
import CartButton from '../cartButton';
import SpiderMan from '../../assets/images/spiderman.png';

export default function Banner(){
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["The best comics you find here."],
            startDelay: 300,
            typeSpeed: 100,
        });
    }, [])
    return(
        <div>
            <CartButton/>
            <Title>
                <TextTitle> 
                    <h1>Marvel Comics</h1>
                    <span className="titleDescription" ref={el}></span>
                </TextTitle>
                <img src={SpiderMan} alt="homem-aranha" />
            </Title>

        </div>
    )
}