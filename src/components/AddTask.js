import React from "react";
export const AddTask = props => {
  return (
    <div>
      <input
        value={props.text}
        placeholder="Add new task"
        onChange={props.textChangeHandler}
      />
      <button onClick={props.addTaskHandler}>Add</button>
    </div>
  );
};
