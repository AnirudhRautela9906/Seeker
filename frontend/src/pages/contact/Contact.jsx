import React from 'react'
import './style.scss'
import mem1 from './anant.webp'
import mem2 from './anirudh.webp'
import mem3 from './ayush.webp'
import mem4 from './jayant.webp'
import mem5 from './sanket.webp'
import mem6 from './sourav.webp'


const Contact = () => {
  const teamMembers = [
    {
      //Team member 1
      image: mem1,
      name: 'Anant Singhal',
      linkedin: 'https://www.linkedin.com/in/anant-singhal-ba38651b1/',
      github: 'https://github.com/Anant-Singhal'
    },
    {
      //Team member 2
      image: mem2,
      name: 'Anirudh Rautela',
      linkedin: 'https://www.linkedin.com/in/anirudhrautela9906/',
      github: 'https://github.com/AnirudhRautela9906'
    },
    {
      //Team member 3
      image: mem3,
      name: 'Ayush Kumar',
      linkedin: 'https://www.linkedin.com/in/ayush9kumar9/',
      github: 'https://github.com/AyushKumar55'
    },
    {
      //Team member 4
      image: mem4,
      name: 'Jayant Raoo',
      linkedin: 'https://www.linkedin.com/in/jayant-raoo-15a472250/',
      github: 'https://github.com/JAYANTRAOO'
    },
    {
      //Team member 5
      image: mem5,
      name: 'Sanket Jagtap',
      linkedin: 'https://www.linkedin.com/in/sanket-jagtap-55715b202/',
      github: 'https://github.com/SanketJagtap121197'
    },
    {
      //Team member 6
      image: mem6,
      name: 'Sourav Bhowmick ',
      linkedin: 'https://www.linkedin.com/in/sourav-bhowmick-436851192/',
      github: 'https://github.com/Sourav2255Bho'
    }
  ];
  return (
    
    <div className="contact">
    <h1>Say 👋🏻 to Our Developers</h1>
    <div className="card-container">
      {teamMembers.map((member, index) => (
        <div key={index} className="card">
          <img src={member.image} alt={member.name} className="card-image" />
          <h3 className="card-name">{member.name}</h3>
          <div className="card-links">
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={member.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Contact