import { useState } from 'react';
import './App.css';
import { Task } from "./Task";

function App5() {

    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleChange = (event) => {
        setNewTask(event.target.value)
    }
    //  let arr = [];
    //  const name = "Amanda";
    //  arr.push(name)
    const addTask = () => {
        // const newTodoList = [...todoList, newTask];
        //... spread operator you want to create a new array that consist of todolist and Newtask

        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            completed: false,
        };
        setTodoList([...todoList, task]);
    }

    const deleteTask = (id) => {
        // const arr = ["nellie","jessica","alice"];
        // const newArr = arr.filter((name)=>{
        //     if(name === "nellie"){
        //         return false;
        //     }else {
        //         return true;
        //     }
        // })

        const newTodoList = todoList.filter((task) => {
            // if (task === taskName) {
            //     return false;
            // } else {
            //     return true;
            // }
            return task.id !== id
        })
        setTodoList(newTodoList);
    };

    const completeTask = (id) => {
        setTodoList(
            todoList.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: true };
                } else {
                    return task;
                }
            })
        );
    };
    return (
        <div className="App">
            <div className="addTask">
                <input onChange={handleChange} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="list">
                {todoList.map((task, key) => {
                    return (
                        <Task
                            key={key}
                            taskName={task.taskName}
                            id={task.id}
                            completed={task.completed}
                            deleteTask={deleteTask}
                            completeTask={completeTask}
                        />
                    )

                })}
            </div>
        </div>
    )
}

export default App5;