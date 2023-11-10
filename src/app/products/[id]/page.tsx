"use client";
import { products } from "@/app/components/products/data";
import Image from "next/image";
import { useRef, useEffect, useState, useContext } from "react";
import "../../components/products/products.css";
import "@/app/globals.css";
import "./productPage.css";
import "@/app/components/products/products.css";
import {
  CartProductsContext,
  productData,
} from "@/app/components/products/CartProducts";
import ProductCard from "@/app/components/products/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CartMessage from "@/app/components/products/cartMessage";

function ProductPage({ params }: { params: any }) {
  let ourProduct;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == params.id) {
      ourProduct = products[i];
    }
  }
  const stars = useRef<HTMLDivElement>(null);
  const [simalerProducts, setSimalerProducts] = useState<productData[]>([]);
  const [cartProducts, cartSetter] = useContext(CartProductsContext);
  const message = useRef<HTMLDivElement>(null);
  const handleAdding = async () => {
    cartSetter(ourProduct, false);
    message.current?.classList.remove("opacity-0");
    message.current?.classList.remove("hidden");
    await new Promise(() => {
      setTimeout(() => {
        message.current?.classList.add("opacity-0");
      }, 2000);
    });
  };
  useEffect(() => {
    let simalerProductsD: productData[] = [];
    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < products[i].category.length; j++) {
        let found = false;
        for (let k = 0; k < ourProduct.category.length; k++) {
          if (
            products[i].category[j] == ourProduct.category[k] &&
            products[i].productName != ourProduct.productName
          ) {
            simalerProductsD.push(products[i]);
            found = true;
            break;
          }
        }
        if (found) {
          break;
        }
      }
    }
    setSimalerProducts(simalerProductsD);
    if (stars.current) {
      let starList = stars.current.querySelectorAll("div .star");
      for (let i = 0; i < ourProduct.rating; i++) {
        if (i == Math.floor(ourProduct.rating)) {
          starList[i].classList.remove("starr");
          starList[i].classList.add("yellowStarhalf");
        } else {
          starList[i].classList.remove("starr");
          starList[i].classList.add("yellowStar");
        }
      }
    }
  }, []);
  return (
    <section className="flex flex-col items-center">
      <section className="relative mx-10 flex flex-col md:flex-row justify-start md:items-start items-center py-10 space-x-4">
        <div className="sticky w-80 max-w-full p-6">
          <Image
            src={ourProduct.image}
            alt={`product ${ourProduct.productName}`}
          />
        </div>
        <section className="flex flex-col w-1/2 space-y-3 items-start border-b-2 py-2">
          <div className="flex flex-col items-start border-b-2 py-2 w-full">
            <h1 className="font-extrabold text-3xl">
              {ourProduct.productName}
            </h1>
            <h6 className="font-light text-sm text-gray-500">
              {ourProduct.companyName}
            </h6>
            <div className="flex flex-row items-center justify-start space-x-1">
              <p className="pt-1">{ourProduct.rating}</p>
              <div
                className="flex flex-row items-center justify-center stars"
                ref={stars}
              >
                <div className="relative">
                  <div className="smallStar"></div>
                  <div className="star absolute top-0 left-0"></div>
                </div>
                <div className="relative">
                  <div className="smallStar"></div>
                  <div className="star absolute top-0 left-0"></div>
                </div>
                <div className="relative">
                  <div className="smallStar"></div>
                  <div className="star absolute top-0 left-0"></div>
                </div>
                <div className="relative">
                  <div className="smallStar"></div>
                  <div className="star absolute top-0 left-0"></div>
                </div>
                <div className="relative">
                  <div className="smallStar"></div>
                  <div className="star absolute top-0 left-0"></div>
                </div>
              </div>
            </div>
          </div>
          <section>
            <h1 className="text-xl">{ourProduct.price}$</h1>
            <p>{ourProduct.desctiprion}</p>
          </section>
        </section>
        <CartMessage message={message} />
        <section
          className="flex flex-col space-y-4 py-2 font-bold
        "
        >
          <button
            className="px-4 py-2 w-44 rounded-md text-sm text-slate-800 cartBtn"
            onClick={handleAdding}
          >
            Add To Cart
          </button>
          <button
            className="px-4 py-2 w-44 rounded-md text-sm text-slate-800 bg-orange-400 hover:bg-orange-500 transition duration-200"
            onClick={handleAdding}
          >
            Buy Item
          </button>
        </section>
      </section>
      <h1 className="textSimaler text-2xl font-bold text-center">
        Simalar Products
      </h1>
      <section className="grid productsGrid items-center justify-center my-8">
        {simalerProducts.map((ele) => (
          <ProductCard productData={ele} key={ele.id} />
        ))}
      </section>
    </section>
  );
}

export default ProductPage;
