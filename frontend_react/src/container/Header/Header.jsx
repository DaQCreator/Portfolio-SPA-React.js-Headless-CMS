import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.sass';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div>
              <p className="p-text">Full Stack Web Developer</p>
              <h1 className="head-text"><span style={{ marginRight: 8 }}>👋</span>DaQCreator</h1>
              <div>
                <p className="p1-text">Stworzę Twój projekt kompleksowo:</p>
                <ul>
                  <li><p className="li-text">Indywidualny lub gotowy szablon</p></li>
                  <li><p className="li-text">Nowoczesna grafika, projekt UI/UX</p></li>
                  <li><p className="li-text">Responsywność, prostota w obsłudze</p></li>
                  <li><p className="li-text">Szybkość działania i optymalizacja</p></li>
                  <li><p className="li-text">Szkolenie z obsługi</p></li>
                  <li><p className="li-text">Utrzymanie i rozwój istniejących projektów</p></li>
                </ul>
                <button type="button"><a href="#kontakt" className="p-text">Poproś o wycenę</a></button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>


      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.3, delayChildren: 0.3 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react_lg, images.sass, images.node].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>

    </div>

  )
}

export default AppWrap(Header, 'start');