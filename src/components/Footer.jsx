import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn('up', 'tween', 0.2, 1)}
      className="bg-tertiary py-8 mt-20"
    >
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white mb-4 md:mb-0">
            <h4 className="font-bold text-[18px]">Abdul Rahman</h4>
            <p className="text-secondary mt-1">Full Stack Developer</p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-secondary hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-secondary">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
