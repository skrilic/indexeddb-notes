import { motion } from "framer-motion";
import CardContent from "./CardContent";

const NoteCard = (props) => {
    const card = props.note;
    const handleDelete = props.handleDelete;
    
    return (
    <motion.div 
        whileHover={{ scale: 1.1, opacity: 0.8}} 
        whileTap={{ scale: 0.8, opacity: 1}}
        className="my-1"
    >
        {/*<div onClick={() => console.log("Expand note to view all the text entry...")}>*/}

            <CardContent card={card} handleDelete={handleDelete} />
        {/*</div>*/}
    </motion.div>
    )
}

export default NoteCard;