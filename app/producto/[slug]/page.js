import ProductDetail from "@/app/components/ProductDetail";

export default async function Producto({params}) {
    const {slug} = await params;    

    return (
        <div className="flex">
            <ProductDetail slug={slug} />
        </div>
    )
}