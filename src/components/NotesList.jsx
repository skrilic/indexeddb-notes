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
        <div>
            {
                notes?.map(note => <p key={note.id}>
                {note.datetime}: {note.book}, {note.chapter}:{note.verse}
                {note.remark}
                    <span className="button-area" onClick={() => deleteNote(note.id)}> 
                        Delete
                    </span>

                    <Link className="button-area" to={`/note/${note.id}`}>
                        View
                    </Link>
                </p>)
            }
        </div>
      );
}
 
export default NotesList;