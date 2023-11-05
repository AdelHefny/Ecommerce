"use client";
import Helvetica from "next/font/local";
import "./globals.css";
import {
  CartProductsContext,
  productData,
} from "./components/products/CartProducts";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/navBar";
import Footer from "./components/footer/footer";

const helvetica = Helvetica({
  src: "../../public/fonts/Helvetica/Helvetica.ttf",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartProducts, setCartProducts] = useState<productData[]>([]);
  const [state, setState] = useState(true);
  function cartSetter(product: productData, decrease: boolean) {
    let isThere = false;
    cartProducts.forEach((ele) => {
      ele.productName == product.productName ? (isThere = true) : null;
    });
    if (isThere) {
      cartProducts.forEach((ele, index) => {
        if (ele.id == product.id) {
          if (decrease == true) {
            if (ele.count == 1) {
              cartProducts.splice(index, 1);
            } else {
              ele.count--;
            }
          } else {
            ele.count++;
          }
        }
      });
      window.localStorage.setItem(
        "cartProducts",
        JSON.stringify([...cartProducts])
      );
    } else {
      setCartProducts((prev) => [...prev, product]);
      window.localStorage.setItem(
        "cartProducts",
        JSON.stringify([...cartProducts, product])
      );
      setState(!state);
    }
    console.log(cartProducts);
  }
  useEffect(() => {
    if (window.localStorage.getItem("cartProducts")) {
      setCartProducts(
        JSON.parse(window.localStorage.getItem("cartProducts") as string)
      );
      console.log(
        JSON.parse(window.localStorage.getItem("cartProducts") as string)
      );
    } else {
      console.log("no cart items found");
    }
  }, []);
  return (
    <html lang="en">
      <head>
        <title>Ecommerce</title>
      </head>
      <body className={helvetica.className}>
        <CartProductsContext.Provider value={[cartProducts, cartSetter]}>
          <NavBar />
          {children}
          <Footer />
        </CartProductsContext.Provider>
      </body>
    </html>
  );
}
