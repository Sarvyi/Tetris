import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
// import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import planet1 from '../assets/planet-01.png';
import planet2 from '../assets/planet-02.png';
import planet3 from '../assets/planet-03.png';
import planet4 from '../assets/planet-04.png';
import planet5 from '../assets/planet-05.png';
const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: planet1,
    title: 'The Hogwarts',
  },
  {
    id: 'world-2',
    imgUrl: planet2,
    title: 'The Upside Down',
  },
  {
    id: 'world-3',
    imgUrl: planet3,
    title: 'Kadirojo Permai',
  },
  {
    id: 'world-4',
    imgUrl:  planet4,
    title: 'Paradise Island',
  },
  {
    id: 'world-5',
    imgUrl: planet5,
    title: 'Hawkins Labs',
  },
];

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={<>Choose the world you want <br className="md:block hidden" /> to explore</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
