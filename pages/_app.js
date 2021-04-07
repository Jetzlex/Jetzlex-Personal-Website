import '../public/styles/global.css';
import Header from '../components/header';
import useSWR from 'swr';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://pro.fontawesome.com/releases/v5.13.1/css/all.css"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        ></link>
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
