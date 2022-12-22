import { useEffect, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../db";

import FooterBar from "./FooterBar";

import { motion } from "framer-motion";



const NotesList = () => {

    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate("/");
    }


    function deleteNote(note_id) {
        if (window.confirm("Delete note?")) {
            db.notes
                .delete(note_id).then(function (deleteCount) {
                    window.alert("Deleted " + deleteCount + " note");
            });
        }
        else {
            window.open("/", "_self");
        }
    }
    
    const getNotes = useLiveQuery(() => db.notes.toArray());
    
    const [navbarVisible, setNavbarVisible] = useState(true);
    useEffect(() => {
        const handleScroll = event => {
            if (window.scrollY < 110) {
                setNavbarVisible(true);
            } else if (window.scrollY < 140) {
                setNavbarVisible((prevVal) => setNavbarVisible(prevVal))
            } else {
                setNavbarVisible(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    return (
        <div className="flex flex-col justify-center">
            <h2 className="text-base">List of notes</h2>
            <div className="bg-slate-500 border-x-slate-800 m-2 w-fit">
                <Link to="/note/add">Add note</Link>
            </div>

            <ul>
            {
                getNotes?.map(note => 
                        <motion.div 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.8 }} 
                        className="flex flex-row justify-evenly my-1"  
                        key={note.id}
                        >
                            <div className="bg-slate-500 w-1/2">{note.remark}</div>
                            <div className="bg-slate-300 w-1/4">{note.book} {note.chapter},{note.verse}</div>
                            <div className="bg-slate-500 w-1/4">{note.datetime}</div>
                            <div className="w-fit p-2">
                                <Link  to={`note/${note.id}`}>Update</Link>  
                            </div>
                            <div className="w-fit p-2 cursor-pointer" onClick={() => deleteNote(note.id)}>
                                Delete
                            </div>
                        </motion.div>
                )
            }
            </ul>

            <FooterBar visible={navbarVisible} homeIsOpened={true} />
        </div>
      );
}
 
export default NotesList;