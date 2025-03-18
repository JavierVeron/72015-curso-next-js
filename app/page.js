import Image from "next/image";
import Curso from "./Clase1/Curso";
import Counter from "./Clase1/Counter";

const Encabezado = () => {
  return (
    <h1 className="font-sans text-3xl">Coderhouse</h1>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col p-10 ">
      <Encabezado />
      <Curso />
      <Image src="/hamburguesa-tasty.png" alt={"Hamburguesa Tasty"} width={240} height={120} />
      <Counter />
    </div>
  );
}
