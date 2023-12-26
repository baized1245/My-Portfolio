import React from 'react';
import WorkItem from './WorkItem';

const data = [
    {
        year: 2020,
        title: "Content Creator",
        duration: "3 Years",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, vero accusantium debitis voluptas iure sint necessitatibus ducimus consequatur repellat modi tempore et, mollitia vitae laudantium temporibus. Nobis unde dignissimos numquam."
    },
    {
        year: 2020,
        title: "Content Creator",
        duration: "3 Years",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, vero accusantium debitis voluptas iure sint necessitatibus ducimus consequatur repellat modi tempore et, mollitia vitae laudantium temporibus. Nobis unde dignissimos numquam."
    },
    {
        year: 2020,
        title: "Content Creator",
        duration: "3 Years",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, vero accusantium debitis voluptas iure sint necessitatibus ducimus consequatur repellat modi tempore et, mollitia vitae laudantium temporibus. Nobis unde dignissimos numquam."
    },
    {
        year: 2020,
        title: "Content Creator",
        duration: "3 Years",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, vero accusantium debitis voluptas iure sint necessitatibus ducimus consequatur repellat modi tempore et, mollitia vitae laudantium temporibus. Nobis unde dignissimos numquam."
    },
]

const Work = () => {
    return (
       <>
       
       <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'> 
            <h1 className='text-4xl font-semibold text-center text-[#001b5e]'>Work</h1> 
            {
                data.map((item, idx) => (
                    <WorkItem key={idx} item={item}/>
                ))
            }      
        </div>

       </>
    );
};

export default Work;