import Head from 'next/head';
import Image from 'next/image';
import style from '../public/styles/modules/Home.module.css';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Jetzlex | Home</title>
      </Head>
      <div className="max-w-4xl mx-auto">
        <div className="mt-5 md:mt-16">
          <div className="md:grid md:grid-cols-12 gap-5">
            <div className="col-span-9">
              <p className={style.homeTitle + ' text-4xl test'}>Emirhan Aksu</p>
              <p className={style.homeDescription + ' text-lg'}>
                Full-Stack developer. I live in Turkey. 15 y/o high school
                student. I am a self-improvement ordinary person who continues
                to improve.
              </p>
            </div>
            <div className="col-span-2">
              <Image
                src="/images/me.png"
                height={700}
                width={700}
                alt="Emirhan Aksu"
                className="rounded-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
