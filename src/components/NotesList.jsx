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
        <ul>
            {
                notes?.map(note => <li key={note.id}>
                {note.datetime}: {note.book}, {note.chapter}:{note.verse}
                {note.remark}
                    <button onClick={() => deleteNote(note.id)}> 
                        Delete
                    </button>

                    <Link to={`/note/${note.id}`}>
                        View
                    </Link>
                </li>)
            }
        </ul>
      );
}
 
export default NotesList;