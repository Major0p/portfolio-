import { React, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SocialHandles from '../Footer/SocialHandles'

export default function Home() {
  const GoDownCmd = 1;
  const HomeCom = useRef(null);

  const hndlClk = (e, cmd) => {
    switch (cmd) {
      case GoDownCmd:
        scrollTo(e);
        break;
      default:
        break;
    }
  };

  
  const scrollTo = (e) => {
    console.log(themeMode);
    console.log(e.currentTarget);
  };

  return (
    <div
      className="min-h-screen max-h-full h-full w-full pb-3"
      ref={HomeCom}
    >
      <div className="flex justify-center min-h-screen max-h-full items-center">
        <div className="h-full">
          <div>
            <div className="text-5xl font-bold text-center">
              HEY, I'M SHUBHAM SHARMA
            </div>
            <div className="text-1xl text-center pt-5 px-3">
              A Result-Oriented Web Developer building and managing Websites and
              Web
            </div>
            <div className="text-1xl text-center pt-1 px-3">
              Applications that leads to the success of the overall product
            </div>
          </div>
        </div>
      </div>

      {/* go down */}
      <div className="absolute bottom-5 right-[50%]">
        <div className="flex justify-center">
          <div
            className="px-2 py-2 text-white bg-voilet-600"
            onClick={(e) => hndlClk(e, GoDownCmd)}
          >
            <IoIosArrowDown size={30} color="white" className="animate-bounce"/>
          </div>
        </div>
      </div>

      {/* for page side links */}
      <div className="absolute bottom-1 right-5 px-5 py-5">
      <SocialHandles/>
      </div>
    </div>
  );
}
