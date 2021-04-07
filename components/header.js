import Link from 'next/link';
import style from '../public/styles/modules/header.module.css';

function Header() {
  return (
    <header className="bg-gray text-white py-4 px-5 shadow-md flex items-center">
      <div className="max-w-7xl flex items-center mx-auto w-full">
        <nav>
          <ul className="flex">
            <li className={style.navItem}>
              <Link href="/">
                <a className="font-opacity-100 hover:opacity-75">Home</a>
              </Link>
            </li>
            <li className={style.navItem}>
              <Link href="/about">
                <a className="font-opacity-100 hover:opacity-75">About Me</a>
              </Link>
            </li>
            <li className={style.navItem}>
              <Link href="/blog">
                <a className="font-opacity-100 hover:opacity-75">Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div class="ml-auto text-right">
          <Link href="/give-offer">
            <a className="bg-blue-500 hover:bg-blue-600 hover:border-blue-500 focus:bg-blue-700 focus:border-blue-600 border border-blue-400 rounded-md py-2 px-3">
              Give Offer
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
