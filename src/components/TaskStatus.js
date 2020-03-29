import React, { Fragment } from "react";

export const TaskStatus = props => {
  return (
    <Fragment>
      <p> No Of Tasks :{props.task.length}</p>
      <p>
        Completed :{" "}
        {
          props.task.filter(ele => {
            if (ele.isCompleted) {
              return true;
            }
          }).length
        }
      </p>
    </Fragment>
  );
};
