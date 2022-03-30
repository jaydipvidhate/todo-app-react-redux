import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "./action";

function App() {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();
  const newList = useSelector((data) => data.list);
  // console.log(newList);
  const handleSubmit = () => {
    if (!task) {
      return alert("Plz fill Task");
    }
    const key = Math.floor(100000 + Math.random() * 9000).toString();
    const taskData = {
      id: key,
      task: task,
    };
    dispatch(addTask(taskData));
    setTask("");
  };
  return (
    <div className="App">
      <h2 className="heading">ToDo List</h2>
      <div className="inputWrapper">
        <input
          type="text"
          placeholder="New TODO"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={() => handleSubmit()}>Add New</button>
      </div>
      <div className="buttonsWrapper">
        <button className="active">All TODO's</button>
        <button>Active TODO</button>
        <button>Completed TODO</button>
      </div>
      <div className="todoListWrapper">
        {newList !== []
          ? newList.map((data, index) => {
              return (
                <div key={data.id} className="todoCardWrapper">
                  <input type="checkbox" name="" id="" />
                  <div className="todoCard">
                    <h2>{data.task}</h2>
                    <h4 onClick={() => dispatch(deleteTask(data.id))}>
                      Delete
                    </h4>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default App;
