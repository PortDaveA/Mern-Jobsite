import './popupform.css';
import React, { useState } from 'react';
import Axios from 'axios';
import LinearProgress from "@mui/material/LinearProgress";



function InputForm({ handleClose }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [role, setRole] = useState(''); // Initialize with a default value
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('');
  const [coverletter, setCoverletter] = useState('');
  const progressBarStyle = {
    height:'18px',
    backgroundColor: 'light blue',
  }
 
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    

    try {
      const response = await Axios.post('http://localhost:4000/insert', {
        name,
        surname,
        role,
        email,
        experience,
        coverletter,
      });

      if (response.status === 200) {
        // Handle success response
        alert('Your application has been received, we will get back to you soon.');
      } else {
        // Handle error response
        alert('There has been an error. Please try again later!');
      }
    } catch (error) {
      // Handle error response
      alert('There has been an error. Please try again later!');
    }
  };

  return (
    <div>
      <div className="popup">
        

        <div className="popup-inner">
        <button className = "closeform" onClick={handleClose}>X</button>
          <h2>Apply</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                className="name"
                type="text"
                placeholder="First name..."
                onChange={(e) => setName(e.target.value)} setInPutHandler
              />
            </label>

            <label>
              Surname:
              <input
                className="surname"
                type="text"
                placeholder="Surname..."
                onChange={(e) => setSurname(e.target.value)}
              />
            </label>

            <label>
              Role:
              <select
                className="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option className="role" value="Default">
                  Select a role
                </option>
                <option className="role" value="Software Engineer">
                  Software Engineer
                </option>
                <option className="role" value="Web Developer">
                  Web Developer
                </option>
                <option className="role" value="Data Scientist">
                  Data Scientist
                </option>
              </select>
            </label>

            <label>
              Email Address:
              <input
                className="email"
                type="email"
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label>
              Years of experience:
              <input
                className="experience"
                type="number"
                placeholder="Experience..."
                onChange={(e) => setExperience(e.target.value)}
              />
            </label>

            <label>
  <p>Cover Letter:</p>
  <textarea
    className="coverletter"
    placeholder="Your cover letter here..."
    maxLength="200"
    style={{ height: '500px' }}
    onChange={(e) => setCoverletter(e.target.value)}
  />
  <div className="progress">
  <span className="charleft">{200 - coverletter.length} characters left</span>
    <LinearProgress
      className="charProgress"
      variant="determinate"
      value={coverletter.length}
      sx = {progressBarStyle}
      color = "success"
      />
  </div>
</label>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InputForm;
