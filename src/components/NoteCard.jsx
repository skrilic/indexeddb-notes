import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const NoteCard = (note) => {
    const card = note.note;
    const [hideControl, setHideControl] = useState(false);

    return (
    <motion.div 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.8 }} 
        className="flex flex-row justify-evenly my-1" 
    >
        <div onClick={() => setHideControl(!hideControl)}>
            <div className="bg-slate-500 w-3/4">{card.remark}</div>
            <div className="bg-slate-500 w-1/4 text-xs">{card.datetime}</div>
            </div>
            <div className="bg-gray-400 rounded-tr-lg" style={hideControl ? { "visibility": "visible" } : { "visibility": "collapse" }}>
                <div className="w-fit p-2">
                    <Link  to={`note/${card.id}`}>Update</Link>  
                </div>
                {/* <div className="w-fit p-2 cursor-pointer" onClick={() => deleteNote(card.id)}>
                    Delete
                </div> */}
            </div>
           
    </motion.div>)
}

export default NoteCard;