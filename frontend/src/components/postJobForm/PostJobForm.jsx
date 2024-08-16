import React, { useState, useRef, useEffect} from "react";
import "./PostJobForm.scss";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { postApi } from "../../services/ApiConfig";

const PostJobForm = ({ setIsFormVisible }) => {
  const { user } = useSelector((state) => {
    return state.user;
  });

  const [obj, setObj] = useState({
    title: "",
    longDesc: "",
    price: "",
    jobLocation: user.address,
  });

  const formRef = useRef(null);

  const onRegister = (event) => {
    event.preventDefault();
    postApi("http://localhost:8080/seeker/job/create", obj)
      .then((res) => {
        toast.success(`Job Created Successfully !`);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
    // setIsFormVisible(false);
  };
  //console.log(obj);
  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setIsFormVisible(false); // Hide the form when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="main-container">
      <form ref={formRef} onSubmit={onRegister}>
        <div className="form-group">
          <label htmlFor="job-name">Give a Title to Your Job *</label>
          <input
            type="text"
            id="job-name"
            name="job-name"
            required
            onChange={(event) => {
              setObj((prev) => ({ ...prev, title: event.target.value }));
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="job-desc">Please Describe your Job *</label>
          <textarea
            id="job-desc"
            name="job-desc"
            className="jobDesc"
            required
            onChange={(event) => {
              setObj((prev) => ({ ...prev, longDesc: event.target.value }));
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="coins">Money *</label>
          <input
            type="text"
            id="coins"
            name="coins"
            required
            onChange={(event) => {
              setObj((prev) => ({ ...prev, price: event.target.value }));
            }}
          />
        </div>
        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostJobForm;
