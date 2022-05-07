import cookies from '../dataBase/db'

import { createContext, useState } from 'react'

export const ProductsContext = createContext([])

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(cookies)

    return (
        <ProductsContext.Provider value={{ products, setProducts }}>{children}</ProductsContext.Provider>
    )
}

