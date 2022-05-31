import { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../db";

const EditNotes = () => {
    const { id } = useParams();
    const [theNote, setTheNote] = useState({});

    const detailsNote = db.transaction('rw', [db.notes], async () => {
        const theNote = await db.notes.get({id: Number(id)});
        // console.log(theNote);
        setTheNote(theNote);
    });
    

    return ( 
        <div>
        <h4>Details</h4>
            <small>{theNote.datetime}</small>
            <textarea name="remark" value={theNote.remark}>
                
            </textarea>
            <span>{theNote.book}{theNote.chapter}{theNote.verse}</span>
        </div>
     );
}
 
export default EditNotes;