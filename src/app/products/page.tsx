"use client";
import { products } from "../components/products/data";
import FilterNav from "./filterNav";
import { useState, useRef } from "react";
import ProductCard from "../components/products/ProductCard";
import "../globals.css";
import CartMessage from "../components/products/cartMessage";

/* not completed need to put some filtering features  */

function Products() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [state, setState] = useState(0);
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
  const handleSortingByPrice = (highToLow: boolean) => {
    let filteringProducts = filteredProducts;
    if (highToLow) {
      for (let i = 0; i < filteredProducts.length; i++) {
        for (let j = i + 1; j < filteredProducts.length; j++) {
          if (filteringProducts[i].price < filteringProducts[j].price) {
            let cache = filteringProducts[i];
            filteringProducts[i] = filteringProducts[j];
            filteringProducts[j] = cache;
          }
        }
      }
    } else {
      for (let i = 0; i < filteredProducts.length; i++) {
        for (let j = i + 1; j < filteredProducts.length; j++) {
          if (filteringProducts[i].price > filteringProducts[j].price) {
            let cache = filteringProducts[i];
            filteringProducts[i] = filteringProducts[j];
            filteringProducts[j] = cache;
          }
        }
      }
    }
    setFilteredProducts(filteringProducts);
    setState(state + 1);
  };
  return (
    <main className="relative mx-auto w-fit">
      <CartMessage message={message} />
      <div className="flex flex-col items-center justify-around py-12">
        <section>
          <h1
            className="font-extrabold mt-16 mb-10"
            style={{ fontSize: "2rem" }}
          >
            Our Products
          </h1>
        </section>
        <FilterNav handleSortingByPrice={handleSortingByPrice} />
        <section className="productGrid justify-center">
          {filteredProducts.map((ele) => (
            <ProductCard
              handleDisplayingMsg={handleDisplayingMsg}
              productData={ele}
              key={ele.id}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Products;
