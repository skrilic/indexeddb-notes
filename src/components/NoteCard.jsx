import { useState } from "react";
import { motion } from "framer-motion";
import { bgcolor } from "@mui/system";
import CardContent from "./CardContent";
import UpdateButton from "./UpdateButton";
import DeleteButton from "./DeleteButton";

const NoteCard = (props) => {
    const card = props.note;
    
    const [hideControl, setHideControl] = useState(false);

    
    return (
    <motion.div 
        whileHover={{ scale: 1.1, opacity: 0.8}} 
        whileTap={{ scale: 0.8, opacity: 1}} 
        className="flex flex-row justify-evenly my-1" 
    >
            <div onClick={() => setHideControl(!hideControl)}>
               <CardContent card={card} />
            </div>
            <div className="flex flex-row" style={hideControl ? { "visibility": "visible" } : { "visibility": "collapse" }}>
                <UpdateButton card_id={card.id} />
                <DeleteButton handleDelete={props.handleDelete}/>
            </div>
           
    </motion.div>)
}

export default NoteCard;