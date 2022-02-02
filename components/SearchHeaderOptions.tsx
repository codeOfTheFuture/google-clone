import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import SearchHeaderOption from "./SearchHeaderOption";

const SearchHeaderOptions: React.FC = () => {
  return (
    <div className='flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b'>
      <div className='flex space-x-6'>
        <SearchHeaderOption Icon={SearchIcon} title='All' selected={true} />
        <SearchHeaderOption
          Icon={PhotographIcon}
          title='Images'
          selected={false}
        />
        <SearchHeaderOption Icon={PlayIcon} title='Videos' selected={false} />
        <SearchHeaderOption
          Icon={NewspaperIcon}
          title='News'
          selected={false}
        />
        <SearchHeaderOption Icon={MapIcon} title='Maps' selected={false} />
        <SearchHeaderOption
          Icon={DotsVerticalIcon}
          title='More'
          selected={false}
        />
      </div>
      <div className='flex space-x-4'>
        <a className='link'>Settings</a>
        <a className='link'>Tools</a>
      </div>
    </div>
  );
};

export default SearchHeaderOptions;
