import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useAuth } from "../context/AuthContext";
import search from "../helpers/search";
import Avatar from "./Avatar";

const SearchPageHeader = () => {
  const router = useRouter(),
    searchInputRef = useRef<HTMLInputElement>(null),
    { user, logOut } = useAuth();

  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
        <Image
          src='/images/google-logo.png'
          height={40}
          width={120}
          className='cursor-pointer'
          alt='Google Logo'
          onClick={() => router.push("/")}
        />

        <form
          className='flex flex-grow items-center px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl'
          onSubmit={(e) => search(e, searchInputRef, router)}
        >
          <input
            ref={searchInputRef}
            className='flex-grow w-full focus:outline-none'
            type='text'
          />
          <XIcon
            className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
            onClick={() => (searchInputRef.current!.value = "")}
          />
          <MicrophoneIcon className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />
          <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
        </form>
        {user && (
          <Avatar url={user.photoURL!} className='ml-auto' logOut={logOut} />
        )}
      </div>
    </header>
  );
};

export default SearchPageHeader;
