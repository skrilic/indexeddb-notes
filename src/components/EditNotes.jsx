import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../db";

const EditNotes = () => {
    const { id } = useParams();
    const hasDetails = useRef(false);
    const [theNote, setTheNote] = useState({});

    const [remarkValue, setRemarkValue] = useState("");

    useEffect(() => {
        if (!hasDetails.current) {
            db.transaction('rw', [db.notes], async () => {
                const theNote = await db.notes.get({id: Number(id)});
                // console.log(theNote);
                setTheNote(theNote);
                setRemarkValue(theNote.remark);
            });
        }
        hasDetails.current = true;
    }, [id])
    

    const handleChangeRemark = (event) => {
        setRemarkValue(event.target.value);
    }

    const updateNote = () => {
        db.notes.update(Number(id), {remark: remarkValue}).then(function (updated) {
            if (updated)
                if (window.confirm("Remark successfully updated")) {
                    window.open("/notes", "Thanks for Visiting!");
                }
                else {
                    window.alert("Update canceled!");
                }
            else {
                window.alert("Nothing was updated - there were no remark with primary key: ", id);
                // console.log ("Nothing was updated - there were no remark with primary key: ", id);
            }
          });
    }

    return ( 
        <div style={{ "alignItems": "center" }}>
        <h4>Details</h4>
            <small>{theNote.datetime}</small>
            <br/>
            <textarea 
                name="remark" 
                defaultValue={theNote.remark} 
                onChange={handleChangeRemark}
             />
            <br/>
            <span><b>{theNote.book}</b> <i>{theNote.chapter}:{theNote.verse}</i></span>
            <div className="button-area" onClick={updateNote}>Update</div>
        </div>
     );
}
 
export default EditNotes;