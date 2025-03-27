import Posts from "./Clase4/PostsFetch";
import ContactForm from "./components/ConcactForm";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import PostsById from "./Clase4/PostsById";

export default function Home() {
  return (
    <>
      <NavBar />
      {/* <ProductList categoria={"papas"} /> */}
      {/* <ContactForm /> */}
      <Posts />
      <PostsById id={10} />
      <Footer />
    </>
  );
}