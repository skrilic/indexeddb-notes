import { useState } from "react";
import { db } from "../db";

const AddBookMarkForm = () => {
    const [book, setBook] = useState("");
    const [chapter, setChapter] = useState("");
    const [verse, setVerse] = useState("");
    const [remark, setRemark] = useState("");
    const [status, setStatus] = useState("");

    async function addBookMark() {
        try {
            const id = await db.notes.add({
                book,
                chapter,
                verse,
                remark
            });

            setStatus(`Bookmark ${book} ${chapter},${verse} successfully added. Got id ${id}`);
            setBook("");
            setChapter("");
            setVerse("");
            setRemark("");
        } catch (error) {
            setStatus(`Failed to add ${book} ${chapter},${verse}: Error ${error}`);

        }
    }


    return ( 
        <div>
            <h2>BookMark</h2>
            <p>
            {status}
            </p>

            Book:
            <input
                type="text"
                value={book}
                onChange={ev => setBook(ev.target.value)}
            />

            Chapter:
            <input
                type="number"
                value={chapter}
                onChange={ev => setChapter(Number(ev.target.value))}
            />

            Verse:
            <input
                type="number"
                value={verse}
                onChange={ev => setVerse(Number(ev.target.value))}
            />
            
            Note:
            <input
                type="text"
                value={remark}
                onChange={ev => setRemark(ev.target.value)}
            />

            <button onClick={addBookMark}>
                Add
            </button>
        </div>
     );
}
 
export default AddBookMarkForm;