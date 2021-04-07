import Head from 'next/head';
import Header from './header';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Jetzlex | Emirhan Aksu</title>
      </Head>
      <Header/>
      {children}
    </div>
  );
}

export default Layout;
