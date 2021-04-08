import Head from 'next/head';

function About() {
  return (
    <div>
      <Head>
        <title>Blog | Jetzlex</title>
      </Head>
      <div className="max-w-4xl mx-auto">
        <div className="mt-5 md:mt-12 px-5 md:px-0">
          <p className="text-4xl font-extrabold text-white">Blogs</p>
          <p className="text-lg italic font-small text-gray-300">
            My blog posts will listed here.
          </p>
          <div className="border-b border-gray-300 mt-5 mb-6 w-20"></div>
          <p className="italic text-gray-400 mt-3 text-lg">
            <i class="twa twa-ghost"></i> No blog posts have been posted yet ... Sad tram!
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
