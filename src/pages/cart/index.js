import React, { useContext, useState, useEffect} from 'react';
import { CardCart, CardContainer, PriceArea, Container, NavBar} from './styles';

import { CartContext } from '../../context/cartContext';

export default function Cart() {

    const [coupon, setCoupon] = useState("")
    const [price, setPrice] = useState ();
    const { cart,  setPageSwitch} = useContext(CartContext);

    var value = 0;
     useEffect(() => {
        for(let i = 0; i < cart.length; i++){
            value += cart[i].prices[0].price
        }
        setPrice(value);
     }, [])
    function ValidateCuopon(){
        if(coupon === "rareComic" || coupon === "comicAmazing"){
            value = value - (value / 10);
            setPrice(value)
        }
    }

    function handleState(){
        setPageSwitch(true)
    }
    
    return (
        <Container>
            <NavBar>
                <button onClick={() => handleState()}>Back</button>
                <span>MARVEL COMICS</span>
            </NavBar>
            <CardContainer>
                {cart.map((products) => (
                    <CardCart>
                        <div>
                            <img key={products.id}
                                src={products.thumbnail.path + "/portrait_xlarge.jpg"}
                                alt={products.title} />
                            <span>{products.title}</span>
                        </div>
                        <p>{products.prices[0].prices}</p>
                    </CardCart>
                ))}
            </CardContainer>
            <PriceArea>
                <p>Total: ${price}</p>
                    <div>
                        <input type="text" placeholder="discount coupon" onChange={event => setCoupon(event.target.value)}/>
                        <button type="submit" onClick={() => ValidateCuopon()}>Done</button>
                    </div>
                </PriceArea>
        </Container>
    )
}