import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearTodoList } from "../../redux/actions/todo";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { list } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(clearTodoList());
  };
  return (
    <div>
      <ul>
        {list.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
      <button
        onClick={handleClearList}
        className="clear-button"
      >
        Clear
      </button>
    </div>
  );
};

export default TodoList;