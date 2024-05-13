import React from "react";

export default function About() {
  return (
    <div className="h-full w-full py-3 pt-12">
      <div className="flex justify-center">
        <div className="w-3/4">
          <div className="font-bold text-3xl  py-3">Get to know me!</div>
          <p className="py-3">
            I'm a Frontend Focused Web Developer building and managing the
            Front-end of Websites and Web Applications that leads to the success
            of the overall product. Check out some of my work in the Projects
            section.
          </p>
          <p className="py-3">
            I also like sharing content related to the stuff that I have learned
            over the years in Web Development so it can help other people of the
            Dev Community. Feel free to Connect or Follow me on my 
            &nbsp;
            <a href="http://www.linkedin.com/in/shubham-sharma-49493b1b5" target="_blank" className="font-bold text-blue-800">
              LinkedIn 
            </a>
            &nbsp;
            and 
            &nbsp;
            <a href="#" className="font-bold text-blue-800">
              Instagram 
            </a>
            &nbsp;
            where I post useful content related to Web Development and
            Programming
          </p>
          <p className="py-3">
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>
      </div>
    </div>
  );
}
