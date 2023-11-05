import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";

type commentProps = {
  commentData: {
    id: number;
    image: StaticImageData;
    name: string;
    comment: string;
    job: string;
  };
};

function Comments({ commentData }: commentProps) {
  return (
    <section className="customerReview py-4 px-16 flex justify-center">
      <section className="max-w-6xl flex flex-col items-center justify-center space-y-16">
        <section className="comment p-10">
          <p>
            <FontAwesomeIcon icon={faQuoteLeft} size="lg" />
          </p>
          <p>{commentData.comment}</p>
        </section>
        <section className="w-full flex flex-row justify-start items-center space-x-6">
          <div className="commenter">
            <Image src={commentData.image} alt={`${commentData.name} image`} />
          </div>
          <div className="flex flex-col justify-end items-start h-full py-4">
            <h1 className="font-extrabold text-xl">{commentData.name}</h1>
            <p
              className="font-bold text-yellow-300"
              style={{ fontSize: "1rem" }}
            >
              {commentData.job}
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Comments;
