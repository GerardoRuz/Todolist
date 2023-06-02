import React, { useState } from 'react';

function ToDoList() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks.splice(index, 1);
    setTaskList(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <input type="text" value={task} onChange={handleInputChange} />
      <button className="add-button" onClick={handleAddTask}>Añadir Tarea</button>
      <ul className="task-list">
        {taskList.map((task, index) => (
          <li key={index}>
            {task}
            <button className="delete-button" onClick={() => handleDeleteTask(index)}>Borrar</button>
          </li>
        ))}
      </ul>
      <p className="author">Gerardo Ismael Ruz Can</p>
    </div>
  );
}

export default ToDoList;
