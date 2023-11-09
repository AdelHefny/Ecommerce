"use client";
import Link from "next/link";
import {
  faPhone,
  faEnvelope,
  faUser,
  faCartShopping,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useContext, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import "./nav.css";
import "@/app/globals.css";
import { CartProductsContext } from "../products/CartProducts";
import CartToolTip from "./components/CartToolTip";

function NavBar() {
  const [show, setShow] = useState(false);
  const nav = useRef<HTMLUListElement>(null);
  const [showCartToolTip, setShowCartToolTip] = useState(false);
  const [cartProducts, cartProductsSetter] = useContext(CartProductsContext);
  const [navActiveItem, setActiveItem] = useState(0);
  const navItems = useRef(null);
  const burgerIcon = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window) {
      window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
          setShow(false);
          burgerIcon.current?.classList.remove("active");
        }
      });
    }
  }, []);
  const clickHandle = () => {
    setShow(!show);
    if (burgerIcon.current) {
      if (!show) {
        burgerIcon.current.classList.add("active");
      } else {
        burgerIcon.current.classList.remove("active");
      }
    }
  };
  const handleActive = (liToActive) => {
    setActiveItem(liToActive);
  };
  return (
    <nav className=" text-white text-3xl flex flex-col relative z-50">
      <div style={{ backgroundColor: "#434f78" }}>
        <div className="md:flex md:justify-between upperNav px-4 flex flex-row items-center py-2 mx-auto sm:grid sm:justify-center">
          <section className="flex-row text-sm space-x-2 sm:hidden md:flex">
            <section className="flex flex-row items-center space-x-2 py-4 hover:text-orange-300 cursor-pointer text-lg">
              <FontAwesomeIcon
                icon={faPhone}
                color="#f3c93e"
                style={{ width: "16px", height: "16px" }}
              />
              <p>Call: +01 123455678990</p>
            </section>
            <section className="flex flex-row items-center space-x-2 py-4 hover:text-orange-300 cursor-pointer text-lg">
              <FontAwesomeIcon
                icon={faEnvelope}
                color="#f3c93e"
                style={{ width: "16px", height: "16px" }}
              />
              <p>Email: demo@gmail.com</p>
            </section>
          </section>
          <SearchBar />
          <section className="relative flex flex-row space-x-10 py-2 justify-center menu">
            <section className="flex flex-row text-lg items-center space-x-2 hover:text-yellow-400 cursor-pointer">
              <FontAwesomeIcon
                icon={faUser}
                style={{ width: "16px" }}
                color="rgb(250 204 21)"
              />
              <h2>My Account</h2>
            </section>
            <section
              className="relative flex flex-row text-lg items-center space-x-2 hover:text-yellow-400 cursor-pointer"
              onClick={() => {
                setShowCartToolTip(!showCartToolTip);
              }}
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ width: "16px" }}
                color="rgb(250 204 21)"
              />
              <span className="bg-yellow-400 text-black rounded-full w-6 h-6 flex items-center justify-center absolute top-2/3 -left-1/4">
                {cartProducts.length}
              </span>
              <h2>Cart</h2>
            </section>
            <section
              className={`absolute ${
                showCartToolTip ? "translate-y-0" : "cartToolTipTranslateY"
              } adel overflow-hidden top-0 p-4 py-8 shadow-slate-600 shadow-sm rounded-xl w-full right-0`}
              style={{
                backgroundColor: "#3a4468",
                fontSize: "1rem",
                lineHeight: "1.5rem",
                transition: "800ms",
              }}
            >
              <button
                type="button"
                className="absolute top-4 right-6"
                onClick={() => {
                  setShowCartToolTip(false);
                }}
              >
                <FontAwesomeIcon icon={faX} size="lg" color="white" />
              </button>
              <CartToolTip />
            </section>
          </section>
        </div>
      </div>
      <div
        className={`px-6 py-4 h- flex flex-col h-16 ${show ? "h-64" : ""}`}
        style={{ backgroundColor: "#3a4468", transition: "400ms" }}
      >
        <div>
          <div className="flex-row justify-between flex">
            <Link href={"/"}>
              <h1 className="font-bold text-3xl">Minics</h1>
            </Link>
            <ul
              className="flex flex-row space-x-12 px-10 text-lg items-center md:flex sm:hidden"
              ref={navItems}
            >
              <li
                className="after:content"
                onClick={() => {
                  handleActive(0);
                }}
              >
                <Link className="hover:text-orange-300" href={"/"}>
                  Home
                </Link>
              </li>
              <li
                onClick={() => {
                  handleActive(1);
                }}
              >
                <Link className="hover:text-orange-300" href={"/about"}>
                  About
                </Link>
              </li>
              <li
                onClick={() => {
                  handleActive(2);
                }}
              >
                <Link className="hover:text-orange-300" href={"/products"}>
                  Products
                </Link>
              </li>
              <li
                onClick={() => {
                  handleActive(3);
                }}
              >
                <Link className="hover:text-orange-300" href={"/whyUs"}>
                  Why Us
                </Link>
              </li>
            </ul>
            <div
              className="w-10 h-8 iconBurger flex items-center justify-center cursor-pointer md:hidden sm:flex"
              onClick={clickHandle}
            >
              <div ref={burgerIcon} className="burger"></div>
            </div>
          </div>
        </div>
        <ul
          ref={nav}
          style={{ backgroundColor: "#3a4468", transition: "200ms" }}
          className={`flex flex-col overflow-hidden relative md:hidden text-white space-y-4 text-lg items-center z-50 top-0 justify-center w-full h-full duration-300`}
        >
          <li>
            <Link className="hover:text-orange-300" href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-300" href={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-300" href={"/products"}>
              Products
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-300" href={"/whyUs"}>
              Why Us
            </Link>
          </li>
        </ul>
      </div>
      {/* scale-100 translate-y-0 h-full ////////// h-0 -translate-y-1/2 scale-0 */}
    </nav>
  );
}

export default NavBar;
