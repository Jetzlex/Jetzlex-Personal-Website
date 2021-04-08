import Head from 'next/head';
import style from '../public/styles/modules/Home.module.css';
import appStyle from '../public/styles/modules/App.module.css';
import BlogList from '../components/home/blogList';
//import fetch from 'isomorphic-unfetch';
//import Link from 'next/link';
import Technologies from '../components/home/technologies';

function Home({ HomeProps }) {
  return (
    <div>
      <Head>
        <title>Jetzlex | Home</title>
      </Head>
      <div className="max-w-4xl mx-auto">
        <div className="mt-5 md:mt-12 px-5 md:px-0">
          <div>
            <div class="grid grid-cols-10 items-center">
              <div class="col-span-8">
                <p
                  className={style.homeTitle + ' text-5xl mb-2 font-extrabold'}
                >
                  Jetzlex
                </p>
                <p className={style.homeDescription + ' desc text-lg'}>
                  Full-Stack developer. I live in Turkey. 15 y/o high school
                  student. I am a self-improvement ordinary person who continues
                  to improve.
                </p>
              </div>
              <div className="col-span-2">
                <img
                  className="rounded-full shadow-lg w-4/5"
                  src="/images/me.jpg"
                />
              </div>
            </div>
            <div className="flex">
              <button className={appStyle.button + ' mt-4 mr-2'}>
                <a href="https://instagram.com/emirhann2xl" target="_blank">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </button>
              <button className={appStyle.button + ' mt-4 mr-2'}>
                <a href="https://twitter.com/jetzlex_" target="_blank">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </button>
              <button className={appStyle.button + ' mt-4 mr-2'}>
                <a href="https://discord.gg/xbxkFf7KPV" target="_blank">
                  <i className="fab fa-discord"></i> Discord
                </a>
              </button>
              <button className={appStyle.button + ' mt-4 mr-2'}>
                <a href="https://github.com/Jetzlex" target="_blank">
                  <i className="fab fa-github"></i> Github
                </a>
              </button>
            </div>
            <div className="mt-16">
              <BlogList />
              <Technologies />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
