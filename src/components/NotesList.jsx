import { useEffect, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../db";

import FooterBar from "./FooterBar";
import NoteCard from "./NoteCard";


const NotesList = () => {

    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate("/");
    }

    function deleteNote(note_id) {
        console.log(`DELETE the note ${note_id} clicked!`)
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
        <div className="flex flex-col justify-center w-full">
            <h2 className="text-base">List of notes</h2>
            <div className="bg-slate-500 border-x-slate-800 m-2 w-fit">
                <Link to="/note/add">Add note</Link>
            </div>

            <ul>
            {
                getNotes?.map(note => 
                    <NoteCard note={note} handleDelete={() => deleteNote(note.id)} key={note.id}/>
                )
            }
            </ul>

            <FooterBar visible={navbarVisible} homeIsOpened={true} />
        </div>
      );
}
 
export default NotesList;