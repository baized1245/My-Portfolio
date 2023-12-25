import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://img.freepik.com/free-psd/colorful-social-media-post-template_125755-645.jpg?w=826&t=st=1703494763~exp=1703495363~hmac=159edf4f22850548d7ddad164cb2c1d13358d30e443e2e546272617f8e0470b7"
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
            <FaTwitter className="cursor-pointer" size={20}/>
            <FaFacebook className="cursor-pointer" size={20}/>
            <FaInstagram className="cursor-pointer" size={20}/>
            <FaLinkedin className="cursor-pointer" size={20}/>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Main;
