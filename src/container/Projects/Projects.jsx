import React, {useState, useEffect} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import {motion} from 'framer-motion';

import {AppWrap,MotionWrap} from '../../wrapper'
import {urlFor, client} from '../../client';
import './Projects.scss'

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filterProject, setFilterProject] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "project"]';

    client.fetch(query).then((data) => {
      setProjects(data);
      setFilterProject(data);
    });
  }, []);

  const handleProjectFilter =(item)=>{
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterProject(projects);
      } else {
        setFilterProject(projects.filter((project) => project.tags.includes(item)));
      }
    }, 500);

  }
  return (
    <>
    <h2 className="head-text">My<span> Projects </span></h2>
    <div className="app__project-filter">
    {['UI/UX', 'Web App', 'Mobile App','React Js','Game Development','All'].map((item, index) =>(
      <div
      key = {index}
      onClick={() => handleProjectFilter(item)}
      className={`app__project-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
      >
        {item}
      </div>
    ))}
    </div>
    <motion.div
      animate={animateCard}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__project-portfolio"
    >
      {filterProject.map((project, index) => (
          <div className="app__project-item app__flex" key={index}>
            <div
              className="app__project-img app__flex"
            >
              <img src={urlFor(project.imgUrl)} alt={project.name} />

              <motion.div
                
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__project-hover app__flex"
              >
                <a href={project.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye title="View Demo" />
                  </motion.div>
                </a>
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub title= "View Code" />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__project-content app__flex">
              <h4 className="bold-text">{project.title}</h4>
              <p className="p-text" style={{ marginTop: 10 ,color:'black'}}>{project.description}</p>

              <div className="app__project-tag app__flex">
                <p className="p-text">{project.tags[0]}</p>
              </div>
                
            </div>
            <div className="using">
                <p className="p-text">Using : </p>
                {project.using.map((tool,index) =>(
                  <p key={index} className="p-text using-item ">{tool}</p>))
                }
              </div>
          </div>
        ))}
    </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap (Projects, "app__projects"),
  'projects',
  'app__whitebg'
  )