import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import FooterBar from "./FooterBar";
import NoteCard from "./NoteCard";
import DbContext from "../DbContext";

const NotesList = () => {

    const { allRecords, getAllRecords, deleteRecord } = useContext(DbContext);

    useEffect(() => {
        getAllRecords();
    },)

    function deleteNote(note_id) {
        console.log(`DELETE the note ${note_id} clicked!`)
        if (window.confirm("Delete note?")) {
            deleteRecord(note_id);
            window.open("/", "_self");
        }
        else {
            window.open("/", "_self");
        }
    }

    const [navbarVisible, setNavbarVisible] = useState(true);


    useEffect(() => {
        const handleScroll = () => {
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
        <div className="flex flex-col justify-center w-11/12 ml-auto mr-auto mt-4 mb-10">
            <div
                className="inline-block px-6 py-2.5 bg-blue-600 text-center text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
                <Link to="/note/add">Add new note</Link>
            </div>
            <h2 className="text-base flex justify-center">List of notes</h2>

            <div className="w-full">
                {
                    allRecords?.map(note =>
                        <NoteCard note={note} handleDelete={() => deleteNote(note.id)} key={note.id} />
                    )
                }
            </div>

            <FooterBar visible={navbarVisible} homeIsOpened={true} />
        </div>
    );
}

export default NotesList;