import  React,{ useState, useEffect } from 'react';
import { Card, TextField, Button, } from '@material-ui/core';
import './tasks.css'
import Delete from './Delete';
import db from './firebase';
import firebase from 'firebase';

function Tasks(props) {
    const [ todo, setTodo] = useState( [  ] );
    const [ input, setInput] = useState('');

    const addTodo = (event)=>
    {
        event.preventDefault();
        db.collection('todos').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        // setTodo( [...todo, input ] );
        setInput(''); 
    }
     
    useEffect(( ) => {
        db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setTodo(snapshot.docs.map(doc => ({ id: doc.id , todo: doc.data().todo})
            ))
        })
    }, [ ]);
 
    return (
        <>
        <Card className='card__tasks'>
        <form>
                < TextField 
                type="text"
                value={input}
                 onChange={ event => setInput(event.target.value)} 
                 className="input__tasks" label="Enter some text"  variant="outlined" />
          
                <Button type="submit"  
                onClick={addTodo}  
                disabled={!input}
                className='btn__todo' variant='contained'  
                        color='secondary'>Add Todo</Button>
                    
        </form>
        </Card>
            {
                todo.map((todos, index) => {
                    return (
                        <Delete key={index} todo={todos} />
                     
                    );
                } )
            }
        </>
    )
}
export default Tasks
