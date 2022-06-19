import { motion } from 'framer-motion';
import './App.css';
import Modal from './components/Modal';
import {useState }  from 'react';
function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)
  return (
    <div>
      <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
       className="save-button"
       onClick={() => (modalOpen ? close() : open())}
      
      >
      Launch Modal
      </motion.button>

      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}/>}
    </div>
  );
}

export default App;
