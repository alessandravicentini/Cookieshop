import logo from '../../assets/images/logo.png'
import { Container, Logo } from './styles'
import { MdShoppingCart } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'
import { FaLightbulb } from 'react-icons/fa'

import { useHistory } from "react-router-dom";
import { useCallback, useContext } from 'react';

import { CartContext } from '../../providers/cart';
import { ThemeTypeContext } from '../../providers/theme'

export const Nav = ({showButton}) => {

    const history = useHistory()

    const { cart } = useContext(CartContext)
    const { currentTheme, setCurrentTheme } = useContext(ThemeTypeContext)

    const oppositeTheme = useCallback(
        () => (currentTheme === 'light' ? 'dark' : 'light'),
        [currentTheme]
      )

    return (
        <Container>
            <Logo>
                <img src={logo} alt="" />
                <h2>COOKIESHOP</h2>
            </Logo>
            <div>
                <FaLightbulb size={22} onClick={() => setCurrentTheme(oppositeTheme())} />
                <MdShoppingCart size={25} onClick={() => history.push('/cart')}/>
                <span>{cart.length}</span>
                {showButton ? <AiFillHome size={25} onClick={() => history.push('/')}/> : <></>}
            </div>
        </Container>
    )
}