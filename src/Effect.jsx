import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  async function fetchInitialCount() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Failed to fetch:', error);
    }
  }
  useEffect(() => {
   
  alert("I am in useEffect state");
  }, []); 

  return (
    <div>
      <h1>Dynamic Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={fetchInitialCount}>Fetch</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );bu
}

export default Counter;
