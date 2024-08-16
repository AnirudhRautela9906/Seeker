
import React, { useEffect, useState } from "react";
import NavbarProfile from "../../components/navbar/NavbarProfile";
import DownArrow from "../../Home_images/Down Icon.svg";
import FilterIcon from "../../Home_images/Filter Icon.svg";
import JobCard from "./../../components/jobCard/JobCard.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ListIcon from "../../Home_images/list.svg"
import StatusIcon from "../../Home_images/status.svg" 
import { useLocation } from "react-router-dom";
import PostedJobSlice from "../../components/postedJobSlice/PostedJobSlice.jsx";
import JobDescriptionCard from "../../components/jobDescriptionCard/JobDescriptionCard.js";
import './JobsPosted.scss'
import AppliedUsersCard from "../../components/appliedUsersCard/AppliedUsersCard.jsx";
const JobsPosted = () => {
    const { jobsPosted } = useSelector((state) => state.user);
    const {userLoading} = useSelector((state) => state.user);
    const {user} = useSelector((state) => state.user)
    const location = useLocation();

  const dispatch = useDispatch();

  const [filter, setFilters] = useState("none");
  const [showFilters, setShowFilters] = useState(false);
  const [isStatus, setIsStatus] = useState(false);
  const [selectedJob, setSelectedJob] = useState(jobsPosted[0]?.jobId);
  const nav = useNavigate();
  useEffect(() => {
      
    if (user.email === "" && !userLoading) {
      nav("/");
    }
    else if( user.email !== "" && !userLoading )
    {
      setSelectedJob(jobsPosted[0]?.jobId);
    }

  }, [nav,userLoading]);
    return (
        <>
          <NavbarProfile />
          <hr />
          <div className="navPostedJobs">
            <div className="filtersPostedJobs">
              <p>
                <img src={DownArrow} alt="" />
                <span>Posted Jobs</span>
              </p>
            </div>
            <span className="span1">
              <img className="img1" src={ListIcon} alt="" onClick={()=>{setIsStatus(false)}}/>
              <img className="img1" src={StatusIcon} alt=""  onClick={()=>{setIsStatus(true)}}/>
            </span>
          </div>
          <div className="profile parallel">

                  <div className="left">
                    {jobsPosted?.map((job, index) => {
                       {
                        return (
                          <PostedJobSlice key={index} title={job.title} cN={job.jobId === selectedJob ? `borderGreen` : undefined}
                          onClick={() => {
                            setSelectedJob((prev)=>{
                              console.log("x");
                              return job.jobId})
                            }}/>
                        );
                      }
                    })}
                  </div>
                  {isStatus ? <div className="right">
                    {jobsPosted?.map((job, index) => {
                      if (job.jobId === selectedJob) {
                        return (
                            <JobDescriptionCard key={index} title={job.title} description={job.longDesc} url={location.pathname} status={job.status} price ={job.price}/>
                        );
                      }
                    })}
                  </div> :
                   <div>
                  {jobsPosted?.map((job, index) => {
                    if (job.jobId === selectedJob) {
                      return (
                        <AppliedUsersCard key={index} userList={job.appliedUsers} status={job.status} jobId={job.jobId}/>
                      );
                    }
                  })}
                  </div>}
          </div>
        </>
      );
    };
    
export default JobsPosted