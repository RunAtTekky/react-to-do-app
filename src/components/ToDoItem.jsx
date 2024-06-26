import React from "react";

const ToDoItem = ({
  title,
  description,
  isCompleted,
  updateHandler,
  deleteHandler,
  id,
}) => {
  return (
    <div className="todo">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        <input
          checked={isCompleted}
          onChange={() => updateHandler(id)}
          type="checkbox"
        />
        <button onClick={() => deleteHandler(id)} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
