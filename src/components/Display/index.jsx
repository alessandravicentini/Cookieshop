
import Product from '../Product'
import { Container } from './styles'

import { ProductsContext } from '../../providers/products'
import { useContext } from 'react'

export const Display = () => {

    const { products } = useContext(ProductsContext)

    return (
        <Container>
        {products.map((cookie, index) => <Product key={index} product={cookie}/>)}
        </Container>
    )
}