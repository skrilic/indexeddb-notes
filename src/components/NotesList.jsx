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

import {
    ActionContent,
    Avatar,
    ItemColumn,
    ItemColumnCentered,
    ItemContent,
    ItemInfoLine,
    ItemNameLine,
    ItemRow,
  } from '../styledComponents';
//   import { colors } from '../data.js';

import './NotesList.css';

const NotesList = () => {

    const leadingActions = (note) => (
        <LeadingActions>
          <SwipeAction onClick={() => console.info('swipe action triggered')}>
            <Link className="button-area" to={`/note/${note.id}`}>
                View
            </Link> 
          </SwipeAction>
        </LeadingActions>
    );
      
    const trailingActions = (note_id) => (
        <TrailingActions>
            <SwipeAction
            destructive={true}
            onClick={() => deleteNote(note_id)}
            >
            <p className="button-area">
                Delete
            </p>   
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
        <div className="page-content">
        <h1 className="page-content__title">react-swipeable-list example</h1>
        <h2 className="page-content__subtitle">List of notes</h2>
            <div className="basic-swipeable-list__container">
            <SwipeableList
                style={{ backgroundColor: '#555878' }}
                fullSwipe={false}
                threshold={0.5}
                type={ListType.IOS}
            >
                {
                    notes?.map(note => 
                        <SwipeableListItem 
                            leadingActions={leadingActions(note)}
                            trailingActions={trailingActions(note.id)}
                            key={note.id}
                        >
                        <ItemContent>
                            <ItemRow>
                            <p>{note.remark}</p>
                            <ItemColumn>
                                <ItemNameLine>{note.book} {note.chapter},{note.verse}</ItemNameLine>
                                <ItemInfoLine>{note.datetime}</ItemInfoLine>
                            </ItemColumn>  
                            </ItemRow>
                        </ItemContent>
                           
                        </SwipeableListItem>
                    )
                }
            </SwipeableList>
            </div>
        </div>
      );
}
 
export default NotesList;