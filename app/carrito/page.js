"use client";
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Image from "next/image";
import Button from "../components/Button";

export default function Carrito() {
    const {cart, deleteProductFromCart, emptyCart} = useContext(CartContext);

    return (
        <div className="container m-auto flex flex-col my-20">
            <h1 className="text-4xl font-bold mb-5 dark:text-white text-center">Carrito</h1>
            <table>
                <tbody>
                {
                    cart.map(item => (
                        <tr key={item.id}>
                            <td><Image /></td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td><Button onClick={() => {deleteProductFromCart(item.id)}}>Eliminar</Button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}