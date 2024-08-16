import React from "react";
import './JobDescriptionCard.scss'
import {  putApi } from "../../services/ApiConfig";
import toast from 'react-hot-toast';
const JobDescriptionCard = ({ title, description, image, jobId, url , status, price}) => {
    const onApply = ()=>{
        putApi(`http://localhost:8080/seeker/job/apply/${jobId}`).then((res)=>{
            toast.success("Applied Successfully !");
        }).catch((error)=>{
            console.log(error);
            toast.error("Already Applied !");
        })
    }
    const domNode = ()=>{
      if(url === '/profile/jobsPosted')
        {
          return <div className="job-apply">{status}</div>
        }  
        else if( url === undefined)
          {
            return <div className="job-apply" onClick={onApply} >Apply</div>
           }
           else{
            if(status === "POSTED")
            {
              return <div className="job-apply"  >Applied</div>
            }
            else{
              return <div className="job-apply"  >{status}</div>
              
            }
           } 
    }
  return (
    <div className="job-card-description">
      <h2 className="job-title">{title}</h2>
      <label htmlFor="job-description" className="job-desc">Description and Instructions</label>
      <textarea name="job-description"
        className="job-description" value={description}
        readOnly
      ></textarea>
      <div className="job-images">
            <div  className="job-image">
                <img src={image} className="img" /> 
            </div>
      </div>
      <div className="job-footer">
        <div className="job-coins">{price} Coins</div>
        
        {domNode()}
      </div>
    </div>
  );
};

export default JobDescriptionCard;
