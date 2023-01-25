import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';

function CardContent(props) {
    const card = props.card;
    const [hideControl, setHideControl] = useState(false);

    return (
        <div className='flex flex-auto w-full justify-between bg-slate-200'
            onMouseEnter={() => setHideControl(true)}
            onMouseLeave={() => setHideControl(false)}
        >
            <div className="p-2 w-full">
                <ReactMarkdown children={card.remark} skipHtml={false} remarkPlugins={[remarkGfm]} />
            </div>
            <div className="p-2 w-full text-xs">{card.datetime}</div>

            <div className="flex flex-row" style={hideControl ? { "visibility": "visible" } : { "visibility": "collapse" }}>
                <UpdateButton card_id={card.id} />
                <DeleteButton handleDelete={props.handleDelete}/>
            </div>
        </div>
    );
}

export default CardContent;