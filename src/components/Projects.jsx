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
              Here is some projects sample of my practice. <br />   
          </p>
           
            <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={"https://img.freepik.com/free-vector/logistics-isometric-with-online-goods-delivery-service-workers-blue-3d-illustration_1284-28128.jpg?w=826&t=st=1703947758~exp=1703948358~hmac=d9dc3b8a112d1eaa9e9daab770e277a2ae454ea9fa8201b389a7b5453b50040e"} title="E-Commers app" web={"https://ema-john-with-firebase-a-1fb59.web.app/"}/>
            <ProjectItem img={"https://img.freepik.com/free-vector/tablet-with-social-media-icons_1394-779.jpg?w=826&t=st=1703947990~exp=1703948590~hmac=5918c88193c820d391bcacb6fe8df9ef94bc58966e9167e7c46af2763301b562"} title="Disney 2.0" web={"https://wondrous-donut-13c087.netlify.app/"}/>
            {/* <ProjectItem img={image3} title="Crypto app"/>
            <ProjectItem img={image4} title="Crypto app"/> */}
            </div>
        </div>
    );
};

export default Projects;