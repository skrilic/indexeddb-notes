import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FooterBar from "./FooterBar";
import DbContext from "../DbContext";

const AddItemForm = () => {
    const [book, setBook] = useState("");
    const [chapter, setChapter] = useState("");
    const [verse, setVerse] = useState("");
    const [remark, setRemark] = useState("");
    const [status, setStatus] = useState("");
    
    const navigate = useNavigate();
    const redirectToHome = () => {
            //Redirect to the home page
            navigate("/");
    };

    const [navbarVisible, setNavbarVisible] = useState(true);


    const {addBookMarkAsync} = useContext(DbContext);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 110) {
                setNavbarVisible(true);
            } else if (window.scrollY < 140) {
                setNavbarVisible((prevVal) => setNavbarVisible(prevVal))
            } else {
                setNavbarVisible(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    function addBookMark() {
        addBookMarkAsync(book, chapter, verse, remark);
            // setStatus(`Bookmark ${book} ${chapter},${verse} successfully added. Got id ${id}`);
            setStatus(`Bookmark ${book} ${chapter},${verse} successfully added.`);
            setBook("");
            setChapter("");
            setVerse("");
            // datetime;
            setRemark("");

        redirectToHome();
    }


    return ( 
        <div className="flex flex-col">
            <h1 className="text-lg flex justify-center">Item</h1>
                <p className="text-red-700">
                {status}
                </p>

            <div className="flex flex-row justify-between mb-1">
                <p className="mr-1">Book:</p>
                <input
                    className="border"
                    type="text"
                    value={book}
                    onChange={ev => setBook(ev.target.value)}
                />
            </div>

            <div className="flex flex-row justify-between mb-1">
                <p className="mr-1">Chapter:</p>
                <input
                    className="border"
                    type="number"
                    value={chapter}
                    onChange={ev => setChapter(Number(ev.target.value))}
                />
            </div>

            <div className="flex flex-row justify-between">
                <p className="mr-1">Verse:</p>
                <input
                    className="border"
                    type="number"
                    value={verse}
                    onChange={ev => setVerse(Number(ev.target.value))}
                />
            </div>
            
            <div className="flex flex-col mb-1">
                <p className="mr-1">Note:</p>
                <textarea
                    className="border"
                    value={remark}
                    onChange={ev => setRemark(ev.target.value)}
                />
            </div>

            <button 
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" 
                onClick={addBookMark}
            >
                Add
            </button>

            <FooterBar visible={navbarVisible} homeIsOpened={false} />
        </div>
     );
}
 
export default AddItemForm;