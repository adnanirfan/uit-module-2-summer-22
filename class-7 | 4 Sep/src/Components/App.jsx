import { useState } from "react";
import "./App.css";
import Form from "./Form";
import List from "./List";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [editTodoIndex, setEditTodoIndex] = useState(null);

  const onAdd = (text) => {
    setList([...list, text]);
    setText("");
  };

  const onDeleteAll = () => {
    setList([]);
  };

  const onDelete = (indexToDelete) => {
    console.log("From onDelete");
    const newList = list.filter((value, index) => {
      return indexToDelete !== index;
    });
    setList(newList);
  };

  const onEdit = (indexToEdit) => {
    console.log("FROM onEdit", indexToEdit);
    // setText(list[indexToEdit]);
    setEditTodoIndex(indexToEdit);
  };

  const onUpdate = (index, newValue) => {
    const newList = [...list];
    newList[index] = newValue;
    setList(newList);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      {/* Input - Button(Add) - DELETE all */}
      <Form
        text={text}
        setText={setText}
        onAdd={onAdd}
        onDeleteAll={onDeleteAll}
      />
      <br />
      {/* List (Todo Text - Delete - Update - Complete) */}
      <List
        list={list}
        onDelete={onDelete}
        onEdit={onEdit}
        onUpdate={onUpdate}
        editTodoIndex={editTodoIndex}
        setEditTodoIndex={setEditTodoIndex}
      />
    </div>
  );
}
export default App;
