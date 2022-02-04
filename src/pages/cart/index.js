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
                <button onClick={() => handleState()}>Voltar</button>
                <span>MARVEL COMICS</span>
            </NavBar>
            <CardContainer>
                {cart.map((products, index) => (
                    <CardCart key={index} data-cy={"cart-card"+index}>
                        <div>
                            <img key={products.id}
                                src={products.thumbnail.path + "/portrait_xlarge.jpg"}
                                alt={products.title} />
                            <span>{products.title}</span>
                        </div>
                    </CardCart>
                ))}
            </CardContainer>
            <PriceArea>
                <p>Total: ${price}</p>
                    <div>
                        <input data-cy="cuopon" type="text" placeholder="cupom de desconto" onChange={event => setCoupon(event.target.value)}/>
                        <button data-cy="submit-cuopon" type="submit" onClick={() => ValidateCuopon()}>Ok</button>
                    </div>
                </PriceArea>
        </Container>
    )
}