import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { Header } from "../components/Header";
import { PurchaseCompleted } from "../pages/PurchaseCompleted";


export function Router() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/purchase-completed" element={<PurchaseCompleted />} />
      </Routes>
    </BrowserRouter>
  )
}