import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todo";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handlesumbit", text);
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };
  return (
        <form onSubmit={handleSubmit}>
          <input
            className="todo-input"
            type="text"
            placeholder="Add Todo"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <button className="add-button" onClick={handleSubmit}>
            Add
          </button>
        </form>
  );
};

export default TodoInput;
