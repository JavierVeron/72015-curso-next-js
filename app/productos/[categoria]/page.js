import mockData from "@/app/data/productos.json"
import ProductCard from "@/app/components/ProductCard";

export async function generateMetadata ({params, searchParams}, parent) {
    const {categoria} = await params;

    return {
        title:categoria.toUpperCase().replaceAll("-", " ") + " | McDonalds Argentina"
    }
}

export default async function Productos({params}) {
    const {categoria} = await params;
    //console.log(categoria);
    const items = categoria ? mockData.filter(item => item.categoria == categoria) : mockData;
    //console.log(items);

    return (
        <section className="flex justify-center items-center h-screen">
            {
                items.map(item => (
                    <ProductCard key={item.id} item={item} />
                ))
            }
        </section>
    )
}