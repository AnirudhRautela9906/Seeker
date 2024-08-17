import React, { useEffect, useState } from "react";
import DownArrow from "../../Home_images/Down Icon.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import PostedJobSlice from "../../components/postedJobSlice/PostedJobSlice.jsx";
import JobDescriptionCard from "../../components/jobDescriptionCard/JobDescriptionCard.js";

// import AppliedUsersCard from "../../components/appliedUsersCard/AppliedUsersCard.jsx";
const JobsApplied = () => {

  // const { user } = useSelector((state) => state.user);
  // const { userLoading } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const dispatch = useDispatch();
  const [filter, setFilters] = useState("none");
  const [showFilters, setShowFilters] = useState(false);
  const [isStatus, setIsStatus] = useState(false);
  const [selectedJob, setSelectedJob] = useState(user?.jobsApplied[0]?.jobId);
  const nav = useNavigate();
  useEffect(() => {
    // if (user.email === "" && !userLoading) {
    //   nav("/");
    // } else if (user.email !== "" ) {
    //   setSelectedJob(jobsApplied[0]?.jobId);
    // }
  }, [nav]);
  return (
    <>
      {/* <NavbarProfile /> */}
      <hr />
      <div className="navPostedJobs">
        <div className="filtersPostedJobs">
          <p>
            <img src={DownArrow} alt="" />
            <span>Applied Jobs</span>
          </p>
        </div>
      </div>
      <div className="profile parallel">
        <div className="left">
          {user?.jobsApplied?.map((job, index) => {
            
              return (
                <PostedJobSlice
                  key={index}
                  title={job.title}
                  cN={job.jobId === selectedJob ? `borderGreen` : undefined}
                  onClick={() => {
                    setSelectedJob((prev) => {
                      return job.jobId;
                    });
                  }}
                />
              );
            
          })}
        </div>
        { (
          <div className="right">
            {user?.jobsApplied?.map((job, index) => {
              console.log(job.jobId,selectedJob);
              if (job.jobId === selectedJob) {
                return (
                  <JobDescriptionCard
                    key={index}
                    title={job.title}
                    description={job.longDesc}
                    url={"/profile/jobsApplied"}
                    status={job.status}
                    price={job.price}
                    assignedUser={job.assignedUser}
                    email={user.email}
                  />
                );
              }
            })}
          </div>
        ) }
      </div>
    </>
  );
};

export default JobsApplied;
