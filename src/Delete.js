import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { List, ListItemText } from '@material-ui/core';
import db from './firebase';
import Edit from './Edit';

function Delete(props) {

    return (
        <div className="deleteicon">
            <List className="list__items">
                 <ListItemText ClassName="add" primary={props.todo.todo}>
                </ListItemText>
                <DeleteIcon className="delete " onClick={event => 
                    db.collection('todos').doc(props.todo.id).delete()
                } />
                   <Edit  todo={props.todo}/>
            </List>
        </div>
    )
}

export default Delete
