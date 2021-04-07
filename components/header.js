import Link from 'next/link';
import style from '../public/styles/modules/header.module.css';

function Header() {
  return (
    <header className="bg-gray text-white py-4 px-5 shadow-md">
      <nav>
        <ul className="flex">
          <li className={style.navItem}>
            <Link href="/">
              <a className="font-opacity-100 hover:opacity-75">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="font-opacity-100 hover:opacity-75">About Me</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
