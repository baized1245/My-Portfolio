import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import image from '../assets/baizeds.jpg';

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={image}
        // src="https://i.ibb.co/khgyGfY/pp.jpg"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">

      <div className="max-w-[700px] m-auto w-full h-full flex flex-col justify-center lg:items-start items-center ">
        <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 ">I am Baized Hasan</h1>
        <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
          I'm a <span className="ml-3">
         <TypeAnimation
            sequence={[
              " Junior",
              2000,
              "web",
              2000,
              "Developer",
              2000,
              
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "1em", padding: "5px"}}
            speed={50}
          />
         </span>
        </h2>
        <div className="flex justify-between pt-6 max-w-[200px] w-full">
          <a href="https://www.linkedin.com/in/baized-hasan-sadhin-53403b2a7/">
          <FaLinkedin className="cursor-pointer" size={20}/>
          </a>
            <FaTwitter className="cursor-pointer" size={20}/>
            <FaFacebook className="cursor-pointer" size={20}/>
            <FaInstagram className="cursor-pointer" size={20}/>
            
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Main;
