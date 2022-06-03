import { useLiveQuery } from "dexie-react-hooks";
import { Link } from "react-router-dom";
import { db } from "../db";

import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
    Type as ListType,
  } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

const NotesList = () => {

    const leadingActions = () => (
        <LeadingActions>
          <SwipeAction onClick={() => console.info('swipe action triggered')}>
            View
          </SwipeAction>
        </LeadingActions>
    );
      
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
            destructive={true}
            onClick={() => console.info('swipe action triggered')}
            >
                Delete
            </SwipeAction>
        </TrailingActions>
    );

    function deleteNote(note_id) {
        db.notes
        .delete(note_id).then(function (deleteCount) {
            console.log("Deleted " + deleteCount + "objects");
        });
    }

    const notes = useLiveQuery(() => db.notes.toArray());

    return (
        <SwipeableList
            fullSwipe={false}
            type={ListType.IOS}
        >
            {
                notes?.map(note => 
                    <SwipeableListItem 
                        leadingActions={leadingActions()}
                        trailingActions={trailingActions()}
                        key={note.id}
                    >
         
                        <i>
                        {note.datetime}: {note.book}, {note.chapter}:{note.verse}
                        </i>
                        <Link to={`/note/${note.id}`}>
                            {note.remark}
                        </Link>
    
                        {/* 
                            <div className="button-area" onClick={() => deleteNote(note.id)}> 
                                Delete
                            </div>

                            <Link className="button-area" to={`/note/${note.id}`}>
                                View
                            </Link> 
                        */}
                    </SwipeableListItem>
                )
            }
        </SwipeableList>
      );
}
 
export default NotesList;