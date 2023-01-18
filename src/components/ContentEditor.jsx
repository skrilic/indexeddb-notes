import React, {useState, useCallback} from 'react';
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const ContentEditor = () =>{
    return(
        <SimpleMdeReact />
    )
}

export const ControlledUsage = (string) => {
    const [value, setValue] = useState("Initial value");
  
    const onChange = useCallback((string) => {
      setValue(value);
    }, []);
  
    return <SimpleMdeReact value={value} onChange={onChange} />;
  };

export default ContentEditor;