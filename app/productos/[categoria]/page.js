import mockData from "@/app/data/productos.json"
import ProductCard from "@/app/components/ProductCard";

export async function generateMetadata ({params, searchParams}, parent) {
    const {categoria} = await params;

    return {
        title:categoria.toUpperCase().replaceAll("-", " ") + " | McDonalds Argentina"
    }
}

export default async function Productos({params}) {
    let categoria;

    if (await params) {
        const {categoria} = await params;
    }

    const items = categoria ? mockData.filter(item => item.categoria == categoria) : mockData;

    return (
        <section className="container m-auto flex justify-center my-20">
            {
                items.map(item => (
                    <ProductCard key={item.id} item={item} />
                ))
            }
        </section>
    )
}