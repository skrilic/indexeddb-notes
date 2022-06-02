import { useLiveQuery } from "dexie-react-hooks";
import { Link } from "react-router-dom";
import { db } from "../db";

import SwipeableList from "./SwipeableList/SwipeableList";
import SwipeableListItem from "./SwipeableList/SwipeableListItem";

const ListOfNotes = () => {

    function deleteNote(note_id) {
        db.notes
        .delete(note_id).then(function (deleteCount) {
            console.log("Deleted " + deleteCount + "objects");
        });
    }
    
    const notes = useLiveQuery(() => db.notes.toArray());

    return ( 
        <SwipeableList>
            {
                notes?.map(note => 
                    <SwipeableListItem
                    
                    background={
                    <>
                        {/* <button onClick={() => deleteNote(note.id)}> 
                            Delete
                        </button>

                        <Link className="button-area" to={`/note/${note.id}`}>
                            View
                        </Link> */}
                        <span>Delete</span>
                    </>
                    }
                    
                    key={note.id}>

                        <div className="note-content">
                            <span>
                            {note.datetime}: {note.book}, {note.chapter}:{note.verse}
                            {note.remark}
                            </span>
                        </div>
                            
                    </SwipeableListItem>
                )
            }

        </SwipeableList>
     );
}
 
export default ListOfNotes;