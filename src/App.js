import React, { Fragment, useState } from "react";
import { Task } from "./components/Task";
import { Title } from "./components/Title";
import { AddTask } from "./components/AddTask";
import { TaskStatus } from "./components/TaskStatus";
//import ReactDOM from "react-dom";

const App = () => {
  const [text, setText] = useState("");
  const [task, setTask] = useState([
    {
      text: "read",
      isCompleted: true
    },
    {
      text: "write",
      isCompleted: true
    },
    {
      text: "sleep",
      isCompleted: true
    }
  ]);
  const textChangeHandler = event => {
    event.persist();
    setText(event.target.value);
  };
  const addTaskHandler = () => {
    let newTask = { text, isCompleted: false };
    setTask([...task, newTask]);
    setText("");
  };
  const toggleTask = taskIndex => {
    setTask(
      task.map((ele, index) => {
        if (index === taskIndex) {
          return { ...ele, isCompleted: !ele.isCompleted };
        }
        return ele;
      })
    );
  };

  return (
    <Fragment>
      <AddTask
        text={text}
        addTaskHandler={addTaskHandler}
        textChangeHandler={textChangeHandler}
      />

      <Title title="Todod List" />
      <Task task={task} toggleTask={toggleTask} />
      <TaskStatus task={task} />
    </Fragment>
  );
};

export default App;
