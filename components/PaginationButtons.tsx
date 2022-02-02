import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const PaginationButtons = () => {
  const [page, setPage] = useState(1);

  const router = useRouter(),
    startIndex = Number(router.query.start) || 0;

  return (
    <div className='flex w-full md:max-w-lg items-center justify-between text-blue-700 mb-10'>
      <Link
        href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        passHref
      >
        <div
          className={`paginationBtn ${startIndex < 10 && "invisible"}`}
          onClick={() => setPage((prevState: number) => prevState - 1)}
        >
          <ChevronLeftIcon className='h-5' />
          <p>Previous</p>
        </div>
      </Link>

      <div>{<p>{page}</p>}</div>

      <Link
        href={`/search?term=${router.query.term}&start=${startIndex + 10}`}
        passHref
      >
        <div
          className='paginationBtn'
          onClick={() => setPage((prevState: number) => prevState + 1)}
        >
          <ChevronRightIcon className='h-5' />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
};

export default PaginationButtons;
