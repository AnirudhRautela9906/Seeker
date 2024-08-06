import React from 'react'
import './Style.scss'
import jobPoster from '../../Home_images/jobPoster.png'
import jobSeeker from '../../Home_images/jobSeeker.png'
const Home = () => {
  return (
    <>
    <hr />
    <p className='p1'>Why to worry when a Seeker is Ready !!</p>
    
    <div className='parallel'>  
        
          <button className='box'>
            <img src={jobPoster} alt="jobPoster"/>
          </button>
        
        
          <button className='box'>
            <img src={jobSeeker} alt="jobSeeker"/>
          </button>
        
    </div>  
    <div className='textdiv'>
      <div className="special-paragraph1" >Want your work done?</div>
      <div className="special-paragraph2">Want to earn by doing work?</div>
    </div>
    </>
  )
}

export default Home