import React from 'react';

function CardContent(props) {
    const card = props.card;
    return (
        <div  className="flex flex-row justify-between">
            <div className="bg-slate-500 p-2 w-3/4">{card.remark}</div>
            <div className="bg-slate-500 p-2 w-1/4 text-xs">{card.datetime}</div>
        </div>
    );
}

export default CardContent;