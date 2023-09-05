import { createContext, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";

import { db } from "./db";

const DbContext = createContext();

export function DbContextProvider({ children }) {
    const [allRecords, setAllRecords] = useState([]);

    const tmpGet = useLiveQuery(() => db.notes.toArray());
    const getAllRecords = () => setAllRecords(tmpGet);

    async function addBookMarkAsync(book, chapter, verse, remark) {
        
        let datetime = (new Date()).toLocaleString();
        try {
            await db.notes.add({
                book,
                chapter,
                verse,
                datetime,
                remark
            });

        } catch (error) {
            window.alert(`Failed to add ${book} ${chapter},${verse}: Error ${error}`);
        }
    }

    const deleteRecord = (recordId) => {
        db.notes
                .delete(recordId).then(function (deleteCount) {
                    window.alert("Deleted " + deleteCount + " note");
            });
    }

    const updateRecord = (recordId, recordValue) => {
        db.notes.update(recordId, {remark: recordValue}).then(function (isUpdated) {
            if (isUpdated)
                if (window.confirm("Record successfully updated")) {
                    window.open("/", "_self");
                }
                else {
                    window.alert("Update canceled!");
                }
            else {
                window.alert("Nothing was updated - there were no remark with primary key: ", recordId);
                // console.log ("Nothing was updated - there were no remark with primary key: ", id);
            }
          });
    }

    return (
        <DbContext.Provider value={
            {
                allRecords, 
                getAllRecords,
                addBookMarkAsync,
                deleteRecord,
                updateRecord
            }
        }>
            {children}
        </DbContext.Provider>
    )
}

export default DbContext;