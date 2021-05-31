import React from "react";
import { Card} from '@material-ui/core' ;
import './card.css';
import Tasks from './Tasks';


function App() {
  return ( 
    <div className="app">
      <div>
          <Card className="card__header">
            <h1 className="card__heading">Todo List....</h1>
            </Card>
            <Tasks />
      </div>
        </div>
  );
}

export default App;
