import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css";
import Form from "./Form";
import List from "./List";

function App() {
  const [data, setData] = useState([
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
  ]);

  const onSubmit = (formData) => {
    console.log("formData", formData);
    // data.push(formData);
    const tempArr = [...data, formData];
    setData(tempArr);
  };
  console.log("LIST : ", data);
  return (
    <div className="App">
      <h1>APP.JS</h1>

      <Form onSubmit={onSubmit} />
      <List kuchBhi={data} headingId="heading2" />
    </div>
  );
}
export default App;
