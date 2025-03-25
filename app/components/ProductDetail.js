import mockData from "@/app/data/productos.json"
import Image from "next/image"

const ProductDetail = ({id}) => {
    const item = mockData.find(item => item.id == id)

    return (
        <div className="flex flex-row">
            <div>
                <Image src={"/images/" + item.imagen} alt={item.nombre} width={240} height={120} />
            </div>
            <div>
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
                <p>${item.precio}</p>
            </div>
        </div>
    )
}

export default ProductDetail