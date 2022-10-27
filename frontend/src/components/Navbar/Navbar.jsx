import React, {useState,useEffect} from 'react'
import {HiMenuAlt4,HiX}  from 'react-icons/hi';
import {motion} from 'framer-motion';
import './Navbar.scss';
import { images }  from '../../constants'
import {client,getUrlFromId} from '../../client';
import {BsCodeSlash} from 'react-icons/bs'
 import {AiOutlineHome} from 'react-icons/ai'
 import {VscTools} from 'react-icons/vsc'
 import {MdOutlineContactPhone} from 'react-icons/md'
 import {FiPaperclip} from 'react-icons/fi'



const Navbar = ({active}) => {
  console.log(active)
  const [resume, setResume] = useState([])
  useEffect(() => {
    const query = '*[_type == "resume"]';
    client.fetch(query).then((data) => {
      setResume(getUrlFromId(data[0].resume.asset._ref))

    });
  }, []);

  const icons = [<AiOutlineHome/>,<BsCodeSlash/>,<VscTools/>,<MdOutlineContactPhone/> ]
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#">
        <img src={ images.iqtier } alt="logo"/>
        </a>
      </div>
      <ul className="app__navbar-links">
        {['home', 'projects','skills','contact'].map((item, index)=>(
          <li className="app__flex p-text" key={`link-${item}`} >
  
             <a 
             href={`#${item}`}
             className={active===item?"active":''}
            
             >{icons[index]} {item}
             </a>
          </li>
        ))}
        
        <li className="app__flex p-text resume">

          <a className="navbar-item resume" target="_blank" rel="noopener noreferrer" href={resume}>
          <FiPaperclip/> Resume
          </a>
        </li>
      </ul>
 

      
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home',  'projects', 'skills','contact'].map((item,index) => (
                <li key={item} className="app__flex p-text">
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            <li className="resume">
            <a className="navbar-item" target="_blank" rel="noopener noreferrer" href={resume}>
            Resume
            </a>
        </li>
            </ul>
          </motion.div>
        )}
      </div>
   
    </nav>
    
  );
};

export default Navbar;
