import React, { useEffect, useState } from "react";
import NavbarProfile from "../../components/navbar/NavbarProfile";
import "./Profile.scss";
import DownArrow from "../../Home_images/Down Icon.svg";
import FilterIcon from "../../Home_images/Filter Icon.svg";
import JobCard from "./../../components/jobCard/JobCard.jsx";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "../../services/ApiConfig.js";
import JobDescriptionCard from "../../components/jobDescriptionCard/JobDescriptionCard.js";
import PostJobForm from "../../components/postJobForm/PostJobForm.jsx";
const Profile = () => {
  // console.log("jknjk")
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [jobsList, setJobsList] = useState([]);
  const [filter, setFilters] = useState("none");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedJob, setSelectedJob] = useState(0);

  //console.log(user, "sxsk");
  const nav = useNavigate();
  useEffect(() => {
    if (user.email === "") {
      nav("/");
    } else {
      getApi("http://localhost:8080/seeker/job")
        .then((res) => {
          setJobsList(res.data);
          //console.log(res.data);

          setSelectedJob(res.data[0]?.jobId);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    //console.log(user);
  }, [nav]);

  const [isFormVisible, setIsFormVisible] = useState(false);

  const openForm = () => {
    setIsFormVisible(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsFormVisible(false);
  };

  return (
    <>
      <NavbarProfile />
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
          {showFilters && (
            <div>
              <button
                onClick={() => {
                  setFilters("area");
                  setShowFilters(false);
                }}
              >
                area
              </button>
              <button
                onClick={() => {
                  setFilters("city");
                  setShowFilters(false);
                }}
              >
                city
              </button>
              <button
                onClick={() => {
                  setFilters("state");
                  setShowFilters(false);
                }}
              >
                state
              </button>
              <button
                onClick={() => {
                  setFilters("none");
                  setShowFilters(false);
                }}
              >
                none
              </button>
            </div>
          )}
          {filter !== "none1" ? (
            <span>
              <span>{filter}</span>{" "}
              <button
                onClick={() => {
                  setFilters("none1");
                  setShowFilters(true);
                  setSelectedJob(-1);
                }}
              >
                Clear filters
              </button>
            </span>
          ) : (
            <span></span>
          )}
        </div>
        <div onClick={openForm} className="postJobButton">
          <div>Post a Job?</div>
        </div>
      </div>
      <div className="profile parallel">
        <div className="left">
          {jobsList.map((job, index) => {
            if (
              (filter === "area" &&
                job.creator.email !== user.email &&
                user.address.area === job.jobLocation.area) ||
              (filter === "city" &&
                job.creator.email !== user.email &&
                user.address.city === job.jobLocation.city) ||
              (filter === "state" &&
                job.creator.email !== user.email &&
                user.address.state === job.jobLocation.state) ||
              filter === "none" && job.creator.email !== user.email
            ) {
              return (
                <JobCard
                  key={job.jobId}
                  picUrl={`https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg`}
                  name={job.creator.name}
                  address={{
                    area: job.jobLocation.area,
                    city: job.jobLocation.city,
                    state: job.jobLocation.state,
                  }}
                  jobTitle={job.title}
                  cN={job.jobId === selectedJob ? `borderGreen` : undefined}
                  onClick={() => {
                    setSelectedJob(job.jobId);
                  }}
                />
              );
            }
          })}
        </div>
        <div className="right">
          {jobsList.map((job, index) => {
            if (job.jobId === selectedJob) {
              return (
                <JobDescriptionCard
                  key={job.jobId}
                  image={`https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg`}
                  title={job.title}
                  jobId={job.jobId}
                  description={job.longDesc}
                />
              );
            }
          })}
        </div>
      </div>

      {isFormVisible && (
        <div className="overlay">
          <PostJobForm/>
        </div>
      )}
    </>
  );
};

export default Profile;
