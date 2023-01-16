import { createContext, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";

import { db } from "./db";

const DbContext = createContext();

export function DbContextProvider({ children }) {
    const [allRecords, setAllRecords] = useState([]);

    const tmpGet = useLiveQuery(() => db.notes.toArray());
    const getAllRecords = () => setAllRecords(tmpGet);

    const deleteRecord = (recordId) => {
        db.notes
                .delete(recordId).then(function (deleteCount) {
                    window.alert("Deleted " + deleteCount + " note");
            });
    }

    return (
        <DbContext.Provider value={
            {
                allRecords, 
                getAllRecords,
                deleteRecord
            }
        }>
            {children}
        </DbContext.Provider>
    )
}

export default DbContext;