import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [newTask, setNewTask] = useState<string>('');
  const [taskList, setTaskList] = useState<string[]>([]);

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTaskList((doneTask) => [...doneTask, newTask]);
    setNewTask('');
  };

  return (
    <div className='container'>
      <h1>Todo App</h1>
      <div>
        <input
          type='text'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Add a new task...'
        />
        <button className='button-add' role='button' onClick={handleAddTask}>
          ADD
        </button>
      </div>
      <div className='container-task'>
        {taskList.map((task, index) => (
          <div className='task' key={index}>
            <span>{task}</span>
            <button className='button-delete' role='button'>
              Delete
              <FontAwesomeIcon
                icon={faTrash as IconProp}
                style={{ marginLeft: '10px', color: '#e30d0d' }}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
