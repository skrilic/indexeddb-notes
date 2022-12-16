import { useLiveQuery } from "dexie-react-hooks";
import { Link, useNavigate } from "react-router-dom";
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

import './NotesList.css';

import { motion } from "framer-motion";



const NotesList = () => {

    const navigate = useNavigate();
    const redirectToHome = () => {
        navigate("/");
    }

    const leadingActions = (note) => (
        <LeadingActions>
          <SwipeAction onClick={() => console.info('swipe action triggered')}>
            <Link className="button-area" to={`/note/${note.id}`}>
                Update
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
            <div className="button-area-delete">
                Delete
            </div>   
            </SwipeAction>
        </TrailingActions>
    );

    function deleteNote(note_id) {
        // TODO: Pogledati u "Biblija-hrv" korištenje modal umjesto window.*
        if (window.confirm("Delete note?")) {
            db.notes
                .delete(note_id);
                // .delete(note_id).then(function (deleteCount) {
                //     window.alert("Deleted " + deleteCount + " note");
                // });
        }
        else {
            redirectToHome();
        }
    }

    
    const getNotes = useLiveQuery(() => db.notes.toArray());
    
    return (
        <div className="page-content">
            <h1 className="page-content__title">react-swipeable-list example</h1>
            <h2 className="page-content__subtitle">List of notes</h2>
            <div style={{ "width": "10rem", "height": "2rem" }}>
                <Link className="button-area" to="/note/add">Add note</Link>
            </div>
            <div className="basic-swipeable-list__container">
            <SwipeableList
                style={{ 
                    backgroundColor: '#555878', 
                    display: "flex", 
                    flexDirection: "column"
                }}
                fullSwipe={false}
                threshold={0.5}
                type={ListType.IOS}
            >
                {
                    getNotes?.map(note => 
                        <SwipeableListItem 
                            leadingActions={leadingActions(note)}
                            trailingActions={trailingActions(note.id)}
                            key={note.id}
                        >
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className="item-content">
                                <div className="item-remark">{note.remark}</div>
                                <div className="item-reference">{note.book} {note.chapter},{note.verse}</div>
                                <div className="item-datetime">{note.datetime}</div>
                            </motion.div>
                        </SwipeableListItem>
                    )
                }
            </SwipeableList>
            </div>
        </div>
      );
}
 
export default NotesList;