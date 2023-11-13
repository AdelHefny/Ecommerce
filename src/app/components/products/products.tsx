"use client";
import ProductCard from "./ProductCard";
import { products } from "./data";
import { useRef } from "react";
import "./products.css";
import CartMessage from "./cartMessage";
function ProductsComponent({ children }: { children: React.JSX.Element }) {
  const message = useRef<HTMLDivElement>(null);
  const handleDisplayingMsg = async () => {
    message.current?.classList.remove("opacity-0");
    message.current?.classList.remove("hidden");
    await new Promise(() => {
      setTimeout(() => {
        message.current?.classList.add("opacity-0");
      }, 2000);
    });
  };
  return (
    <section>
      <div className="flex flex-col items-center justify-around py-12">
        <section>
          <h1
            className="relative font-extrabold my-16 productsTitle"
            style={{ fontSize: "2rem" }}
          >
            Our Products
          </h1>
        </section>
        {children}
        <section className="productGrid justify-center">
          {products.map((ele) => (
            <ProductCard
              productData={ele}
              handleDisplayingMsg={handleDisplayingMsg}
              key={ele.id}
            />
          ))}
        </section>
        <CartMessage message={message} />
      </div>
    </section>
  );
}

export default ProductsComponent;
