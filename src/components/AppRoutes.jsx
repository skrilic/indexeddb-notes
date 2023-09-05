import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 

// import AddItemForm from "./AddItemForm";
import AddNoteForm from "./AddNoteForm";
import EditNotes from "./EditNotes";
// import ListOfNotes from "./ListOfNotes";

const NotesList = lazy(() => import("./NotesList"));

const AppRoutes = () => {
    return (  
        <div>
            <BrowserRouter>
                <Suspense fallback={<div>Učitavam...</div>}>
                    <Routes>
                        <Route path="/" element={<NotesList />}/>
                        <Route path="/notes" element={<NotesList />}/>
                        {/*<Route path="/note/add" element={<AddItemForm />}/>*/}
                        <Route path="/note/add" element={<AddNoteForm />}/>
                        <Route path="/note/:id" element={<EditNotes />}/>
                        <Route path="*" element={<NotesList />}/>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}
 
export default AppRoutes;