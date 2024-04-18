import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch user's tasks after component mounts
    const fetchTasks = async () => {
      try {
        const res = await axios.get('http://localhost:4000/todo', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setTasks(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
