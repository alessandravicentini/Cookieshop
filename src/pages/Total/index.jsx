import Cart from "../../components/Cart"
import { Nav } from "../../components/Nav"
import { AnimationContainer } from "../Home/styles"

export const Total = () => {
    return (
        <>
        <Nav showButton/>
        <AnimationContainer>
        <Cart />
        </AnimationContainer>
        </>
    )
}