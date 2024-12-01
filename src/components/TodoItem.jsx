const TodoItem = ({
  value,
  setInputData,
  editIndex,
  setEditIndex,
  setAllItem,
}) => {
  const editdata = (id) => {
    editIndex = value[id];
    setInputData(editIndex);
    setEditIndex(id);
  };

  const deletedata = (id) => {
    const deleteItem = value.filter((item,index)=> index!== id)
  setAllItem(deleteItem)

  };

  return (
    <>
      <div className="todo-item">
        {value.map((item, index) => {
          return (
            <div className="item" key={item}>
              <p>{item}</p>
              <div className="button">
                <span>
                  <button onClick={() => editdata(index)} className="edit">
                    Edit
                  </button>
                </span>
                <span>
                  <button onClick={() => deletedata(index)} className="delete">
                    Delete
                  </button>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoItem;
