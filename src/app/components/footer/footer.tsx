import Link from "next/link";
import "./footer.css";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { socialMedia } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#3a4468" }}>
      <div className="mx-auto footer text-white">
        <div className="flex md:flex-row sm:flex-col space-x-4 items-center justify-between sm:w-full">
          <section className="flex flex-col space-y-4 py-10">
            <Link href={"/"}>
              <h1 className="font-bold text-3xl my-2">Minics</h1>
            </Link>
            <h1 className="flex flex-row space-x-2 items-center">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Address</span>
            </h1>
            <h1 className="flex flex-row space-x-2 items-center">
              <FontAwesomeIcon icon={faPhone} size="sm" />
              <span>+01 1234567890</span>
            </h1>
            <h1 className="flex flex-row space-x-2 items-center">
              <FontAwesomeIcon icon={faEnvelope} size="sm" />
              <span> demo@gmail.com</span>
            </h1>
          </section>
          <section style={{ maxWidth: "12rem" }}>
            <h1 className="text-2xl my-2">Information</h1>
            <p>
              pEligendi sunt, provident, debitis nemo, facilis cupiditate velit
              libero dolorum aperiam enim nulla iste maxime corrupti ad illo
              libero minus.
            </p>
          </section>
          <section className="flex flex-col space-y-1 items-start justify-center">
            <h1 className="text-2xl my-2">Useful Link</h1>
            <Link className="hover:text-orange-300" href={"/"}>
              Home
            </Link>
            <Link className="hover:text-orange-300" href={"/about"}>
              About
            </Link>
            <Link className="hover:text-orange-300" href={"/products"}>
              Products
            </Link>
            <Link className="hover:text-orange-300" href={"/whyUs"}>
              Why Us
            </Link>
            <Link className="hover:text-orange-300" href={"/testimonial"}>
              Testimonial
            </Link>
          </section>
          <section className="flex flex-col space-y-4 items-start justify-center">
            <h1 className="text-2xl">Newsletter</h1>
            <input
              type="search"
              id={"newSettler"}
              placeholder="Search here..."
              className="rounded-sm	p-2 px-4 text-md w-52 text-black outline-blue-400"
              height={40}
            />
            <label htmlFor="newSettler">new settler email input</label>
            <button className="p-2 text-white h-11 rounded-md bg-yellow-500 hover:bg-yellow-400 w-3/4">
              Subscribe
            </button>
            <section className="flex flex-row space-x-6">
              {socialMedia.map((ele) => (
                <Link href={`${ele.link}`} target="_blank" key={ele.id}>
                  <FontAwesomeIcon icon={ele.icon} key={ele.id} size="lg" />
                </Link>
              ))}
            </section>
          </section>
        </div>
        <div className="border-white flex py-4 justify-center items-center copyRights">
          <h1>
            © {new Date().getFullYear()} All Rights Reserved By Company Name
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
