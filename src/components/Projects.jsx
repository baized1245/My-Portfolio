import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Here is some projects sample of my practice. <br />
      </p>

      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={
            'https://img.freepik.com/free-psd/delicious-burger-food-menu-social-media-banner-template_106176-1314.jpg?size=626&ext=jpg&uid=R110489875&ga=GA1.1.1162881527.1690013272&semt=sph'
          }
          title="Foodi"
          web={'https://boisterous-druid-a85a74.netlify.app/'}
        />
        <ProjectItem
          img={
            'https://img.freepik.com/free-vector/logistics-isometric-with-online-goods-delivery-service-workers-blue-3d-illustration_1284-28128.jpg?w=826&t=st=1703947758~exp=1703948358~hmac=d9dc3b8a112d1eaa9e9daab770e277a2ae454ea9fa8201b389a7b5453b50040e'
          }
          title="E-Commers App"
          web={'https://ema-john-with-firebase-a-1fb59.web.app/'}
        />
        <ProjectItem
          img={
            'https://img.freepik.com/free-vector/tablet-with-social-media-icons_1394-779.jpg?w=826&t=st=1703947990~exp=1703948590~hmac=5918c88193c820d391bcacb6fe8df9ef94bc58966e9167e7c46af2763301b562'
          }
          title="Disney 2.0"
          web={'https://wondrous-donut-13c087.netlify.app/'}
        />
        <ProjectItem
          img={
            'https://img.freepik.com/free-vector/simple-monocolor-home-run-hero-baseball-t-shirt_742173-8050.jpg?size=626&ext=jpg&uid=R110489875&ga=GA1.1.1162881527.1690013272&semt=sph'
          }
          title="T-Shirt House"
          web={
            'https://659523c4a1c0ec7ad822a966--lively-unicorn-2f51d9.netlify.app/'
          }
        />
        <ProjectItem
          img={
            'https://img.freepik.com/free-vector/back-school-landing-page_23-2148221369.jpg?size=626&ext=jpg&uid=R110489875&ga=GA1.1.1162881527.1690013272&semt=ais'
          }
          title="Crash-Cours"
          web={
            'https://6598e3592f4c4e959ae1aa51--cozy-croissant-44035b.netlify.app/'
          }
        />
        <ProjectItem
          img={
            'https://img.freepik.com/free-psd/shoes-social-media-template-design_505751-4355.jpg?size=626&ext=jpg&uid=R110489875&ga=GA1.1.1162881527.1690013272&semt=sph'
          }
          title="Landing-Page"
          web={'https://earnest-sunshine-2f2a73.netlify.app/'}
        />
        {/* <ProjectItem img={image4} title="Crypto app"/> */}
      </div>
    </div>
  )
}

export default Projects
