import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import SearchPageHeader from "../components/SearchPageHeader";

import Response from '../Response.js';
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

interface SearchProps {
  results: GetServerSideProps
}

const Search: NextPage<SearchProps> = ({ results }) => {
  const router = useRouter();


  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <SearchPageHeader />

      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const useDummyData = true;
  const startIndex = context.query.start || '0';

  const data = useDummyData ? Response : await fetch(
    ``
  ).then((response) => response.json());

  // const data = await response.json();

  return {
    props: {
      results: data
    }
  }
}
