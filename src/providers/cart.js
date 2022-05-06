import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeFromCart = (item) => {
        const index = cart.findIndex((itemOnCart) => itemOnCart === item)

        const newCart = [...cart]
        newCart.splice(index, 1)

        setCart(newCart)
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))

    }, [cart])

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>{children}</CartContext.Provider>
    )
} 