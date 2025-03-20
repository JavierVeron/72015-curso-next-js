import Boton from "./components/Boton";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Boton className={"bg-sky-500"} title={"Ingresá a OF!"}>
        <p>Hace Click Aquí</p>
        <p>Sumate al OF</p>
      </Boton>
      <Boton className={"bg-green-500"} title={"Ingresá a Spotify!"}>
        <p>Hace Click Aquí</p>
        <p>Sumate al Spotify Premium</p>
      </Boton>
      <Boton className={"bg-red-500"} title={"Ingresa a YouTube!"}>
        <p>Hace Click Aquí</p>
        <p>Sumate al YouTube Premium</p>
      </Boton>
      <Footer />
    </>
  );
}