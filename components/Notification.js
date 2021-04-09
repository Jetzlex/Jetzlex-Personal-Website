import appStyle from '../public/styles/modules/App.module.css';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import 'animate.css';

function Notification({ status, message }) {
  const [notificationStatus, setNotificationStatus] = useState(true);
  useEffect(() => {
    if (notificationStatus == false) {
      document
        .querySelector('#notification')
        .classList.remove('animate__fadeInUp');
      document
        .querySelector('#notification')
        .classList.add('animate__fadeOutDown');
      setTimeout(() => {
        document.querySelector('#notification').remove();
      }, 1000);
    }
    if (notificationStatus == true) {
      setTimeout(() => {
        document
          .querySelector('#notification')
          .classList.remove('animate__fadeInUp');
        document
          .querySelector('#notification')
          .classList.add('animate__fadeOutDown');
        setTimeout(() => {
          document.querySelector('#notification').remove();
        }, 1000);
      }, 3000);
    }
  }, [notificationStatus]);
  return (
    <>
      <div
        id="notification"
        className="animate__animated animate__faster animate__fadeInUp mx-auto bottom-0 fixed max-w-full p-6 w-full"
      >
        {status == 'success' && (
          <div className="bg-green-600 rounded-lg py-5 px-6 w-full">
            <div className="flex items-center">
              <div className="flex items-center">
                <i className="fal fa-check-circle text-2xl"></i>
                <p className="ml-3">{message}</p>
              </div>
              <div className="ml-auto float-right text-right">
                <a
                  href="#!"
                  onClick={() => setNotificationStatus(false)}
                  className="bg-green-700 bg-opacity-75 py-2 px-4 rounded-lg"
                >
                  <i className="fal fa-times"></i>
                </a>
              </div>
            </div>
          </div>
        )}
        {status == 'error' && (
          <div className="bg-red-600 rounded-lg py-5 px-6 w-full">
            <div className="flex items-center">
              <div className="flex items-center">
                <i className="fal fa-times-circle text-2xl"></i>
                <p className="ml-3">{message}</p>
              </div>
              <div className="ml-auto float-right text-right">
                <a
                  href="#!"
                  onClick={() => setNotificationStatus(false)}
                  className="bg-red-700 bg-opacity-75 py-2 px-4 rounded-lg"
                >
                  <i className="fal fa-times"></i>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <style jsx>
        {`
          .notificationSuccess {
            background-color: rgb(95 97 197);
          }
        `}
      </style>
    </>
  );
}

export default Notification;
