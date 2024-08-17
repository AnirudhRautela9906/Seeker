import React, { useEffect } from "react";
import './JobDescriptionCard.scss'
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from "react-redux";
import { applyJob, loadJobs } from "../../redux/actions/jobActions";
import { JOB_APPLY_REQUEST } from "../../redux/constants/jobConsants";

const JobDescriptionCard = ({title, description, image, jobId, url , status, price,assignedUser ,email}) => {

  const dispatch = useDispatch();

    const onApply = ()=>{
      dispatch(applyJob(jobId));
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
              return <div className="job-apply" style={{backgroundColor:"grey"}} >Applied</div>
            }
            else{
              if(status === "ASSIGNED" &&  assignedUser?.email !== email)
              {
                return <div className="job-apply" style={{backgroundColor:"grey"}} >Applied</div>
              }
              else{
                if(status === "COMPLETED" &&  assignedUser?.email !== email)
                {
                  console.log("asd")
                  console.log(email)
                  console.log("assignedUser?.email",assignedUser?.email)
                  return <div className="job-apply" style={{backgroundColor:"grey"}} >Applied</div>
                }
           else{
            if( assignedUser?.email === email && status  === "ASSIGNED")
            {
              return <div className="job-apply" style={{backgroundColor:"#FFB800"}} >Assigned</div>
            }
            else{
              console.log(assignedUser)
              if( assignedUser?.email === email && status  === "COMPLETED")
              return <div className="job-apply"  style={{backgroundColor:"#21B414"}}  >Completed</div>
            }}
            }
           } }
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
