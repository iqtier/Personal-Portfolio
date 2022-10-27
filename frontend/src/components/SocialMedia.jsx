import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs';
import {FaFacebookF,FaGithub,FaLinkedin} from 'react-icons/fa';
<script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>

const SocialMedia = ({position}) => {
  return (
    <div className={`app__social ${position==='bottom'?"footer_social":""}`}>
        <div className = "social-link github">
          <a href="https://github.com/iqtier" target="_blank" >< FaGithub /></a>
        </div>
        <div className = "social-link linkedin">
          <a href="https://www.linkedin.com/in/iqtier-ahammad-774327148/" target="_blank"><FaLinkedin/></a>
        </div>
        <div className = "social-link twiter">
          <a href="https://twitter.com/iqttaki" target="_blank"><BsTwitter /></a>
        </div>
        <div className = "social-link instagram">
          <a href="https://instagram.com/iqtier" target="_blank"><BsInstagram /></a>
        </div >
        <div className = "social-link facebook" >
          <a href ='https://www.facebook.com/Iq.u.ahammad/' target="_blank"><FaFacebookF /></a>  
        </div>

    </div>

  )
}

export default SocialMedia