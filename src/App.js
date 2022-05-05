import { GlobalStyle } from "./styles/global"

import { Routes } from "./routes"
import { CartProvider } from "./providers/cart";
import { ProductsProvider } from "./providers/products";


function App() {
  return (
    <>
    <CartProvider>
    <ProductsProvider>
    <GlobalStyle />
    <Routes />
    </ProductsProvider>
    </CartProvider>
    </>
  );
}

export default App;
