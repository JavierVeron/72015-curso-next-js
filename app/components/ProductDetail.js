import Image from "next/image"

const ProductDetail = async ({slug}) => {
    const response = await fetch("http://localhost:3000/api/producto/" + slug, {cache:"no-store"});
    const item = await response.json();

    return (
        <div className="container m-auto flex flex-row my-20 px-20">
            <div className="w-1/2 flex flex-col items-end">
                <Image src={item.imagen} alt={item.nombre} width={320} height={240} />
            </div>
            <div className="w-1/2 flex flex-col justify-center">
                <h1 className="text-4xl font-bold dark:text-white">{item.nombre}</h1>
                <p className="tracking-tighter text-gray-500 md:text-lg dark:text-gray-400 my-5">{item.descripcion}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white my-5">${item.precio}</p>
            </div>
        </div>
    )
}

export default ProductDetail