import { NextResponse } from "next/server";
import mockData from "@/app/data/productos.json";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer));
}

export async function GET(request, {params}) {
    const {categoria} = params;    
    const data = categoria ? mockData.filter(item => item.categoria == categoria) : mockData;
    await sleep(2000);

    return NextResponse.json(data);
}