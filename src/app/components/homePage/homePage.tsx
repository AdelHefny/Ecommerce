"use client";
import Image from "next/image";
import "./homePage.css";
import { products } from "../products/data";
import ProductPreview from "./components/frontPage";
import { useState, useRef, useEffect } from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function FrontPage() {
  const frontProductSection = useRef<HTMLDivElement>(null);
  const [product, setProduct] = useState(0);
  let frontProducts = products.filter((ele) => {
    return ele.frontPage;
  });
  useEffect(() => {
    const intervalId = setInterval(async () => {
      await new Promise((resolve) => {
        frontProductSection.current?.classList.add("opacity-0");
        setTimeout(() => {
          setProduct((prevProduct) => (prevProduct + 1) % frontProducts.length);
          frontProductSection.current?.classList.remove("opacity-0");
          resolve("");
        }, 200);
      });
    }, 5000);
    return () => clearInterval(intervalId);
  }, [frontProducts]);
  // make the front page change products auto
  return (
    <section
      style={{ backgroundColor: "#f7f7f7" }}
      className=" md:h-full md:p-10 sm:py-8 homePage relative"
    >
      <section ref={frontProductSection} className="duration-300 transition">
        <ProductPreview frontProduct={frontProducts[product]} />
      </section>
      <div className="absolute flex flex-row items-center justify-center bottom-0 left-10 translate-y-1/2 space-x-2">
        <button
          className="px-4 py-2 transition duration-300"
          onClick={async () => {
            if (product != 0) {
              await new Promise((resolve) => {
                frontProductSection.current?.classList.add("opacity-0");
                setTimeout(() => {
                  setProduct(product - 1);
                  frontProductSection.current?.classList.remove("opacity-0");
                  resolve("");
                }, 200);
              });
            } else {
              await new Promise((resolve) => {
                frontProductSection.current?.classList.add("opacity-0");
                setTimeout(() => {
                  setProduct(frontProducts.length - 1);
                  frontProductSection.current?.classList.remove("opacity-0");
                  resolve("");
                }, 200);
              });
            }
          }}
        >
          <FontAwesomeIcon icon={faAngleLeft} size="lg" color="white" />
        </button>
        <button
          className="px-4 py-2 transition duration-300"
          onClick={async () => {
            if (product != frontProducts.length - 1) {
              await new Promise((resolve) => {
                frontProductSection.current?.classList.add("opacity-0");
                setTimeout(() => {
                  setProduct(product + 1);
                  frontProductSection.current?.classList.remove("opacity-0");
                  resolve("");
                }, 200);
              });
            } else {
              await new Promise((resolve) => {
                frontProductSection.current?.classList.add("opacity-0");
                setTimeout(() => {
                  setProduct(0);
                  frontProductSection.current?.classList.remove("opacity-0");
                  resolve("");
                }, 200);
              });
            }
          }}
        >
          <FontAwesomeIcon icon={faAngleRight} size="lg" color="white" />
        </button>
      </div>
    </section>
  );
}

export default FrontPage;
