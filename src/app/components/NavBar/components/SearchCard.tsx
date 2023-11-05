import Link from "next/link";

type SearchCardProps = {
  id: number;
  name: string;
};

function SearchCard({ id, name }: SearchCardProps) {
  return (
    <Link
      href={`/products/${id}`}
      className="flex flex-row items-center text-black text-xl hover:bg-slate-200 cursor-pointer p-1"
    >
      <p>{name}</p>
    </Link>
  );
}

export default SearchCard;
