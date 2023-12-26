import React from 'react';
import ProjectItem from './ProjectItem';
import image1 from '../assets/ig.jpg'
import image2 from '../assets/nf.jpg'
import image3 from '../assets/wb.jpg'
import image4 from '../assets/yt.jpg'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
          <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
          <p className='text-center py-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempora consectetur illum incidunt eum distinctio? Id unde, dolor possimus quia, maiores error qui iure doloribus, odio similique delectus assumenda veniam.
          </p>
           
            <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={image1} title="Crypto app"/>
            <ProjectItem img={image2} title="Crypto app"/>
            <ProjectItem img={image3} title="Crypto app"/>
            <ProjectItem img={image4} title="Crypto app"/>
            </div>
        </div>
    );
};

export default Projects;