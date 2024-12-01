import { useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [inputData, setInputData] = useState();
  const [allItem, setAllItem] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const changeHandler = (e) => {
    setInputData(e.target.value);
  };

  const keyDown = (e) =>{
    if(e.key === "Enter"){
      addTodo();
    }
  }
  const addTodo = () => {
    if (inputData.trim() === "") return;
    if (editIndex !== null) {
      const updateItems = [...allItem];
      updateItems[editIndex] = inputData;
      setAllItem(updateItems);
      setEditIndex(null);
    } else {
      setAllItem((items) => {
        const getdata = [...items, inputData];
        return getdata;
      });
    }

    setInputData("");
  };

  return (
    <>
      <div className="wrapper">
        <div className="todo-wrapper">
          <div className="input">
            <input
              type="text"
              placeholder="Your Item..."
              value={inputData || ""}
              onChange={changeHandler}
              onKeyDown={keyDown}
            />
            <span>
              <button
                onClick={addTodo}
                className={editIndex != null ?"update":"add" }
              >
                {editIndex != null ? "Update" : "Add"}
              </button>
            </span>
          </div>
        </div>
      </div>

      <TodoItem
        value={allItem}
        setInputData={setInputData}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
        setAllItem={setAllItem}
      />
    </>
  );
};

export default Todo;
