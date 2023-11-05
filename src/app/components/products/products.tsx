import { StaticImageData } from "next/image";
import ProductCard from "./ProductCard";
import { products } from "./data";

import "./products.css";
function ProductsComponent({ children }: { children: React.JSX.Element }) {
  return (
    <section>
      <div className="flex flex-col items-center justify-around py-12">
        <section>
          <h1 className="font-extrabold my-16" style={{ fontSize: "2rem" }}>
            Our Products
          </h1>
        </section>
        {children}
        <section className="productGrid justify-center">
          {products.map((ele) => (
            <ProductCard productData={ele} key={ele.id} />
          ))}
        </section>
      </div>
    </section>
  );
}

export default ProductsComponent;
