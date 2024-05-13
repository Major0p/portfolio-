import { React, useRef, useState, Context } from "react";
import {
  darkModeCmd,
  homeCmd,
  aboutCmd,
  projectCmd,
  contactCmd,
  resumeCmd,
  menuCmd,
} from "./NavbarUtiles";
import { MdDarkMode, MdDashboard } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import useTheme from "../Context/Theme";

export default function Navbar(prop) {
  //------- div ref
  const comDiv = useRef(null);
  const leftTab = useRef(null);
  const rightTab = useRef(null);
  const menuTab = useRef(null);
  const modeTab = useRef(null);
  const menuTabOptn = useRef(null);
  const pgCover = useRef(null);

  //-------- hooks
  const [darkMode, setDarkMode] = useState(true);
  const [menuTavView, setMenuTavView] = useState(false);

  //-------- context
  const { themeMode, lightTheme, darkTheme } = useTheme();

  //-------- click event handler
  const hndlClk = (e, cmd) => {
    switch (cmd) {
      case darkModeCmd:
        darkModeToggle(e);
        break;
      case homeCmd:
        scrollTo(e, prop.homeRef.current);
        break;
      case projectCmd:
        scrollTo(e, prop.projectRef.current);
        break;
      case aboutCmd:
        scrollTo(e, prop.aboutRef.current);
        break;
      case resumeCmd:
          console.log('');
        break;
      case contactCmd:
        scrollTo(e, prop.contactRef.current);
        break;
      case menuCmd:
        setMenuTavView(!menuTavView);
        menuToggle(e);
        break;
      default:
        break;
    }
  };

  const darkModeToggle = (e) => {
    setDarkMode(!darkMode);
    // if (darkMode && comDiv.current) {
    //   comDiv.current.classList.remove("mode-dark");
    //   comDiv.current.classList.add("mode-light");
    // } else {
    //   comDiv.current.classList.remove("mode-light");
    //   comDiv.current.classList.add("mode-dark");
    // }

    const darkModeStatus = e.currentTarget.checked;
    if (darkMode) {
      darkTheme();
      comDiv.current.classList.replace("mode-light", "mode-dark");
    } else {
      lightTheme();
      comDiv.current.classList.replace("mode-dark", "mode-light");
    }
  };

  const menuToggle = (e) => {
    if (menuTavView && menuTabOptn.current && pgCover.current) {
      pgCover.current.classList.add("hide");
      menuTabOptn.current.classList.add("hide");
      menuTab.current.classList.remove("hide");
    } else if (menuTabOptn.current && pgCover.current) {
      pgCover.current.classList.remove("hide");
      menuTabOptn.current.classList.remove("hide");
      menuTab.current.classList.add("hide");
    }
  };

  const hndlResize = () => {
    if (window.innerWidth < 500) {
      if (leftTab.current && rightTab.current && menuTab.current) {
        menuTab.current.classList.remove("hide");
        leftTab.current.classList.add("hide");
        rightTab.current.classList.add("hide");
      }
    } else {
      if (leftTab.current && rightTab.current && menuTab.current) {
        leftTab.current.classList.remove("hide");
        rightTab.current.classList.remove("hide");
        menuTab.current.classList.add("hide");
      }
    }
  };

  const scrollTo = (e, elem) => {
    if (e && elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  let bgColor = "";
  let txtColor = "";
  if (themeMode == "mode-light") {
    bgColor = "aliceblue";
    txtColor = "black";
  } else {
    bgColor = "black";
    txtColor = "aliceblue";
  }

  window.addEventListener("resize", () => {
    hndlResize();
  });

  return (
    <>
      <div className="h-12 w-full pt-12 mode-light" ref={comDiv}>
        <div
          className="hide fixed top-0 left-0 h-screen w-screen z-10"
          style={{ backgroundColor: bgColor }}
          ref={pgCover}
        ></div>

        {/* mobile */}
        <div
          className="hide h-screen w-1/2 fixed left-0 top-0 z-50"
          ref={menuTabOptn}
          style={{ backgroundColor: bgColor }}
        >
          <div>
            <div className="float-right px-4 py-2">
              <span onClick={(e) => hndlClk(e, menuCmd)}>
                <RxCross2 size={20} color={txtColor} />
              </span>
            </div>
            <div className="px-5 py-6 pt-6">
              <ul className="py-3">
                <li className="py-2">
                  <div>
                    <span
                      className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:text-blue-500 hover:scale-110 duration-300 ..."
                      onClick={(e) => {
                        menuToggle(e);
                        hndlClk(e, homeCmd);
                      }}
                    >
                      Home
                    </span>
                  </div>
                </li>
                <li className="py-2">
                  <div>
                    <span
                      className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:text-blue-500 hover:scale-110 duration-300 ..."
                      onClick={(e) => hndlClk(e, aboutCmd)}
                    >
                      About
                    </span>
                  </div>
                </li>
                <li className="py-2">
                  <div>
                    <span
                      className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:text-blue-500 hover:scale-110 duration-300 ..."
                      onClick={(e) => hndlClk(e, projectCmd)}
                    >
                      Project
                    </span>
                  </div>
                </li>
                <li className="py-2">
                  <div>
                    <a
                      href="https://docs.google.com/document/d/1pI44hrJK2maiAC_yj7QiMaBOKJNEBULEPxpE-ruImV8/edit?usp=drive_link"
                      target="_blank"
                    >
                      <span className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:text-blue-500 hover:scale-110 duration-300 ...">
                        Resume
                      </span>
                    </a>
                  </div>
                </li>
                <li className="py-2">
                  <div>
                    <span
                      className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:text-blue-500 hover:scale-110 duration-300 ..."
                      onClick={(e) => hndlClk(e, contactCmd)}
                    >
                      Contact
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* mobile */}

        <div className="fixed top-0 bg-inherit w-full z-10">
          <div className="flex justify-between px-5">
            <div className="w-2/4">
              <div className="flex" ref={leftTab}>
                <div
                  className="px-5 py-3 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:text-blue-500 hover:scale-110 duration-300 ..."
                  onClick={(e) => hndlClk(e, homeCmd)}
                >
                  Home
                </div>
                <div
                  className="px-5 py-3 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:text-blue-500 hover:scale-110 duration-300 ..."
                  onClick={(e) => hndlClk(e, aboutCmd)}
                >
                  About
                </div>
                <div
                  className="px-5 py-3 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:text-blue-500 hover:scale-110 duration-300 ..."
                  onClick={(e) => hndlClk(e, projectCmd)}
                >
                  Project
                </div>
                <a
                  href="https://docs.google.com/document/d/1pI44hrJK2maiAC_yj7QiMaBOKJNEBULEPxpE-ruImV8/edit?usp=sharing"
                  target="_blank"
                >
                  <div
                    className="px-5 py-3 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:text-blue-500 hover:scale-110 duration-300 ..."
                    // onClick={(e) => hndlClk(e, resumeCmd)}
                  >
                    Resume
                  </div>
                </a>
                <div
                  className="px-5 py-3 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:text-blue-500 hover:scale-110 duration-300 ..."
                  onClick={(e) => hndlClk(e, contactCmd)}
                  ref={rightTab}
                >
                  Contact
                </div>
              </div>

              {/* menutab for mobile */}
              <div className="hide px-5 py-3" ref={menuTab}>
                <div onClick={(e) => hndlClk(e, menuCmd)}>
                  <IoMenuOutline size={20} color={txtColor} />
                </div>
              </div>

              {/*  */}
            </div>
            <div className="w-1/4"></div>
            <div className="w-1/4">
              <div className="flex flex-row-reverse">
                {/* <div>user</div> */}
                <div
                  className="px-5 py-3 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
                  // onClick={(e) => hndlClk(e, darkModeCmd)}
                  ref={modeTab}
                  //checked={themeMode === 'mode-dark'}
                  onClick={(e) => darkModeToggle(e)}
                >
                  {darkMode ? (
                    <MdLightMode size={20} color="black" />
                  ) : (
                    <MdDarkMode size={20} color="white" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

