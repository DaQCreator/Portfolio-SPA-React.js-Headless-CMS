import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import { urlFor, client } from '../../client';
import './About.sass';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, [])

  return (
    <>
      <h2 className="head-text">Wiem że  <span>Dobry Projekt</span><br /> oznacza <span>Dobry Biznes</span></h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.3, delayChildren: 0.3 }}
          className="app__profiles-visual"
        >
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="overlay_circle-about"
            src={images.circle}
            alt="profile_circle"
          />
        </motion.div>

      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'o mnie',
  // "app__whitebg"
);
