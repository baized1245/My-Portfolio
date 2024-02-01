import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaPhone,
} from 'react-icons/fa'
import image from '../assets/cover.jpeg'

const Main = () => {
  return (
    <div id="main" className="mt-10">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1] rounded-2xl"
        src={image}
        // src="https://i.ibb.co/khgyGfY/pp.jpg"
        alt=""
      />
      <div className="w-full h-screen absolute top-10 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto w-full h-full flex flex-col justify-center lg:items-start items-center ">
          <h1 className="sm:text-3xl text-2xl font-bold text-gray-800 ">
            I am Baized Hasan
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a{' '}
            <span className="ml-3">
              <TypeAnimation
                sequence={[
                  ' Junior',
                  2000,
                  'MERN',
                  2000,
                  'Stack',
                  2000,
                  'web',
                  2000,
                  'Developer',
                  2000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em', padding: '5px' }}
                speed={50}
              />
            </span>
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://github.com/baized1245">
              <FaGithub
                className="cursor-pointer hover:text-[#001b5e] transition-all ease-in duration-300"
                size={20}
              />
            </a>
            <a href="https://www.linkedin.com/in/baized-hasan-sadhin-53403b2a7/">
              <FaLinkedin
                className="cursor-pointer hover:text-[#001b5e] transition-all ease-in duration-300"
                size={20}
              />
            </a>
            <a href="https://www.facebook.com/mdbaizedhasan.hasan">
              <FaFacebook
                className="cursor-pointer hover:text-[#001b5e] transition-all ease-in duration-300"
                size={20}
              />
            </a>
            <FaInstagram className="cursor-pointer" size={20} />
            <FaTwitter className="cursor-pointer" size={20} />
          </div>
          <div className="mt-5 font-semibold text-lg">
            <h2 className="my-2">Phone: 01735886607</h2>
            <p className="my-2">Email: mdbaizedhasans@gmail.com</p>
            <p>Address: Rajabari, Turag, Uttora, Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
