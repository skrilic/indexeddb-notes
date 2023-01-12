import { useState } from "react";
import { motion } from "framer-motion";
import { bgcolor } from "@mui/system";
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
        <div className="flex flex-row justify-between" onClick={() => setHideControl(!hideControl)}>
            <div className="bg-slate-500 w-3/4">{card.remark}</div>
            <div className="bg-slate-500 w-1/4 text-xs">{card.datetime}</div>
            </div>
            <div className="flex flex-row bg-gray-400 rounded-tr-lg" style={hideControl ? { "visibility": "visible" } : { "visibility": "collapse" }}>
                <UpdateButton card_id={card.id} />
                <DeleteButton handleDelete={props.handleDelete}/>
            </div>
           
    </motion.div>)
}

export default NoteCard;