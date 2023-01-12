const DeleteButton = (props) => {
    return (
        <div className="w-fit p-2 cursor-pointer bg-red-700" onClick={props.handleDelete}>
            Delete
        </div>
    )
}

export default DeleteButton;