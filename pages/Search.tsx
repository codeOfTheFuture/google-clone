import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import SearchPageHeader from "../components/SearchPageHeader";

import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

interface SearchProps {
  results: GetServerSideProps
}

const Search: NextPage<SearchProps> = ({ results }) => {
  const router = useRouter(),
    { } = results

  console.log(results)
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel='icon' href='/google-favicon.ico' />
      </Head>

      <SearchPageHeader term={router.query.term} />

      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const startIndex = context.query.start || '0';

  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  ).then((response) => response.json());


  console.log("data>>>>>", data)
  return {
    props: {
      results: data
    }
  }
}
