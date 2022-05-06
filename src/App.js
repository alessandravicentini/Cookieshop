import { Routes } from "./routes"

import { CartProvider } from "./providers/cart";
import { ProductsProvider } from "./providers/products";
import { ThemeTypeProvider } from "./providers/theme";


function App() {

  return (
    <>
    
    <ThemeTypeProvider>
    <CartProvider>
    <ProductsProvider>
      <Routes />
    </ProductsProvider>
    </CartProvider>
    </ThemeTypeProvider>

    </>
  );
}

export default App;
