import { BrowserRouter, Route, Router, Routes} from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
      
  );
}

export default App;
