import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';

const cardsData = [
  {
    imgSrc:
      'https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Venice',
    description: 'The City of Bridges',
  },
  {
    imgSrc:
      'https://images.pexels.com/photos/4916695/pexels-photo-4916695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Milan',
    description: 'The Little Madonna',
  },
  {
    imgSrc:
      'https://images.pexels.com/photos/16054007/pexels-photo-16054007/free-photo-of-facade-of-the-trattoria-antico-fattore-in-florence-italy.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Florence',
    description: 'The City of Lillies',
  },
  {
    imgSrc:
      'https://images.pexels.com/photos/2676602/pexels-photo-2676602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Rome',
    description: 'The Eternal City',
  },
];

const StickyScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const cardProps = useSpring({
    opacity: 1,
    transform: `translate3d(0, ${scrollY / 2}px, 0)`,
    config: config.wobbly,
  });

  return (
    <div>
      {cardsData.map((card, index) => (
        <animated.div
          key={index}
          className="card-wrapper"
          style={{
            ...cardProps,
            zIndex: cardsData.length - index,
          }}
        >
          <div className="card-contents">
            <img src={card.imgSrc} alt={card.title} />
            <div className="card-description">
              <h1>{card.title}</h1>
              <p>{card.description}</p>
            </div>
          </div>
        </animated.div>
      ))}
    </div>
  );
};

export default StickyScroll;
