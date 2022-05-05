import logo from '../../assets/images/logo.png'
import { Container, Logo } from './styles'
import { MdShoppingCart } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'

import { useHistory } from "react-router-dom";
import { useContext } from 'react';

import { CartContext } from '../../providers/cart';

export const Nav = ({showButton}) => {

    const history = useHistory()

    const { cart } = useContext(CartContext)

    return (
        <Container>
            <Logo>
            <img src={logo} alt="" />
            <h2>COOKIESHOP</h2>
            </Logo>
            <div>
            <MdShoppingCart size={25} onClick={() => history.push('/cart')}/>
            <span>{cart.length}</span>
            {showButton ? <AiFillHome size={25} onClick={() => history.push('/')}/> : <></>}
            </div>
        </Container>
    )
}