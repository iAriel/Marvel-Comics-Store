import { createContext, useState } from 'react'

export const CartContext = createContext();

export function CartContextProvider({children}){
    const [cart, setCart] = useState([]);
    const [pageSwitch, setPageSwitch] = useState(true);


    return(
        <CartContext.Provider value={{cart, setCart, pageSwitch, setPageSwitch}}>
            {children}
        </CartContext.Provider>
    )
}