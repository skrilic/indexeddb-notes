import React from 'react';
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const ContentEditor = (props) =>{
    return(
        <SimpleMdeReact value={props.value} onChange={props.onChange} />
    )
}

export default ContentEditor;