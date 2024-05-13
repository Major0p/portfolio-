import React from "react";
import {sendData} from './ContactUtiles'
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import useTheme from '../Context/Theme'

export default function Contact() {

  const {themeMode,lightTheme,darkTheme} = useTheme();
  let bgColor = '';
  let txtColor = '';
  if(themeMode == 'mode-light'){
    bgColor = 'white';
    txtColor = 'black';
  }
  else{
    bgColor = 'rgb(28, 27, 27)';
    txtColor = 'white';
  }

  const form = useRef(null);

  const submitForm = (e)=>{
    e.preventDefault();

    emailjs
      .sendForm('service_l7oe6eh', 'template_da0czxo', form.current, {
        publicKey: 'hVk-6gqMuuezyswQN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={submitForm}>
    <div className="min-h-screen h-full w-full py-3 pt-12">
      <div className="">
        <div>
          <div className="text-5xl font-semibold px-3 text-center">
            Contact me
          </div>
          <div className="flex justify-center">
            <div className="w-1/2">
              <div className="py-3">
                <span className="px-2 py-1">
                  Full name<sup>*</sup>
                </span>
                <div className="">
                  <input
                    type="text"
                    placeholder="Enter your full name..."
                    className="px-3 w-full h-11 rounded-xl border-0 border-transparent text-black"
                    style={{backgroundColor:bgColor,color:txtColor}}
                    name="user_name"
                  />
                </div>
              </div>
              <div className="py-3">
                <span className="px-2 py-1">
                  Email<sup>*</sup>
                </span>
                <div className="">
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    className="px-3 w-full h-11 rounded-xl border-0 border-transparent text-black"
                    style={{backgroundColor:bgColor,color:txtColor}}
                    name="user_email"
                  />
                </div>
              </div>
              <div className="py-3">
                <span className="px-2 py-1">
                  Message<sup>*</sup>
                </span>
                <div className="">
                  <input
                    type="text"
                    placeholder="Enter your message"
                    className="px-3 w-full h-20 rounded-2xl border-0 border-transparent text-black"
                    style={{backgroundColor:bgColor,color:txtColor}}
                    name="message"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-3 flex justify-center">
            <input
              type="submit"
              className="h-10  text-white bg-blue-800 px-2 py-2 border-0 rounded-xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 duration-300 ..."
              value='Send'
            >
            </input>
          </div>
        </div>
      </div>
    </div>
    </form>
  );
}
