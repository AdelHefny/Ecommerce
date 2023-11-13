"use client";
import Image from "next/image";
import { useContext } from "react";
import { CartProductsContext } from "./CartProducts";
import { useRef, useEffect } from "react";
import "./products.css";
import { productData } from "./CartProducts";

type productCardDataProps = {
  productData: productData;
  handleDisplayingMsg: () => {};
};
function ProductCard({
  productData,
  handleDisplayingMsg,
}: productCardDataProps) {
  const [, cartSetter] = useContext(CartProductsContext);
  const stars = useRef<HTMLDivElement>(null);
  const handleAdding = () => {
    cartSetter(productData, false);
    handleDisplayingMsg();
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
    <div className="relative w-72 text-xl h-96 font-thin mx-10 productCard">
      <section
        className="flex flex-col h-full transition duration-200 cursor-pointer"
        onClick={() => {
          location.href = `/products/${productData.id}`;
        }}
      >
        <div className="bg-gray-100 w-full h-3/4 items-center flex px-4 py-10 justify-center">
          <Image
            src={productData.image}
            alt={`product ${productData.productName}`}
            className="sm:w-32 md:w-40"
          />
        </div>
        <section>
          <p>{productData.productName}</p>
          <div className="flex flex-row items-center justify-between">
            <p>{productData.price}$</p>
            <div className="flex flex-row items-center justify-start space-x-1">
              <h6 className="text-lg pt-1">{productData.rating}</h6>
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
        </section>
      </section>
      <div className="btn bg-white bg-opacity-70 font-bold flex-col space-y-1 flex items-center justify-center absolute top-0 w-full h-3/4 duration-200 transition">
        <button
          className="px-4 py-2 w-44 rounded-md text-slate-800"
          onClick={handleAdding}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
