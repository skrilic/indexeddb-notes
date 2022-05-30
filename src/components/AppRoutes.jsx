import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 

import AddBookMarkForm from "./AddBookMarkForm";

const NotesList = lazy(() => import("./NotesList"));

const AppRoutes = () => {
    return (  
        <div>
            <BrowserRouter>
                <Suspense fallback={<div>Učitavam...</div>}>
                    <Routes>
                        <Route path="/add" element={<AddBookMarkForm />}/>
                        <Route path="/" element={<NotesList />}/>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}
 
export default AppRoutes;