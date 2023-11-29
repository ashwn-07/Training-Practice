import React, { useEffect } from "react";
import { useState } from "react";
import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import axios from "../../api/axios.js";

const Reducers = () => {
  const [products, setProducts] = useState([]);

  
  useEffect(async () => {
    const response = await axios.get("/").then((res) => {
      setTasks(res);
    });
    setTasks();
  }, []);
  

  function handleAddTask(text) {
    setTasks([
      ...products,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task) {
    setTasks(
      products.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(products.filter((t) => t.id !== taskId));
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      {/* {  <AddTask onAddTask={handleAddTask} />} */}
      <TaskList
        products={products}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default Reducers;
