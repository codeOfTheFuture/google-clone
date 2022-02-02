import Link from "next/link";

interface SearchResultProps {
  result: any;
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  const { link, formattedUrl, title, snippet } = result;

  return (
    <div className='max-w-xl mb-8'>
      <div className='group'>
        <a href={link} className='text-sm max-w-xs'>
          {formattedUrl}
        </a>
        <a href={link}>
          <h2 className='truncate text-xl text-blue-800 font-medium group-hover:underline'>
            {title}
          </h2>
        </a>
      </div>
      <p className='line-clamp-2'>{snippet}</p>
    </div>
  );
};

export default SearchResult;
