import { motion } from 'framer-motion';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="logo"
      >
        bodimak.lk
      </motion.div>
      <div className="buttons">
        <button className="sign-in">Sign in</button>
        <button className="sign-up">Sign up</button>
      </div>
    </header>
  );
}

export default Header;