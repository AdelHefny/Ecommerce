import FrontPage from "./components/homePage/homePage";
import "./globals.css";
import Service from "./components/service/Service";
import ProductsComponent from "./components/products/products";

export default function Home() {
  return (
    <main className="">
      <FrontPage />
      <ProductsComponent children={<></>} />
      <Service />
    </main>
  );
}
