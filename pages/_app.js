import '../public/styles/global.css';
import Header from '../components/header';
import useSWR from 'swr';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';
import { Auth0Provider } from '@auth0/auth0-react';
import { useAuth0 } from '@auth0/auth0-react';
import Footer from '../components/footer';

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function MyApp({ Component, pageProps }) {
  const { loginWithPopup, isLoading, isAuthenticated, user } = useAuth0();
  return (
    <Auth0Provider
      domain="dev-5vj9kuhg.us.auth0.com"
      clientId="dhzLwDeOsnYrW56sluiAXfbqdD2tTsAg"
      redirectUri="http://localhost"
    >
      <Head>
        <link
          href="https://pro.fontawesome.com/releases/v5.13.1/css/all.css"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        ></link>
        <link
          href="https://rawgit.com/ellekasai/twemoji-awesome/gh-pages/twemoji-awesome.css"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Auth0Provider>
  );
}

export default MyApp;
