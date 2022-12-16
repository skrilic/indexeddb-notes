import Dexie from "dexie";
export const db = new Dexie('notesDatabase');
db.version(1).stores({
    notes: '++id, book, chapter, verse, datetime, remark'
})

