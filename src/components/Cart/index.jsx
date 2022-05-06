import { useRef, useContext } from 'react'

import { Cards, Container, Content } from "./styles";
import { AiOutlineDownSquare, AiOutlineUpSquare } from 'react-icons/ai'

import { CartProduct } from "../CartProduct";

import { CartContext } from '../../providers/cart';

const Cart = () => {

  const { cart } = useContext(CartContext)

  const cartFiltered = [...new Set(cart)]
 
  const totalPrice = cart.reduce((acc, next) => acc + next.price, 0)
  const totalPriceFormat = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(totalPrice)

  const ref = useRef(null)

  const scroll = (direction) => {
      ref.current.scrollBy({top: direction === 'up' ? -200 : 200 , behavior: 'smooth'})
  }


  return (
      <Container>
        <Content>
        <h2>Sua seleção</h2>
        <AiOutlineUpSquare size={20} onClick={() => scroll('up')} />
        <AiOutlineDownSquare size={20} onClick={() => scroll('down')}/>
        </Content>
        <Cards ref={ref}>
        {cartFiltered.map((product, index) => (
          <CartProduct product={product} key={index}/>
          ))}
        </Cards>
        <p>Total: {totalPriceFormat}</p>
        <button>Finalizar compra</button>
    </Container>
  );
};

export default Cart;