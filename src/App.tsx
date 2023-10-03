import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  // States
  const [newTask, setNewTask] = useState<string>('');
  const [taskList, setTaskList] = useState<string[]>([]);
  const [countTask, setCountTask] = useState<number>(0);

  // Handle events
  const handleAddTask = () => {
    // Manage when the user wants to add a new task
    if (newTask.trim() === '') return; // If the value from the input is empty just return '' and don't add nothing
    setTaskList((doneTask) => [...doneTask, newTask]); // Add the new task to the array
    setCountTask(countTask + 1); // Increment the counter of tasks
    setNewTask(''); // Reset the value for the new task to ''
  };

  const handleDeleteTask = (index: number) => {
    // Control when the user wants to delete a task
    setTaskList((tasks) => tasks.filter((value, i) => i != index)); // Use filter to search the task to delete with the index of the element to search
    setCountTask(countTask - 1); // Decrement the counter of tasks
  };

  const handleDeleteAllTask = () => {
    // Just reset the values for the states
    setTaskList([]);
    setCountTask(0);
  };

  return (
    <div className='container'>
      <h1>Todo App</h1>
      <div className='container-search'>
        <input
          type='text'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Add a new task...'
        />
        <button className='button-add' role='button' onClick={handleAddTask}>
          + Add a Task
        </button>
      </div>
      <div className='container-task'>
        <header>
          <p>{countTask === 1 ? `${countTask} task` : `${countTask} tasks`}</p>
          <button
            className='button-delete'
            role='button'
            onClick={handleDeleteAllTask}>
            Delete All Tasks
            <FontAwesomeIcon
              icon={faTrash as IconProp}
              style={{ marginLeft: '10px', color: '#ffffff' }}
            />
          </button>
        </header>
        {taskList.map((task, index) => (
          <ul key={index}>
            <li className='task'>
              <span>{task}</span>
              <button
                className='button-delete'
                role='button'
                onClick={() => handleDeleteTask(index)}>
                Delete
                <FontAwesomeIcon
                  icon={faTrash as IconProp}
                  style={{ marginLeft: '10px', color: '#ffffff' }}
                />
              </button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
