"use client"
const { useState } = require("react")

const Counter = () => {
    const [contador, setContador] = useState(0);

    const incrementarContador = () => {
        setContador(contador + 1);
    }

    const decrementarContador = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    }

    return (
        <div className="my-10">
            <h1 className="font-sans text-3xl">Contador</h1>
            <button className="rounded-full bg-sky-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700" onClick={decrementarContador}> - </button>
            <button className="rounded-full bg-sky-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700">Contador: {contador}</button>
            <button className="rounded-full bg-sky-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700" onClick={incrementarContador}> + </button>
        </div>
    )
}

export default Counter