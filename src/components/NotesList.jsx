import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db";

const NotesList = () => {

    function deleteNote(note_id) {
        db.notes
        .delete(note_id).then(function (deleteCount) {
            console.log("Deleted " + deleteCount + "objects");
        });
    }

    function editNote(note_id) {
        return db.transaction('r', [db.notes], async () => {
            const noteDetails = await db.notes.get({id: note_id});
            console.log(noteDetails);
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
                <button onClick={() => editNote(note.id)}> 
                    Edit
                </button>
                </li>)
            }
        </ul>
      );
}
 
export default NotesList;