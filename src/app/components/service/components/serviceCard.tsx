import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

type serviceProps = {
  serviceData: {
    id: number;
    image: IconDefinition;
    title: string;
    description: string;
  };
};

function ServceCard({ serviceData }: serviceProps) {
  return (
    <section className="flex flex-col md:max-w-sm sm:w-11/12 space-y-2 items-center justify-center p-6 hover:text-yellow-400 transition duration-300 serviceCard">
      <FontAwesomeIcon icon={serviceData.image} size="3x" />
      <h1 className="text-black text-center font-extrabold">
        {serviceData.title}
      </h1>
      <p className="text-black text-center">{serviceData.description}</p>
    </section>
  );
}

export default ServceCard;
