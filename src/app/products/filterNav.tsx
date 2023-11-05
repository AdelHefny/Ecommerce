import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImageData } from "next/image";

type filterNavProps = {
  handleSortingByPrice: (highToLow: boolean) => void;
};

function FilterNav({ handleSortingByPrice }: filterNavProps) {
  return (
    <aside className="flex flex-col items-center py-6 justify-between w-full">
      <h1 className="text-2xl">filters</h1>
      <section className="flex flex-row items-center justify-center space-x-4">
        <button
          className="text-black p-2 hover:bg-gray-300 duration-200 transition"
          onClick={() => {
            handleSortingByPrice(true);
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} size="xl" />
        </button>
        <button
          className="text-black p-2 hover:bg-gray-300 duration-200 transition"
          onClick={() => {
            handleSortingByPrice(false);
          }}
        >
          <FontAwesomeIcon icon={faArrowDown} size="xl" />
        </button>
      </section>
    </aside>
  );
}

export default FilterNav;
