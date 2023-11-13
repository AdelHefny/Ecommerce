import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RefObject } from "react";

function CartMessage({ message }: { message: RefObject<HTMLDivElement> }) {
  return (
    <div
      className="fixed text-lg opacity-0 transition duration-300 rounded-lg bottom-4 right-2 bg-green-700 py-4 z-50 text-white flex items-center justify-between"
      ref={message}
      onClick={() => {}}
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
  );
}

export default CartMessage;
