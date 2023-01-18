import { useState, useRef, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { db } from "../db";
import FooterBar from "./FooterBar";
import ContentEditor, {ControlledUsage} from "./ContentEditor";
import DbContext from "../DbContext";

const EditNotes = () => {
    const { id } = useParams();
    const hasDetails = useRef(false);
    const [theNote, setTheNote] = useState({});

    const [recordValue, setRecordValue] = useState("");

    const {updateRecord} = useContext(DbContext);

    useEffect(() => {
        if (!hasDetails.current) {
            db.transaction('rw', [db.notes], async () => {
                const theNote = await db.notes.get({id: Number(id)});

                setTheNote(theNote);

                setRecordValue(theNote.remark);
            });
        }
        hasDetails.current = true;
    }, [id])
    

    const handleChangeRemark = (event) => {
        setRecordValue(event.target.value);
    }


    return ( 
        <div className="flex flex-col justify-self-center">
            <h4 className="m-auto">Details</h4>
            <small  className="m-auto">{theNote.datetime}</small>
            <br/>

            {/* <textarea className="border-2 mb-1"
                name="remark" 
                defaultValue={theNote.remark} 
                onChange={handleChangeRemark}
             /> */}

            <br/>

            <div className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" 
                onClick={() => updateRecord(Number(id), recordValue)}
            >
                Update
            </div>
            
             <p>{theNote.remark}</p>
            <ControlledUsage 
                name="remark" 
                value={theNote.remark} 
                onChange={handleChangeRemark}
            />
            {/* <ContentEditor /> */}

            <FooterBar visible={true} bookmarkListIsOpened={true} />
        </div>
     );
}
 
export default EditNotes;