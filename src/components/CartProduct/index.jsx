import { Container } from './styles';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { FaCookieBite } from 'react-icons/fa'

import { CartContext } from '../../providers/cart';
import { useContext } from 'react';
import { toast } from 'react-toastify';

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
                <AiOutlineMinusCircle size={20} onClick={() => {
                    removeFromCart(product)
                    toast.warning('cookie removido!', {icon: <FaCookieBite/>})
                    }}/>
                <AiOutlinePlusCircle size={20} onClick={() => {
                    addToCart(product)
                    toast.success('cookie adicionado!', {icon: <FaCookieBite/>})
                    }}/>
            </div>
        </Container>
    )
}