import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setTodo(response.data);
      } catch (error) {
        console.log("Error fetching todo data", error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUser(response.data);
      } catch (error) {
        console.log("Error fetching users", error);
      }
    };

    const deleteTodo = async () => {
      try {
        await axios.delete("https://jsonplaceholder.typicode.com/todos/200");
      } catch (error) {
        console.log("Error deleting todo data", error);
      }
    };

    const deleteUser = async () => {
      try {
        await axios.delete("https://jsonplaceholder.typicode.com/users/1");
      } catch (error) {
        console.log("Error deleting user data", error);
      }
    };

    deleteUser();
    fetchUsers();
    fetchTodo();
  }, []);

  return (
    <div>
      <h3>Todo Data</h3>
      <ol>
        {todo.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ol>
        <br />
      <h3>Users Data</h3>
      <ol>
        {user.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
