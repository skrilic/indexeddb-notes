import React from 'react';

function CardContent(props) {
    const card = props.card;
    return (
        <div className='flex flex-auto'>
            <div className="bg-slate-200 p-2 w-full">{card.remark}</div>
            <div className="bg-slate-200 p-2 w-full text-xs">{card.datetime}</div>
        </div>
    );
}

export default CardContent;