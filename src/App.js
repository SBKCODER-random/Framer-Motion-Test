import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div>
      <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
       className="save-button"
       onClick={() => null}
      
      >
      Launch Modal
      </motion.button>
    </div>
  );
}

export default App;
