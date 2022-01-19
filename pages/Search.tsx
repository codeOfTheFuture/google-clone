import Head from 'next/head';
import { NextPage } from "next";
import SearchPageHeader from '../components/SearchPageHeader';

const Search: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Search Results</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <SearchPageHeader />

      {/* Search Results */}
    </div>
  )
}

export default Search;
