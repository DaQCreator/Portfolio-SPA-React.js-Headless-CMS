import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {['start', 'o mnie', 'oferta', 'projekty', 'skille', 'kontakt'].map((item, index) => (
        // eslint-disable-next-line
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#103783' } : {}}
        />
      ))}
    </div>
  )
}

export default NavigationDots;