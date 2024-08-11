import React, { useEffect } from 'react'
import NavbarProfile from '../../components/navbar/NavbarProfile'
import './Style.scss'
import DownArrow from '../../Home_images/Down Icon.svg'
import FilterIcon from '../../Home_images/Filter Icon.svg'
import JobCard from './../../components/jobCard/JobCard.jsx'
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
const Profile = () => {
  console.log("jknjk")
  const {user} = useSelector(state => state.user);
  console.log(user,"sxsk");
  const nav = useNavigate();
  useEffect(()=>{
    if(user.email === "")
    {
      nav('/');
    }
  },[nav])

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