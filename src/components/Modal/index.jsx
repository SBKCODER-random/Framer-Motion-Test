import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';

const Modal = ({ handleClose, text}) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
            onCLick={(e) => e.stopPropagation()}>

            </motion.div>
        </Backdrop>
    )
}