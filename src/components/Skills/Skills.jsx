import React from "react";
import useTheme from '../Context/Theme';

export default function Skills(props) {
  const skillsList = props.skillsList;
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
  return (
    <div className="h-full w-full py-3">
      <div className="flex justify-center">
        <div className="w-3/4">
          <div className="font-bold text-3xl py-3">My Skills</div>
          <div className="flex flex-wrap">
            {skillsList.map((el, i) => {
              return (
                <div
                  className=" py-2 px-3 font-semibold text-black mx-2 my-2 rounded-lg cursor-default transition ease-in-out delay-150 hover:-translate-y-1 hover:text-white hover:bg-aliceblue hover:scale-110 duration-300 ..."
                  key={i}
                  style={{backgroundColor:bgColor,color:txtColor}}
                >
                  {el.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}




