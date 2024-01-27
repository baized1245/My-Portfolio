import React from 'react'

const WorkItem = ({ item }) => {
  return (
    <ol className="flex flex-col md:flow-row relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
            {item.year}
          </span>
          <p className="text-lg font-semibold text-[#001b5e]">{item.title}</p>{' '}
          <p className="my-1 text-xl font-bold leading-none text-stone-500">
            <span className="text-lg font-semibold text-[#001b5e]">
              Tools:{' '}
            </span>
            {item.tools}
          </p>
        </div>
        <h3 className="text-lg font-semibold text-[#001b5e]">
          Responsive behaviour:{' '}
          <span className="my-1 text-xl font-bold leading-none text-stone-500">
            {' '}
            {item.responsive}
          </span>
        </h3>

        <p className="my-2 text-base font-normal text-stone-500">
          <span className="text-lg font-semibold text-[#001b5e]">
            My-Learning:{' '}
          </span>
          {item.details}
        </p>
      </li>
    </ol>
  )
}

export default WorkItem
