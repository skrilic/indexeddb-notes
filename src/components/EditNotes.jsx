import { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../db";

const EditNotes = () => {
    const { id } = useParams();
    const [theNote, setTheNote] = useState({});

    const [remarkValue, setRemarkValue] = useState("");

    db.transaction('rw', [db.notes], async () => {
        const theNote = await db.notes.get({id: Number(id)});
        // console.log(theNote);
        setTheNote(theNote);
        setRemarkValue(theNote.remark);
    });

    const handleChangeRemark = (event) => {
        setRemarkValue({remark: event.target.value});
    }

    const updateNote = () => {
        console.log("Remark Value: ", remarkValue);
        db.notes.update(Number(id), {remark: remarkValue}).then(function (updated) {
            if (updated)
              console.log (id, "Remark successfully updated");
            else
              console.log ("Nothing was updated - there were no remark with primary key: ", id);
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