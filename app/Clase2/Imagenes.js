import Image from "next/image"

const Imagenes = () => {
    return (
        <div className="flex flex-row">
            <div className="col">
                <Image src={"/images/hamburguesa-con-queso.png"} alt={"Hamburguesa con Queso"} width={240} height={120} />
            </div>
            <div className="col">
                <Image src={"https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kqXakvb9/200/200/original?country=ar"} alt={"McFiesta"} width={240} height={120} />
            </div>
        </div>
    )
}

export default Imagenes