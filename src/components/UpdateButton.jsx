import { Link } from "react-router-dom";

const UpdateButton = (props) => {
    return (
        <div className="w-fit p-2 bg-gray-300">
            <Link  to={`note/${props.card_id}`}>Update</Link>  
        </div>
    )
}

export default UpdateButton;