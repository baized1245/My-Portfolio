import React from 'react'

const ProjectItem = ({ img, title, web, code }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] ">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hideen group-hover:block absolute top-[50%] teft-[50%] translate-x-[50%] translate-y-[50%]">
        <h3 className="text-2xl font-bold text-[#001b5e] tracking-wide text-center">
          {title}
        </h3>
        <a href={code}>
          <p className="pb-4 pt-2 text-[#001b5e] text-center cursor-pointer text-xl">
            Code
          </p>
        </a>
        <a href={web}>
          <button className="text-center p-2 rounded-lg bg-white text-[#001b5e] font-bold cursor-pointer text-lg">
            Visit To The Site
          </button>
        </a>
      </div>
    </div>
  )
}

export default ProjectItem
