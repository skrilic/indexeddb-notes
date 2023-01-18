import React, {useState, useCallback, useContext} from 'react';
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";


const ContentEditor = () =>{
    return(
        <SimpleMdeReact />
    )
}

export const ControlledUsage = (string) => {
    const [value, setValue] = useState("");

    const onChange = useCallback((string) => {
      setValue(value);
    }, [value]);
  
    return <SimpleMdeReact value={value} onChange={onChange} />;
  };

export default ContentEditor;