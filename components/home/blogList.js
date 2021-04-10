import appStyle from '../../public/styles/modules/App.module.css';
import Link from 'next/link';

function BlogList() {
  return (
    <>
      <p className="font-bold text-2xl mt-5 text-white mb-5">
        <i className="fal mr-2 fa-newspaper"></i> Blogs
      </p>
      <div className="bg-red-600 rounded-md py-3 px-4 text-white italic">
        <i className="fa fa-exclamation-triangle"></i> No blogs here.
      </div>
      {/*<div className="md:grid md:grid-cols-2 gap-5">
        <div className={appStyle.card_1 + ' w-full flex card_1 gap-5'}>
          <div style={{ width: '350px' }}>
            <Link href="/blog/1">
              <div
                className="cursor-pointer h-full w-full rounded-lg blogCardImg"
                style={{
                  backgroundImage:
                    'url(https://gblobscdn.gitbook.com/spaces%2F-MI33Czuy4Y_LUXwerXD%2Favatar-1601017486692.png?alt=media)',
                  backgroundSize: 'cover',
                }}
              >
                <i className="cursor-pointer fal fa-link relative top-0 left-0 right-0 bottom-0 text-white"></i>
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
              Kendimi size en açık şekilde tanıtmaya çalışacağım. Ben Emirhan,
              15 yaşındayım ve Türkiye'de...
            </p>
          </div>
        </div>
              </div>*/}
      <style jsx>
        {`
          .card_1 {
            max-height: 140px;
            min-height: 140px;
            height: 140px;
            overflow: hidden;
          }
        `}
      </style>
    </>
  );
}

export default BlogList;
