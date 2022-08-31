import React from 'react';
import { BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs';
import { MdMarkEmailUnread } from 'react-icons/md';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="mailto:daqcreator@gmail.com"><MdMarkEmailUnread /></a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/daniel-w%C3%B3jtowicz-daq/"><BsLinkedin /></a>
      </div>
      <div>
        <a href="https://www.instagram.com/daqcreator/"><BsInstagram /></a>
      </div>
      <div>
        <BsFacebook />
      </div>
    </div>
  )
}

export default SocialMedia;