import Avatar from "./Avatar";
import { ViewGridIcon } from "@heroicons/react/solid";

const Header: React.FC = () => {
  return (
    <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
      <div className='flex space-x-4 items-center'>
        <a className='link'>About</a>
        <a className='link'>Store</a>
      </div>
      <div className='flex space-x-4 items-center'>
        <a className='link'>Gmail</a>
        <a className='link'>Images</a>
        {/*  Icon */}
        <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />

        <Avatar url={"http://coaching.papareact.com/ai9"} />
      </div>
    </header>
  );
};

export default Header;
