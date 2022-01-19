import { NextRouter } from "next/router";
import { FormEvent, RefObject } from "react";

type SearchFunc = (
  e: FormEvent<Element>,
  searchInputRef: RefObject<HTMLInputElement>,
  router: NextRouter
) => void;

const search: SearchFunc = (e, searchInputRef, router) => {
  e.preventDefault();

  const term = searchInputRef.current?.value;

  if (!term) return;

  router.push(`/search?term=${term}`);
};

export default search;
