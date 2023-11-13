"use client";
import { products } from "@/app/components/products/data";
import FilterNav from "@/app/products/filterNav";
import "@/app/globals.css";
import { useState, useEffect, useRef } from "react";
import { productData } from "@/app/components/products/CartProducts";
import ProductCard from "@/app/components/products/ProductCard";
import "@/app/products/[id]/productPage.css";
import CartMessage from "@/app/components/products/cartMessage";

function Search({ params }: { params: any }) {
  const [filteredProducts, setFilteredProducts] = useState<productData[]>([]);
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
  useEffect(() => {
    let searchedProducts: productData[] = [];
    for (let i = 0; i < products.length; i++) {
      if (
        products[i].productName
          .toLowerCase()
          .includes(params.searchText.toLowerCase())
      ) {
        searchedProducts.push(products[i]);
      } else {
        products[i].category.map((ele) => {
          if (ele.includes(params.searchText.toLowerCase())) {
            searchedProducts.push(products[i]);
          }
        });
      }
    }
    setFilteredProducts(searchedProducts);
  }, []);
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
    <section className="flex flex-col items-center">
      <h1 className="text-xl font-bold py-8">
        Search results for{" "}
        <span className="text-orange-500 text-lg">{params.searchText}</span>
      </h1>
      <FilterNav handleSortingByPrice={handleSortingByPrice} />
      <CartMessage message={message} />
      <section className="productsGrid items-center justify-center my-8">
        {filteredProducts.map((ele) => (
          <ProductCard
            handleDisplayingMsg={handleDisplayingMsg}
            productData={ele}
            key={ele.id}
          />
        ))}
      </section>
    </section>
  );
}

export default Search;
