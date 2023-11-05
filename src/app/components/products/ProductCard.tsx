"use client";
import Image, { StaticImageData } from "next/image";
import { useContext } from "react";
import { CartProductsContext } from "./CartProducts";
import { useRef, useEffect } from "react";
import "./products.css";
import { productData } from "./CartProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Stars from "@/app/images/noun-five-star-review-446618.svg";
import Link from "next/link";

type productCardDataProps = {
  productData: productData;
};
function ProductCard({ productData }: productCardDataProps) {
  const stars = useRef<HTMLDivElement>(null);
  const [cartProducts, cartSetter] = useContext(CartProductsContext);
  const message = useRef<HTMLDivElement>(null);
  const handleAdding = async () => {
    cartSetter(productData, false);
    message.current?.classList.remove("opacity-0");
    message.current?.classList.remove("hidden");
    await new Promise(() => {
      setTimeout(() => {
        message.current?.classList.add("opacity-0");
      }, 2000);
    });
  };
  useEffect(() => {
    if (stars.current) {
      let starList = stars.current.querySelectorAll("div .star");
      for (let i = 0; i < productData.rating; i++) {
        if (i == Math.floor(productData.rating)) {
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
    <section className="relative flex flex-col w-72 text-xl font-thin mx-10 productCard">
      <div className="bg-gray-100 w-full h-3/4 items-center flex px-4 py-10 justify-center">
        <Image
          src={productData.image}
          alt={`product ${productData.productName}`}
          className="sm:w-32 md:w-52"
        />
      </div>
      <section>
        <p>{productData.productName}</p>
        <div className="flex flex-row items-center justify-between">
          <p>{productData.price}$</p>
          <div
            className="flex flex-row items-center justify-center stars"
            ref={stars}
          >
            <h6 className="text-lg pr-2">{productData.rating}</h6>
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
          <div
            className="fixed opacity-0 transition duration-300 rounded-lg bottom-4 right-2 bg-green-700 py-4 z-50 text-white flex items-center justify-between"
            ref={message}
          >
            <button
              className="px-4"
              onClick={() => {
                message.current?.classList.add("hidden");
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <h1 className="px-4">Item Added Successfully</h1>
          </div>
          <div className="btn flex-col space-y-1 flex items-center justify-center absolute top-0 w-full h-3/4 duration-200 transition">
            <button
              className="px-4 py-2 w-44 rounded-md text-white"
              onClick={handleAdding}
            >
              Add To Cart
            </button>
            <Link
              className="px-4 text-center py-2 w-44 rounded-md bg-yellow-500 text-white"
              href={`/products/${productData.id}`}
            >
              View Product
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ProductCard;
