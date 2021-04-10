import Head from 'next/head';
import Notification from '../components/Notification';
import React, { useState, useEffect } from 'react';
import appStyle from '../public/styles/modules/App.module.css';
import db from '../lib/firebase';
import { useRouter } from 'next/router';

function Contact() {
  const route = useRouter();
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [isSuccess, isSuccessSet] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [lengthError, setLengthError] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (buttonLoading == true) {
      document.querySelector(".submitbtn").innerHTML = "<i className='animate-spin fad fa-spinner-third'></i> <span className='italic'>Please wait...</span>"; 
    } else {
      document.querySelector(".submitbtn").innerHTML = "Submit"; 
    }
  }, [buttonLoading]);

  useEffect(
    (e) => {
      document.getElementById('message_length').innerHTML =
        Number(message.length - 1) + Number(1);
      if (message.length > 1999) {
        setMessage(message.substring(0, 1999));
        document.getElementById('message').value = message.substring(0, 1999);
      }
      if (message.length < 20) {
        setLengthError(true);
        setButtonLoading(false);
      } else {
        setLengthError(false);
      }
    },
    [message]
  );


  useEffect(() => {
    if (message.length > 20 && name.length > 0 && surname.length > 0 && email.length > 0) {
      db.collection('contacts')
        .doc()
        .set({ name: name, surname: surname, email: email, message: message })
        .then((a) => {
          setTimeout(() => {
            window.location.href = "/";
          }, 700);
          setButtonLoading(false);
          isSuccessSet(true);
        });
    } else {
      setClick(false);
    }
    setTimeout(() => {
      setButtonLoading(false);
    }, 1000);
  }, [click]);

  return (
    <div>
      <Head>
        <title>Contact Me | Jetzlex</title>
      </Head>
      <div className="max-w-4xl mx-auto">
        <div className="mt-5 md:mt-12 px-5 md:px-0">
          <p className="text-4xl font-extrabold text-white">Contact</p>
          <p className="text-lg italic font-small text-gray-300">
            You can make a job offer, ask questions and contact me about
            anything.
          </p>
          <br />
          <br />
          <div className="md:grid md:grid-cols-3 gap-5">
            <div className="col-span-2">
              <div className="gap-5 grid grid-cols-2">
                <div>
                  <p className="form-label">Name:</p>
                  <input
                    autoComplete="off"
                    className="form-input"
                    onChange={() =>
                      setName(document.getElementById('name').value)
                    }
                    id="name"
                    placeholder="Your name"
                  />
                  {click2 && !name && (
                    <p className="text-red-600 mt-2 italic">
                      Please enter a name.
                    </p>
                  )}
                </div>
                <div>
                  <p className="form-label">Surname:</p>
                  <input
                    autoComplete="off"
                    className="form-input"
                    onChange={() =>
                      setSurname(document.getElementById('surname').value)
                    }
                    id="surname"
                    placeholder="Your surname"
                  />
                  {click2 && !surname && (
                    <p className="text-red-600 mt-2 italic">
                      Please enter a surname.
                    </p>
                  )}
                </div>
                <div className="col-span-2">
                  <p className="form-label">E-Mail:</p>
                  <input
                    autoComplete="off"
                    className="form-input"
                    onChange={() =>
                      setEmail(document.getElementById('email').value)
                    }
                    id="email"
                    placeholder="Your E-mail"
                  />
                  {click2 && !email && (
                    <p className="text-red-600 mt-2 italic">
                      Please enter a e-mail.
                    </p>
                  )}
                </div>
                <div className="col-span-2">
                  <p className="form-label">Message:</p>
                  <textarea
                    rows="5"
                    className="form-input"
                    onChange={() =>
                      setMessage(document.getElementById('message').value)
                    }
                    id="message"
                    placeholder="Your message"
                  />
                  <p className="text-gray-500 text-right ml-auto text-sm">
                    <span id="message_length">0</span>/2000
                  </p>
                  {click2 && !message && (
                    <p className="text-red-600 -mt-5 mb-3 italic">
                      Please enter a message.
                    </p>
                  )}
                  {click2 && message && lengthError && (
                    <p className="text-red-600 -mt-5 mb-3 italic">
                      Minimum message length is 20.
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={() => {
                  setButtonLoading(true);
                  setClick2(true);
                  setClick(true);
                }}
                className="submitbtn mt-5 bg-blue-500 rounded-md py-3 px-4 text-white text-center hover:bg-blue-600 focus:outline-none"
              >
                Submit
              </button>
            </div>
            <div>
              <div className={appStyle.card_1 + ' flex card_1 items-center'}>
                <div>
                  <i
                    className="fab fa-discord"
                    style={{ fontSize: '40px' }}
                  ></i>
                </div>
                <div className="ml-3">
                  <p className="text-indigo-500 font-semibold text-xl mb-0">
                    Discord
                  </p>
                  <a
                    href="https://discord.gg/MHGt48VRrM"
                    target="_blank"
                    className="text-gray-400 mt-0 italic font-semibold text-sm hover:underline"
                  >
                    discord.gg/MHGt48VRrM
                  </a>
                </div>
              </div>
              <div
                className={appStyle.card_1 + ' flex card_1 items-center mt-4'}
              >
                <div>
                  <i
                    className="fab fa-telegram"
                    style={{ fontSize: '40px' }}
                  ></i>
                </div>
                <div className="ml-3">
                  <p className="text-indigo-500 font-semibold text-xl mb-0">
                    Telegram
                  </p>
                  <a
                    href="https://t.me/jetzlex"
                    target="_blank"
                    className="text-gray-400 mt-0 italic font-semibold text-sm hover:underline"
                  >
                    t.me/jetzlex
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSuccess && <Notification status="success" message="Thanks for contacting me." />}
    </div>
  );
}
export default Contact;
