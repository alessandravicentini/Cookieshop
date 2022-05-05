import { createContext, useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

      const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeFromCart = (item) => {
        const index = cart.findIndex((itemOnCart) => itemOnCart === item)

        const newCart = [...cart]
        newCart.splice(index, 1)

        setCart(newCart)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>{children}</CartContext.Provider>
    )
}