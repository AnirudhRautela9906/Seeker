import React from 'react'
import NavbarProfile from '../../components/navbar/NavbarProfile'
import './Style.scss'
import DownArrow from '../../Home_images/Down Icon.svg'
import FilterIcon from '../../Home_images/Filter Icon.svg'
import JobCard from './../../components/jobCard/JobCard.jsx'
const Profile = () => {
  return (
    <>
        <NavbarProfile/>
        <hr />
        <div className="nav">
          <div className="filters">
            <p>
                <img src={DownArrow} alt="" />
                <span>Nearby Jobs</span>
            </p>
            <p>
                <img src={FilterIcon} alt="" />
                <span>Filter</span>
            </p>
          </div>
          <div className='postJobButton'>
            <div>Post a Job?</div>
          </div>
        </div>
        <div className="left">
            <JobCard   picUrl={`https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg`} name={`chaman`} address={{
              area:`123 Main St`,
              city:`Los Angeles`,
              state:`mksckmk`
            }  } jobTitle = {`JD in brief/ Job Title`}/>
            <JobCard    picUrl={`https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg`} name={`chaman`} address={{
              area:`123 Main St`,
              city:`Los Angeles`,
              state:`mksckmk`
            }  } jobTitle = {`JD in brief/ Job Title`}/>
            <JobCard   picUrl={`https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg`} name={`chaman`} address={{
              area:`123 Main St`,
              city:`Los Angeles`,
              state:`mksckmk`
            }  } jobTitle = {`JD in brief/ Job Title`}/>
            <JobCard    picUrl={`https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg`} name={`chaman`} address={{
              area:`123 Main St`,
              city:`Los Angeles`,
              state:`mksckmk`
            }  } jobTitle = {`JD in brief/ Job Title`}/>
            <JobCard   picUrl={`https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg`} name={`chaman`} address={{
              area:`123 Main St`,
              city:`Los Angeles`,
              state:`mksckmk`
            }  } jobTitle = {`JD in brief/ Job Title`}/>
        </div>
        
    </>    
  )
}

export default Profile