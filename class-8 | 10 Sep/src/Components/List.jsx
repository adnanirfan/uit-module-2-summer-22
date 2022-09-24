function List(props) {
  return (
    <>
      <h1>List</h1>
      <ul>
        {props.list.map(function (todo, index) {
          return (
            <li>
              {props.editTodoIndex === index ? (
                <input
                  value={todo}
                  onChange={(e) => {
                    props.onUpdate(index, e.target.value);
                  }}
                />
              ) : (
                todo
              )}{" "}
              <button onClick={() => props.onDelete(index)}>Delete</button>
              <button
                onClick={() => {
                  if (props.editTodoIndex === index) {
                    props.setEditTodoIndex(null);
                  } else {
                    props.onEdit(index);
                  }
                }}
              >
                {props.editTodoIndex === index ? "DONE" : "Edit"}
              </button>
              <button>Complete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default List;
