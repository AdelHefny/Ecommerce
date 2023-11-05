import Image from "next/image";
import Link from "next/link";
import "../service.css";
import aboutImage from "../../../images/about-img.jpg";

function AboutUs() {
  return (
    <section
      className="text-white flex md:flex-row sm:flex-col items-center justify-end"
      style={{ backgroundColor: "#3a4468" }}
    >
      <section className="flex flex-col serviceContent space-y-8 mx-auto py-8">
        <h1 className="text-3xl font-extrabold">We Provide the best for you</h1>
        <p className="leading-6">
          Totam architecto rem beatae veniam, cum officiis adipisci soluta
          perspiciatis ipsa, expedita maiores quae accusantium. Animi veniam
          aperiam, necessitatibus mollitia ipsum id optio ipsa odio ab facilis
          sit labore officia! Repellat expedita, deserunt eum soluta rem culpa.
          Aut, necessitatibus cumque. Voluptas consequuntur vitae aperiam animi
          sint earum, ex unde cupiditate, molestias dolore quos quas possimus
          eveniet facilis magnam? Vero, dicta.
        </p>
        <Link
          href={`/about`}
          type="button"
          className="bg-yellow-400 w-fit text-white rounded-md px-10 py-2 border-2 border-yellow-400 hover:bg-transparent hover:text-yellow-400 transition duration-300"
        >
          Read More
        </Link>
      </section>
      <div className="aboutImage">
        <Image src={aboutImage} alt="About Inage" />
      </div>
    </section>
  );
}

export default AboutUs;
