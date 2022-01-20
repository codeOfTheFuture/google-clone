import SearchResult from "./SearchResult";

interface SearchResultsProps {
  results: any;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  const {
    searchInformation: { formattedTotalResults, formattedSearchTime },
  } = results;

  return (
    <div className='mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
      <p className='text-gray-600 mb-5'>
        About {formattedTotalResults} results ({formattedSearchTime} seconds)
      </p>

      {results.items?.map((result: any) => (
        <SearchResult result={result} key={result.link} />
      ))}
    </div>
  );
};

export default SearchResults;
