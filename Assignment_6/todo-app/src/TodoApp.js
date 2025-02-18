import React, { useState } from "react";
import "./TodoApp.css"; // Import CSS for styling

const TodoApp = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    // Function to add a new task
    const addTask = () => {
        if (task.trim() !== "") {
            const updatedTasks = [...tasks, task].sort();
            setTasks(updatedTasks);
            setTask(""); // Clear input field
        }
    };

    // Function to delete a task
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return ( <
        div className = "todo-container" >
        <
        h2 > 📋To - Do List < /h2> <
        div className = "input-container" >
        <
        input type = "text"
        value = { task }
        onChange = {
            (e) => setTask(e.target.value) }
        placeholder = "Enter a task..." /
        >
        <
        button onClick = { addTask }
        className = "add-btn" > Add < /button> <
        /div> <
        ul className = "task-list" > {
            tasks.map((t, index) => ( <
                li key = { index }
                className = "task-item" > { t } <
                button onClick = {
                    () => deleteTask(index) }
                className = "delete-btn" > ❌ < /button> <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
};

export default TodoApp;