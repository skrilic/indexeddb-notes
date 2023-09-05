import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FooterBar from "./FooterBar";
import ContentEditor from "./ContentEditor";
import DbContext from "../DbContext";

const AddNoteForm = () => {
    const [remark, setRemark] = useState("");

    const navigate = useNavigate();

    const redirectToHome = () => {
            //Redirect to the home page
            navigate("/");
    };

    const {addBookMarkAsync} = useContext(DbContext);
    const addBookMark = () => {
        console.log(remark);
        addBookMarkAsync("book", "chapter", "verse", remark);
        setRemark("");

        redirectToHome();
    }

    const onChangeSimpleMde = (valMde) => {
        setRemark(valMde);
    }

    return (
        <div className="flex flex-col justify-self-center mb-10">
            <h4 className="m-auto">Details</h4>
            <br/>

            <br/>
            <button
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={addBookMark}
            >
                Add
            </button>

            <ContentEditor
                value=""
                onChange={onChangeSimpleMde}
                options={{}}
            />

            <FooterBar visible={true} bookmarkListIsOpened={true} />
        </div>
     );
}

export default AddNoteForm;