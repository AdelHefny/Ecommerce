"use client";
import { useState } from "react";
import Comments from "./comment";
import { customerReviews, services } from "./data";
import ServceCard from "./serviceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../service.css";

function WhyChooseUsComponent() {
  const [commentId, setCommentId] = useState(0);
  const handleClick = (target) => {
    if (document.documentElement) {
      if (target == "left") {
        if (commentId == 0) {
          setCommentId(customerReviews.length - 1);
        } else {
          setCommentId(commentId - 1);
        }
        document.documentElement.style.setProperty(
          "--translate",
          `${
            (commentId == 0 ? customerReviews.length - 1 : commentId - 1) * -100
          }%`
        );
      } else {
        if (commentId == customerReviews.length - 1) {
          setCommentId(0);
        } else {
          setCommentId(commentId + 1);
        }
        document.documentElement.style.setProperty(
          "--translate",
          `${
            (commentId == customerReviews.length - 1 ? 0 : commentId + 1) * -100
          }%`
        );
      }
    }
  };
  return (
    <section className="flex flex-col items-center justify-center space-y-12 py-20">
      <h1 className="font-extrabold text-4xl">Why Choose Us</h1>
      <section className="flex md:flex-row sm:flex-col md:space-y-0 sm:space-y-6 items-center justify-center sm:space-x-0 md:space-x-6">
        {services.map((ele) => (
          <ServceCard serviceData={ele} key={ele.id} />
        ))}
      </section>
      <section className="w-full relative customers flex flex-col items-center justify-center space-y-7 py-20">
        <h1 className="font-extrabold text-center" style={{ fontSize: "36px" }}>
          What Says Our Customers
        </h1>
        <div className="overflow-x-hidden w-full min-h-96">
          <section className="flex flex-row h-full reviews">
            {customerReviews.map((ele) => (
              <Comments key={ele.id} commentData={ele} />
            ))}
          </section>
        </div>
        <button
          className="absolute z-50 px-5 py-3 h-fit md:left-16 md:top-1/2 sm:bottom-0 sm:top-full sm:left-1/2 -translate-x-full transition duration-300"
          onClick={() => {
            handleClick("left");
          }}
        >
          <FontAwesomeIcon icon={faAngleLeft} size="lg" color="white" />
        </button>
        <button
          className="absolute z-50 px-5 py-3 h-fit md:right-16 md:top-1/2 sm:bottom-0 sm:top-full sm:right-1/2 translate-x-full transition duration-300"
          onClick={() => {
            handleClick("right");
          }}
        >
          <FontAwesomeIcon icon={faAngleRight} size="lg" color="white" />
        </button>
      </section>
    </section>
  );
}

export default WhyChooseUsComponent;
