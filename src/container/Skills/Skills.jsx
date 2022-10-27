import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';


import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [educations, setEducations] = useState([]);
  const [skills, setSkills] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const educationQuery = '*[_type == "education"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(educationQuery).then((data) => {
      setEducations(data);
    });


    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  console.log(educations)
  return (
    <>
      <h2 className="head-text">Skills & <span>Education</span></h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill,index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
                key = {index}
              >
                <img key ={index} src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className=" white">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__education">
        {
          educations.length &&(
            <>
            <div className="app__education-item app__flex">
              <div className="app__education-main" >
              <img src={urlFor(educations[currentIndex].imgurl)} alt={educations[currentIndex].school} className ="ed_image"/>
              <div className="app__education-content" >
                <div>
                  <h4 className="bold-text">{educations[currentIndex].degree}</h4>
                  <h5 className="p-text">{educations[currentIndex].school}</h5>
                  <p className="p-text" title="Graduation Year">{educations[currentIndex].graduation}</p>
                </div>
              </div>
              <div className="major_minor">
                <p className="bold-text" title="Major">Major : {educations[currentIndex].major}</p>
                <br></br>
                {educations[currentIndex].minor && <p className="p-text"  title="Minor">Minor : {educations[currentIndex].minor}</p> }
                
              </div>
              </div>
              
              <div className="realted_course" title = "Realted Courses">
                {educations[currentIndex].related_course? <p className="bold-text">Realted Courses:</p>:""}
                { educations[currentIndex].related_course?.map((course,index)=>(
                  <p className="course">{course}</p>
                ))}
              </div>
            </div>
            <div className="app__education-btns app__flex">
              <div className="app__flex" title="Previous" onClick={() => handleClick(currentIndex === 0 ? educations.length - 1 : currentIndex - 1)}>
                <HiChevronLeft />
              </div> 
              <div className="app__flex" title="Next" onClick={() => handleClick(currentIndex === educations.length - 1 ? 0 : currentIndex + 1)}>
                <HiChevronRight />
              </div>
            </div>
            </>
          )
        }

        </div>
        
       
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app_primarybg'
);