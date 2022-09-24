import { useEffect, useState } from "react";
import axios from "axios";
import List from "./List";

function User(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Did Mount");
    axios.get("https://jsonplaceholder.typicode.com/posts").then((e) => {
      setData(e.data);
    });
  }, []);
  console.log("Data :", data);

  return (
    <div>
      <h1 id="heading1">User's Posts </h1>
      <List kuchBhi={data} headingId="heading2" />
      <p>Number Of Posts {data.length}</p>
      Title: ... Body: ...
    </div>
  );
}
export default User;
