import { Display } from "../../components/Display"
import { Nav } from "../../components/Nav"
import { AnimationContainer } from "./styles"


export const Home = () => {
    return (
        <>
        <Nav />
        <AnimationContainer>
        <Display />
        </AnimationContainer>
        </>
    )
}