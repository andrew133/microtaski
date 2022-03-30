import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export function App() {
    let tasks1 = [
        { id: 1, title: "HTML&CS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]
    let tasks2 = [
        { id: 1, title: "Hello world", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false }
    ]
    return (
        <div className="App">
            <Todolist siga={'What to learn1111'} tasks={tasks1} />
            <Todolist pomidor={'What to learn2222' } tasks={tasks2}/>


        </div>

    );
}



export default App;
