import { Button, Modal, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import db from './firebase';

function Edit(props) {
    const useStyles = makeStyles((theme) => ({
    modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
     position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [update, setUpdate] = useState(' ');

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: update
        }, { merge: true });
        setOpen(false);
    }

    return (
        <div >
            <Modal className={classes.modal}
            open={open}
            onClose={event => setOpen(false)} 
            >

                <div className={classes.paper} >
                    < TextField
                placeholder={props.todo.todo}
                type="text"
                value={update}
                 onChange={event => setUpdate(event.target.value)} 
                className="input__tasks"
                label="Enter some text"
                variant="outlined" />
          
                    <Button variant="contained"
                        disabled={!update}
                        onClick={updateTodo}
                        color="secondary">Update Todo</Button>
                </div>
            </Modal>
            <EditIcon
                className="delete modal-edit"
                onClick={event => setOpen(true)} />
        </div>
    )
}

export default Edit
