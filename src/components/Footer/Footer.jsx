import React from "react";
import SocialHandles from './SocialHandles'

export default function Footer() {
  const ballColor = "voilet";
  return (
    <div className="h-full w-full py-3">
      <div className="flex justify-center">
        <div className=" w-3/4">
          <div className="py-5">
            <div className="flex justify-between">
              <div className="w-1/2">
                <div className="text-2xl font-bold">SHUBHAM SHARMA</div>
                <div className="py-5 text-1xl">
                  A Frontend focused Web Developer building the Frontend of
                  Websites and Web Applications that leads to the success of the
                  overall product
                </div>
              </div>
              <div className="w-1/2 flex flex-row-reverse">
                <div>
                  <div className="text-2xl font-bold">SOCIAL</div>
                  <div className="text-1xl py-5">
                    <SocialHandles />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-1 bg-white w-full"></div>
          <div className="py-3 text-center">
            Copyright 2024. Made by <a href="#">SHUBHAM SHARMA</a>
          </div>
        </div>
      </div>
    </div>
  );
}
