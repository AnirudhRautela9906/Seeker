import React from "react";
import './JobDescriptionCard.scss'
import {  putApi } from "../../services/ApiConfig";
import toast from 'react-hot-toast';
const JobDescriptionCard = ({ title, description, image, jobId }) => {
    const onApply = ()=>{
        putApi(`http://localhost:8080/seeker/job/apply/${jobId}`).then((res)=>{
            toast.success("Applied Successfully !");
        }).catch((error)=>{
            console.log(error);
            toast.error("Already Applied !");
        })
    }
  return (
    <div className="job-card-description">
      <h2 className="job-title">{title}</h2>
      <textarea
        className="job-description" value={description}
        readOnly
      />
      <div className="job-images">
        
            <div  className="job-image">
                {console.log(image)}
                <img src={image} className="img" /> 
            </div>
        
      </div>
      <div className="job-footer">
        <div className="job-coins">50 COINS</div>
        <button className="job-apply" onClick={onApply} >Apply</button>
      </div>
    </div>
  );
};

export default JobDescriptionCard;
