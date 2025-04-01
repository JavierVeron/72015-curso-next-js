import Image from "next/image"
import Link from "next/link"

const ProductCard = ({item}) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <Link href={"/producto/" + item.slug}>
                    <Image src={"/images/" + item.imagen} alt={item.nombre} width={"240"} height={"80"} />
                </Link>
            </div>
            <div>
                <p>{item.nombre}</p>
            </div>
        </div>
    )
}

export default ProductCard