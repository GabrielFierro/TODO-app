import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [newTask, setNewTask] = useState<string>('');
  const [taskList, setTaskList] = useState<string[]>([]);
  const [countTask, setCountTask] = useState<number>(0);

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTaskList((doneTask) => [...doneTask, newTask]);
    setCountTask(countTask + 1);
    setNewTask('');
  };

  const handleDeleteTask = (index: number) => {
    setTaskList((tasks) => tasks.filter((value, i) => i != index));
    setCountTask(countTask - 1);
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
        <p>{countTask === 1 ? `${countTask} task` : `${countTask} tasks`}</p>
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
