import React from 'react'
import {motion} from 'framer-motion'
import {images} from '../../constants'
import {AppWrap} from '../../wrapper'
import './Header.scss'

const scaleVariants = {
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition: {
      duration: 1, ease:'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{x: [-100,0], opacity:[0,1]}}
        transition={{duration:1}}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{marginLeft:20}}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Iqtier</h1>
              <p className='p-text'> Recent CS Graduate Student </p>
              
            </div>
          </div>
          <div className='tag-cmp app-flex'>
 
            <p className='p-text'>I'm a highly motivated Full-Stack Software Developer with a passion for Game Development, Artificial Intelligence,UI/UX and  eager to join your team of Developers. I pride myself on my work ethic and willingness to do whatever is necessary to accomplish a goal I’ve set for myself. When I'm not behind a computer screen I enjoy going to the gym or walking on a beautiful trail listening to Music🤘. One of the most beautiful things about life is that every day is an opportunity to learn something new and take steps towards achieving your life long goals!.</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div
      whileInView={{opacity:[0,1]}}
      transition={{duration:1, delayChildren: 0.5}}
      className="app__header-img"
      >
        <img src = {images.profile} alt = 'profile_bg'/>
        <motion.img 
        whileInView={{scale:[0,1]}}
        transition={{duration:1, ease: 'easeInOut'}}
        className="overlay_circle"
        src = {images.circle}
        alt = 'profile_circle'
        >
        </motion.img> 
      </motion.div>

      <motion.div
      variant={scaleVariants}
      whileInView = {scaleVariants.whileInView}
      className="app__header-circles"
      >
       {[images.unrealEngine, images.react,images.dotNet].map((circle,index)=>(
        <div className = 'circle-cmp app__flex' key = {`circle-${index}`}>
          <img src = {circle} alt = 'circle'/>
        </div>
       ))}
      </motion.div>

    </div>
  )
}

export default AppWrap(Header,'home')