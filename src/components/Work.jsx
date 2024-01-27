import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: 2024,
    title: 'Mern-Book-Store',
    responsive: 'Available For All Device Screen',
    tools:
      'VS-code, Reactjs, Tailwindcss, Firebase, React-router-dom, slick-carousel, flowbite, react-icons, sweetalert2, node.js, express.js, MongoDB ',
    details:
      'In this Mern-Book-Store project I was trying to implement my skills in React,Tailwind,Firebase,  React-router-dom, node.js, express.js & mongodb database. Doing this project I was learn many thinks like, stragety for a online mern-Book-Store website, authentication system, api calling, pagination, filtering, cetagorige , routing  and many more thinks that I learn to building this project.',
  },
  {
    year: 2024,
    title: 'Foodi',
    responsive: 'Available For All Device Screen',
    tools:
      'VS-code, Reactjs, Tailwindcss, DaisyUi, Firebase, React-router-dom, slick-carousel and more ',
    details:
      'In this foodi e-commers  project I was trying to implement my skills in React,Tailwind,Firebase & React-router-dom. Doing this project I was learn many thinks like, stragety for a online food order e-commers website, authentication system, api calling, pagination, filtering, cetagorige , routing  and many more thinks that I learn to building this project.',
  },
  {
    year: 2023,
    title: 'E-Commers App',
    responsive: 'Only For Desktop Screen',
    tools:
      'VS-code, Reactjs, Tailwindcss, DaisyUi, Firebase, Nodejs with express and Mongodb',
    details:
      'In this e-commers project I was trying to implement my skills in React,Tailwind,Firebase,nodejs and mongodb. Doing this project I was learn many thinks like, stragety for a e-commers website, authentication system, api calling, Localstorage item save and remove, Frontend and backend connection, Save data to database(mongodb) and many more thinks that I learn to building this project.',
  },
  {
    year: 2023,
    responsive: 'Available For All Device Screen',
    title: 'Disney 2.0',
    tools: 'VS-code, Reactjs,React-icons, Tailwindcss, TMDB',
    details:
      'In this Disney clone project I was trying to implement my skills in Reactjs and Tailwind.Doing this project I was learn many thinks like, stragety for a OTT base website, Responsive design thinks, axios api calling, slider etc.',
  },
  {
    year: 2024,
    responsive: 'Only For Desktop Screen',
    title: 'T-Shirt House',
    tools: 'VS-code, Reactjs,React-icons,React Router-dom, CSS',
    details:
      'In this Online T-Shirt House project I was trying to implement my skills in Reactjs and Tailwind.  This a simple project for upgrading my knowledge on React, Tailwind and responsive design. Doing this project I was learn many thinks like, stragety for a Online-Shope website, How to navigate one page to another page without page reload, How to implement map, How to use hooks,How to send data by using props and many other etc.',
  },
  {
    year: 2023,
    responsive: 'Available For All Device Screen',
    title: 'Crash-Cours',
    tools:
      'VS-code, Reactjs,React-icons, Tailwind, react-slick, slick-carousel',
    details:
      'In this Online Crash-Cours project I was trying to implement my skills in Reactjs and CSS.Doing this project I was learn many thinks like, stragety for a Online-Shope website, How make a website responsive, How to use Tailwind properly, How to navigate one page to another page by anchor tag, How to implement map, How to use hooks,How to send data by using props and many other etc.',
  },
  {
    year: 2024,
    responsive: 'Available For All Device Screen',
    title: 'Landing-Page',
    tools: 'VS-code, Reactjs,React-icons,Tailwind',
    details:
      'In this Nike-Landing-Page project I was trying to implement my skills in Reactjs and TailwindCSS.Doing this project I was learn many thinks like, stragety for a Online-Shope website,How to responsive a website, How to implement map, How to use hooks,How to send data by using props and many other etc.',
  },
  {
    year: 2024,
    responsive: 'Available For All Device Screen',
    title: 'Air-CNC',
    tools: 'VS-code, Reactjs,React-icons,Tailwind',
    details:
      'In this Air-CNC project I was trying to implement my skills in Reactjs and TailwindCSS.Doing this project I was learn many thinks like, stragety for a House booking website,How to responsive a website, How to implement map, How to use hooks,How to send data by using props and many other etc.',
  },
]

const Work = () => {
  return (
    <>
      <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-semibold text-center text-[#001b5e]">
          Work Details
        </h1>
        {data.map((item, idx) => (
          <WorkItem key={idx} item={item} />
        ))}
      </div>
    </>
  )
}

export default Work
