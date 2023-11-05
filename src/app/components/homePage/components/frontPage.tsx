import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { productData } from "../../products/CartProducts";
import "../homePage.css";
type frontPageProps = {
  frontProduct: productData;
};

function ProductPreview({ frontProduct }: frontPageProps) {
  return (
    <div className="flex flex-row flex-wrap justify-around items-center space-y-6 myContainer">
      <section className="md:w-96 sm:w-full space-y-4">
        <h1 style={{ color: "#3a4468", fontSize: "2.5rem", fontWeight: "900" }}>
          Welcome to our shop
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam
          velit saepe dolorem deserunt quo quidem ad optio.
        </p>
        <Link
          href={`/products/${frontProduct.id}`}
          type="button"
          className="bg-yellow-400 text-white rounded-md px-10 py-2 border-2 border-yellow-400 hover:bg-transparent hover:text-yellow-400 transition duration-300"
        >
          Read More
        </Link>
      </section>
      <Image
        src={frontProduct.image}
        alt={`front page ${frontProduct.productName}`}
      />
    </div>
  );
}

export default ProductPreview;
