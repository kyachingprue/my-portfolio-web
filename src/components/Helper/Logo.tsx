import Image from 'next/image';
import logoImage from '../../../public/logo.png'
import Link from 'next/link';

const Logo = () => {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div>
      <Link
        href="#home"
        onClick={handleScrollToTop}
        className="flex items-center space-x-1"
      >
        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-col">
          <Image
            src={logoImage}
            alt="Website Logo Image"
            className="text-white w-10 h-10 md:h-8 md:w-8"
          />
        </div>
        <h1 className="sm:text-xl hidden sm:block md:text-2xl text-blue-800 dark:text-blue-300 font-bold">
          WebDev
        </h1>
      </Link>
    </div>
  );
};

export default Logo;