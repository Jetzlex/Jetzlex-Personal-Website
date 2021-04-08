import Link from 'next/link';
import style from '../public/styles/modules/App.module.css';

function Footer() {
  return (
    <footer className="mt-20 text-gray-300 text-center mb-20 pt-20">
        <a href="#!" className="hover:underline">
            &copy; 2021 - Designed and developed by Jetzlex
        </a>
    </footer>
  );
}

export default Footer;
