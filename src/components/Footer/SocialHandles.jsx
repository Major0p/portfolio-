import React from "react";
import { FaTwitterSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import useTheme from "../Context/Theme";

export default function SocialHandles() {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  let color = "";
  themeMode == "mode-light" ? (color = "black") : (color = "aliceblue");

  return (
    <div>
      <div className="flex gap-3">
        <a href="#" target="">
          <div className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:text-blue-500 hover:scale-110 duration-300 ...">
            <FaInstagramSquare size={20} color={color} />
          </div>
        </a>
        <a href="#" target="">
          <div className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:text-blue-500 hover:scale-110 duration-300 ...">
            <FaTwitterSquare size={20} color={color} />
          </div>
        </a>
        <a href="http://www.linkedin.com/in/shubham-sharma-49493b1b5" target="_blank">
          <div className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:text-blue-500 hover:scale-110 duration-300 ...">
            <FaLinkedin size={20} color={color} />
          </div>
        </a>
      </div>
    </div>
  );
}
