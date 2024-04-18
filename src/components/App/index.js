import React, { useState } from "react";

let initTasks = [
    { id: 1, title: 'Open yuor eyes', done: true },
    { id: 2, title: "Check smarthone", done: false },
    { id: 3, title: "Clear your teeth", done: true }
];

const App = () => {
    const [tasks, setTasks] = useState(initTasks);
    const changeTaskStatus = (tasks, el) => {
        setTasks(tasks.map(item => item.id === el.id ? { ...item, done: !item.done } : item));
    };
    return (
        <>
            <ul className="tasks-list">
                {
                    tasks.map(el => <li key={el.id} className={el.done ? "task-done" : ''} onClick={() => changeTaskStatus(tasks, el)}>{el.title}</li>)
                }
            </ul>
        </>
    );
};

export default App;
