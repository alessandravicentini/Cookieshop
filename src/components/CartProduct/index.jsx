import { Container } from './styles';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

import { CartContext } from '../../providers/cart';
import { useContext } from 'react';

export const CartProduct = ({ product }) => {

    const { cart, addToCart, removeFromCart } = useContext(CartContext)

    const productQtt = cart.filter((item) => item === product).length

    const priceFormat = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(product.price)

    return (
        <Container>
            <img src={product.img} alt={product.name}/>
            <p>{product.name}</p>
            <span>{priceFormat}</span>
            <div>
            <span>Qtd: {productQtt}</span>
                <AiOutlineMinusCircle size={20} onClick={() => removeFromCart(product)}/>
                <AiOutlinePlusCircle size={20} onClick={() => addToCart(product)}/>
            </div>
        </Container>
    )
}