import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { products } from "../../products/data";
import { useEffect, useRef, useState } from "react";
import SearchCard from "./SearchCard";
import Link from "next/link";

function SearchBar() {
  const searchResults = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const searchBtn = useRef<HTMLAnchorElement>(null);
  const [search, setSearch] = useState<any[]>([]);
  useEffect(() => {
    if (input.current) {
      input.current.addEventListener("input", () => {
        if (input.current && searchResults.current) {
          const inputValue = input.current.value.toLowerCase();
          const filteredProducts = products.filter((ele) => {
            return ele.productName.toLowerCase().includes(inputValue);
          });
          setSearch(
            filteredProducts.map((ele) => {
              return [ele.id, ele.productName];
            })
          );
          if (inputValue !== "") {
            searchResults.current.classList.remove("hidden");
          } else {
            searchResults.current.classList.add("hidden");
          }
        }
      });
    }
  }, []);
  return (
    <section className="relative flex flex-row items-center justify-center py-1 search">
      <input
        type="search"
        placeholder="Search here..."
        className="rounded-md	p-2 text-lg w-64 max-w-full focus:placeholder:opacity-0 text-black outline-yellow-400"
        height={40}
        id="search"
        ref={input}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            searchBtn.current?.click();
            if (input.current) {
              input.current.value = "";
              searchResults.current?.classList.add("hidden");
            }
          }
        }}
      />
      <label htmlFor="search" className="hidden">
        search through products
      </label>
      <Link
        className="bg-yellow-400 rounded-e-md h-11 w-10 -translate-x-2 hover:bg-yellow-500 items-center flex justify-center"
        href={`/search/${input.current?.value}`}
        type="button"
        ref={searchBtn}
        aria-label="Search among products here"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} size="xs" />
      </Link>
      <div
        className="bg-white flex flex-col absolute top-full w-full hidden overflow-hidden"
        ref={searchResults}
      >
        {search.map((ele) => (
          <SearchCard key={ele} name={ele[1]} id={ele[0]} />
        ))}
      </div>
    </section>
  );
}

export default SearchBar;
