import React, { useState } from 'react';
import files from "../data/files.json";

const ReadingPlanList = ({ files }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSelectFile = file => {
    setSelectedFile(file);
  };

  return (
    <div>
      <select onChange={e => handleSelectFile(e.target.value)}>
        {files.map(file => (
          <option key={file.name} value={file.name}>
            {file.name}
          </option>
        ))}
      </select>
      {selectedFile && (
        <ul>
          {files
            .find(file => file.name === selectedFile)
            .children.map(child => (
              <li key={child.name}>{child.name}</li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default ReadingPlanList;
