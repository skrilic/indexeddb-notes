import React, { useState } from 'react';
import BRP from "../data/BibleReadingPlan.json";
import { v4 as uuidv4 } from "uuid";

const ReadingPlanList = () => {
    const reads = BRP.readingPlan;
    // const files = Files.files;
    const [selectedFile, setSelectedFile] = useState(null);

  const handleSelectFile = file => {
    setSelectedFile(file);
  };

    const groupBy = function(inArray, key) {
        const initialValue = {};

        return inArray.reduce(
          function(accumulator, currentValue) {
              (accumulator[currentValue[key]] = accumulator[currentValue[key]] || []).push(currentValue);
              return accumulator;
          }, initialValue);
    };


    const dayReadings = groupBy(reads, "day");
    const keyCollection = [];

    for(var key in dayReadings) {
        if(dayReadings.hasOwnProperty(key)) {
            keyCollection.push(key);
        }
    }

    keyCollection.forEach(item => console.log(dayReadings[item]));

  return (
    <div>
        <ul>
            {keyCollection.map(item =>
                <li key={uuidv4()}>
                    {item}
                <ul>
                    <li key={uuidv4()}>
                        {dayReadings[item].map(dayRead => <p>{dayRead.book}, {dayRead.chapter}: {dayRead.verse}</p>)}
                    </li>
                </ul>
                </li>
            )}
        </ul>
    </div>
  );
};

export default ReadingPlanList;
