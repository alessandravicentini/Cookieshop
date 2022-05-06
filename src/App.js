import { Routes } from "./routes"

import { CartProvider } from "./providers/cart";
import { ProductsProvider } from "./providers/products";
import { ThemeTypeProvider } from "./providers/theme";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  return (
    <>
    
    <ThemeTypeProvider>
    <CartProvider>
    <ProductsProvider>
      <Routes />
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </ProductsProvider>
    </CartProvider>
    </ThemeTypeProvider>

    </>
  );
}

export default App;
