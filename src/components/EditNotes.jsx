import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../db";
import FooterBar from "./FooterBar";

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
                    window.open("/", "_self");
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
        <div className="flex flex-col justify-self-center">
            <h4 className="m-auto">Details</h4>
            <small  className="m-auto">{theNote.datetime}</small>
            <br/>
            <textarea className="border-2 mb-1"
                name="remark" 
                defaultValue={theNote.remark} 
                onChange={handleChangeRemark}
             />
            <br/>
            {/* <span className="bg-slate-400 m-1"><b>{theNote.book}</b> <i>{theNote.chapter}:{theNote.verse}</i></span> */}

            <div className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" 

            onClick={updateNote}
            >
                Update
            </div>
            <FooterBar visible={true} bookmarkListIsOpened={true} />
        </div>
     );
}
 
export default EditNotes;