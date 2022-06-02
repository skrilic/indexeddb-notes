import "./noteslist.css";
import { useLiveQuery } from "dexie-react-hooks";
import { Link } from "react-router-dom";
import { db } from "../db";

const NotesList = () => {

    function deleteNote(note_id) {
        db.notes
        .delete(note_id).then(function (deleteCount) {
            console.log("Deleted " + deleteCount + "objects");
        });
    }

    const notes = useLiveQuery(() => db.notes.toArray());

    return (
        <div className="notes-list">
            {
                notes?.map(note => 
                    <div className="notes-item" key={note.id}>
                            <div className="note-content">
                                {note.datetime}: {note.book}, {note.chapter}:{note.verse}
                                {note.remark}
                            </div>
                            <div className="button-area" onClick={() => deleteNote(note.id)}> 
                                Delete
                            </div>

                            <Link className="button-area" to={`/note/${note.id}`}>
                                View
                            </Link>
                    </div>
                )
            }
        </div>
      );
}
 
export default NotesList;