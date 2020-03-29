import React, { Fragment } from "react";

export const Task = props => {
  return (
    <Fragment>
      <ul>
        {props.task.map((ele, index) => {
          const onToggle = () => {
            props.toggleTask(index);
          };
          return (
            <li>
              <input
                type="checkbox"
                checked={ele.isCompleted}
                onClick={onToggle}
              />
              {ele.text}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};
