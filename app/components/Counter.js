"use client"
const { useState } = require("react")
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Button from "./Button";

const Counter = ({item}) => {
    const [counter, setCounter] = useState(0);
    const {addProductToCart} = useContext(CartContext);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    return (
        <div className="my-10">
            <div>
                <Button onClick={decrement}> - </Button>
                <Button>{counter}</Button>
                <Button onClick={increment}> + </Button>
            </div>
            <div>
                <Button onClick={() => {addProductToCart(item)}}>Agregar al Carrito</Button>
            </div>
        </div>
    )
}

export default Counter