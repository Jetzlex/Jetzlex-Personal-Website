import Link from 'next/link';
import style from '../public/styles/modules/header.module.css';

function Header() {
  return (
    <header className="mt-16 text-white py-4 px-5 shadow-md flex items-center">
      <div className="max-w-4xl flex items-center mx-auto w-full">
        <nav>
          <ul className="flex">
            <li className={style.navItem}>
              <Link href="/">
                <a className="font-opacity-100 hover:opacity-75">Home</a>
              </Link>
            </li>
            <li className={style.navItem}>
              <Link href="/contact">
                <a className="font-opacity-100 hover:opacity-75">Contact</a>
              </Link>
            </li>
            <li className={style.navItem}>
              <Link href="/about">
                <a className="font-opacity-100 hover:opacity-75">About</a>
              </Link>
            </li>
            <li className={style.navItem}>
              <Link href="/blog">
                <a className="font-opacity-100 hover:opacity-75">Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
