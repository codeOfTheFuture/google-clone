/* eslint-disable @next/next/no-img-element */

interface AvatarProps {
  url: string;
  logOut: () => Promise<void>;
}

const Avatar: React.FC<AvatarProps> = ({ url, logOut }) => {
  console.log(url);
  return (
    <img
      className='h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110'
      src={url}
      alt='Profile Pic'
      onClick={() => logOut()}
    />
  );
};

export default Avatar;
