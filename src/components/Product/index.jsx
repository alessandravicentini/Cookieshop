import { Container, Content, Details, Title } from "./styles";
import { MdShoppingCart } from 'react-icons/md'

import { useContext } from "react";
import { CartContext } from "../../providers/cart";


const Product = ({ product }) => {

  const { addToCart } = useContext(CartContext)

  const { name, price, details, img } = product;

  const priceFormat = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(price)

  return (
    <Container>
      <img src={img} alt={name} />
      <Title>{name}</Title>
      <Details>{details}</Details>
      <Content>
      <p>{priceFormat}</p>
        <MdShoppingCart onClick={() => addToCart(product)} />
      </Content>
    </Container>
  );
};

export default Product;