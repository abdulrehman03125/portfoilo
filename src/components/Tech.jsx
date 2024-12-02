import { motion } from 'framer-motion';
import { styles } from '../styles';
import { technologies } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';

const Tech = () => {
  return (
    <div className="flex flex-col padding-x pt-10">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <motion.div 
        variants={fadeIn("", "", 0.1, 1)}
        className="flex flex-row flex-wrap justify-center gap-10 mt-10"
      >
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <div className="w-full h-full rounded-full bg-tertiary flex justify-center items-center hover:shadow-card transition-shadow duration-300">
              <img src={technology.icon} alt={technology.name} className="w-16 h-16 object-contain" />
            </div>
            <p className="text-center mt-2 text-secondary">{technology.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tech;
