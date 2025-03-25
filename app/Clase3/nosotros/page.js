"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


export default function Nosotros() {
    const ubicacion = usePathname();
    console.log(ubicacion);
    

    const router = useRouter();

    const reemplazar = (url) => {
        router.replace(url);
    }

    const refrescar = () => {
        router.refresh();
    }

    const irAtras = () => {
        router.back();
    }

    const irAdelante = () => {
        router.forward();
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-9xl">Nosotros</h1>
                <h3 className="text-3xl">Contenido de la Página</h3>
                <div className="my-5">
                    <Link href={"/"} className="underline">Inicio</Link> - <Link href={ubicacion} className="underline">Nosotros</Link> 
                </div>
                <div className="my-5">
                    <Link href={"/"} className="my-9 underline">Volver a la Página Principal</Link>
                </div>
                <div>
                    <button className="rounded-none bg-sky-500 px-4 py-2 text-sm font-semibold text-white m-2" onClick={() => {reemplazar("/")}}>Reemplazar</button>
                    <button className="rounded-none bg-sky-500 px-4 py-2 text-sm font-semibold text-white m-2" onClick={refrescar}>Refrescar</button>
                    <button className="rounded-none bg-sky-500 px-4 py-2 text-sm font-semibold text-white m-2" onClick={irAtras}>Ir atrás</button>
                    <button className="rounded-none bg-sky-500 px-4 py-2 text-sm font-semibold text-white m-2" onClick={irAdelante}>Ir adelante</button>
                </div>
            </div>
        </div>
    )
}