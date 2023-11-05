import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { CartProductsContext, productData } from "../../products/CartProducts";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartToolTip() {
  const [cartProducts, cartProductsSetter] = useContext(CartProductsContext);
  const [count, setCount] = useState(cartProducts.length);
  return (
    <>
      {cartProducts.length != 0 ? (
        cartProducts.map((ele) => (
          <section
            key={ele.id}
            className={`flex flex-row justify-between items-center w-full py-2`}
          >
            <h1 className="" style={{ width: "14rem" }}>
              {ele.productName}
            </h1>
            <div className="flex flex-row items-center w-full h-1/2 justify-around">
              <p style={{ color: "rgb(255 218 141)" }}>{ele.count}</p>
              <section>
                <button
                  className=" p-1 hover:bg-gray-700"
                  onClick={() => {
                    cartProductsSetter(ele, false);
                    setCount(count + 1);
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} color="rgb(253 186 116)" />
                </button>
                <button
                  className="p-1 hover:bg-gray-700"
                  onClick={() => {
                    cartProductsSetter(ele, true);
                    setCount(count - 1);
                  }}
                >
                  <FontAwesomeIcon icon={faMinus} color="black" />
                </button>
              </section>
            </div>
          </section>
        ))
      ) : (
        <h1>No Products In Cart</h1>
      )}
    </>
  );
}

export default CartToolTip;
