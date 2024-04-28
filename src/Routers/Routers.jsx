import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Cart from '../pages/Cart'
import Login from "../pages/Login"
import Checkout from "../pages/Checkout"
import Product from "../pages/Product"
import ProductCategory from "../pages/ProductCategory"
import PrivateRouters from "./PrivateRouters"


export default function RouterPage(){

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={ <Cart/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/product/:id" element={<ProductCategory/>}/>
        </Routes>
    )
}