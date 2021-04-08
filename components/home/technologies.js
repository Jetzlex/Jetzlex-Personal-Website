import appStyle from '../../public/styles/modules/App.module.css';
import Link from 'next/link';

function technologies() {
  return (
    <>
      <div className="mt-16"></div>
      <p className="font-bold text-2xl mt-5 text-white mb-5">
        <i className="fa mr-2 fa-stars"></i> Technologies I use
      </p>
      <div className="md:grid md:grid-cols-4 gap-5 mb-10">
        <div className="flex items-center space-x-2">
          <div>
            <img
              draggable="false"
              src="/images/Technologies/javascript.png"
              className="w-7 h-7"
            ></img>
          </div>
          <div>
            <p className="text-white">Javascript</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <img
              draggable="false"
              src="/images/Technologies/php.png"
              className="w-7 h-7"
            ></img>
          </div>
          <div>
            <p className="text-white">PHP</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <img
              draggable="false"
              src="/images/Technologies/html.png"
              className="w-7 h-7"
            ></img>
          </div>
          <div>
            <p className="text-white">HTML</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <img
              draggable="false"
              src="/images/Technologies/css.png"
              className="w-7 h-7"
            ></img>
          </div>
          <div>
            <p className="text-white">CSS</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <img
              draggable="false"
              src="/images/Technologies/nextjs.png"
              className="w-7 h-7"
            ></img>
          </div>
          <div>
            <p className="text-white">Next.js</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <img
              draggable="false"
              src="/images/Technologies/tailwind.png"
              className="w-7 h-7"
            ></img>
          </div>
          <div>
            <p className="text-white">TailwindCSS</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <img
              draggable="false"
              src="/images/Technologies/mongodb.png"
              className="w-7 h-7"
            ></img>
          </div>
          <div>
            <p className="text-white">MongoDB</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <img
              draggable="false"
              src="/images/Technologies/nodejs.png"
              className="w-7 h-7"
            ></img>
          </div>
          <div>
            <p className="text-white">Node.js</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <img
              draggable="false"
              src="/images/Technologies/react.png"
              className="w-7 h-7"
            ></img>
          </div>
          <div>
            <p className="text-white">React</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <img
              draggable="false"
              src="/images/Technologies/bootstrap.png"
              className="w-7 h-7"
            ></img>
          </div>
          <div>
            <p className="text-white">Bootstrap</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <img
              draggable="false"
              src="/images/Technologies/bulma.png"
              className="w-7 h-7"
            ></img>
          </div>
          <div>
            <p className="text-white">Bulma.io</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <img
              draggable="false"
              src="/images/Technologies/electron.png"
              className="w-7 h-7"
            ></img>
          </div>
          <div>
            <p className="text-white">Electron.js</p>
          </div>
        </div>
      </div>
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

export default technologies;
