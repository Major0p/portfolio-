import { React, useState, useRef } from "react";
import ProjectInfo from "./ProjectInfo";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BiSolidDownArrowAlt } from "react-icons/bi";
import { hideShowPopUp } from "../Utils";

export default function ProjectCard(props) {
  const info = props.info;
  const pgCover = useRef(null);

  const [isProjectInfoVsbl, setProjectInfoVsbl] = useState(false);
  const projectInfoWrapr = useRef(null);

  const projectInfoVsblToggle = (e) => {
    console.log(e);
    hideShowPopUp(
      projectInfoWrapr.current,
      isProjectInfoVsbl,
      setProjectInfoVsbl
    );
  };

  return (
    <div className="h-full w-full">
      <div
        className="hide fixed top-0 left-0 h-screen w-screen z-10"
        ref={pgCover}
      ></div>
      <div className="px-2">
        <a href={info.url} target="_blank">
          <div className="h-[160px] w-[300px] border-2 border-dashed overflow-hidden">
            <img
              src={info.imgSrc}
              alt="could not load"
              height={"160px"}
              width={"300px"}
            />
          </div>
        </a>
        <div className="font-semibold text-2xl py-2 px-2">
          <p>{info.name}</p>
        </div>
        <div className="text-1xl py-2 px-2">
          <p>{info.brief}</p>
        </div>
      </div>
      {/* <div>
        <div className="px-5 text-1xl float-right cursor-pointer transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-100 duration-500 ...">
          <span onClick={(e) => projectInfoVsblToggle(e)}>
            <BiSolidDownArrowAlt size={25} />
          </span>
        </div>
      </div>
      <div className="hide" ref={projectInfoWrapr}>
        <ProjectInfo info={info} />
      </div> */}
    </div>
  );
}
