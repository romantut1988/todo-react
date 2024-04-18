import React, { useState } from "react";

let initTasks = [
    { id: 1, title: 'Open yuor eyes', done: true },
    { id: 2, title: "Check smarthone", done: false },
    { id: 3, title: "Brush your teeth", done: false }
];

const App = () => {
    const [tasks, setTasks] = useState(initTasks);
    const [newTasks, setNewTasks] = useState("");
    const changeTaskStatus = el => {
        setTasks(tasks.map(item => item.id === el.id ? { ...item, done: !item.done } : item));
    };
    const enterNewTask = (e) => setNewTasks(e.target.value);
    const addNewTask = () => {
        setTasks([
            ...tasks,
            { id: tasks.length + 1, title: newTasks, done: false }
        ]);
        setNewTasks("");
    };
    return (
        <>
            <div>
                <input type="text" value={newTasks} onChange={enterNewTask} />
                <button onClick={addNewTask}>Add new task</button>
            </div>
            <ul className="tasks-list">
                {
                    tasks.map(el => <li key={el.id} className={el.done ? "task-done" : ''} onClick={() => changeTaskStatus(el)}>{el.title}</li>)
                }
            </ul>
        </>
    );
};

export default App;
