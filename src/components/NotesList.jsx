import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db";

const NotesList = () => {
    // const notes = useLiveQuery(
    //     async () => {
    //         const notes = await db.notes
    //         .where('chapter')
    //         .between(1, 1000)
    //         .toArray();

    //         return notes;
    //     }, []
    // );

    const notes = useLiveQuery(() => db.notes.toArray());

    return (
        <ul>
            {
                notes?.map(note => <li key={note.id}>
                {note.book}, {note.chapter}:{note.verse}
                {note.remark}
                </li>)
            }
        </ul>
      );
}
 
export default NotesList;