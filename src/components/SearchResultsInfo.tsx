import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};

export default function SearchResultsInfo({ total, city }: Props) {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg::items-center lg:flex-row">
      <span>
        {total} Restaurants found in {city}
        <Link
          to="/"
          className="text-sm ml-1 font-semibold underline cursor-pointer text-blue-500"
        >
          Change location
        </Link>
      </span>
    </div>
  );
}
