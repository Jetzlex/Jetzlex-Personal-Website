import Head from 'next/head';
import style from '../public/styles/modules/Home.module.css';
import appStyle from '../public/styles/modules/App.module.css';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

function Home({ HomeProps }) {
  return (
    <div>
      <Head>
        <title>Jetzlex | Home</title>
      </Head>
      <div className="max-w-4xl mx-auto">
        <div className="mt-5 md:mt-12 px-5 md:px-0">
          <div>
            <p className={style.homeTitle + ' text-5xl mb-2 font-extrabold'}>
              Jetzlex
            </p>
            <p className={style.homeDescription + ' desc text-lg max-w-xl'}>
              Full-Stack developer. I live in Turkey. 15 y/o high school
              student. I am a self-improvement ordinary person who continues to
              improve.
            </p>
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
              <div className="md:grid md:grid-cols-2 gap-5">
                <div className={appStyle.card_1 + ' w-full flex card_1 gap-5'}>
                  <div style={{ width: '350px' }}>
                    <Link href="/blog/1">
                      <div
                        className="h-full w-full rounded-lg blogCardImg"
                        style={{
                          backgroundImage:
                            'url(https://gblobscdn.gitbook.com/spaces%2F-MI33Czuy4Y_LUXwerXD%2Favatar-1601017486692.png?alt=media)',
                          backgroundSize: 'cover',
                        }}
                      >
                        <i className="fal fa-link relative top-0 left-0 right-0 bottom-0 text-white"></i>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link href="/blog/who-am-i">
                      <a className="text-xl line-clamp-1 font-semibold text-white hover:underline">
                        Who am i?
                      </a>
                    </Link>
                    <p className="text-md text-gray-300 line-clamp-3 ">
                      Kendimi size en açık şekilde tanıtmaya çalışacağım. Ben
                      Emirhan, 15 yaşındayım ve Türkiye'de...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .desc {
            font-weight: 300;
          }
          .card_1 {
            max-height: 140px;
            min-height: 140px;
            height: 140px;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
}

export default Home;
