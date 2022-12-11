import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    publisher: "",
    image: "",
    stock: "",
    availableBooks: "",
    ratings: "",
  });
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const addBook = async () => {
    try {
      const res = await axios.post("http://localhost:4000/api/books", form);
      console.log("AddBook:", res);

      navigate("/books");
    } catch (error) {
      console.log("AddBook: ERROR", error);
      setErrors(error.response.data);
    }
  };
  return (
    <>
      <h1>AddBook</h1>

      <input
        type="text"
        value={form.title}
        placeholder="Title"
        onChange={(event) => setForm({ ...form, title: event.target.value })}
      />
      <input
        type="text"
        value={form.author}
        placeholder="Author"
        onChange={(event) => setForm({ ...form, author: event.target.value })}
      />
      <input
        type="text"
        value={form.publisher}
        placeholder="Publisher"
        onChange={(event) =>
          setForm({ ...form, publisher: event.target.value })
        }
      />
      <input
        type="text"
        value={form.image}
        placeholder="Image"
        onChange={(event) => setForm({ ...form, image: event.target.value })}
      />
      <input
        type="text"
        value={form.stock}
        placeholder="Stock"
        onChange={(event) => setForm({ ...form, stock: event.target.value })}
      />
      <input
        type="text"
        value={form.availableBooks}
        placeholder="Available Books"
        onChange={(event) =>
          setForm({ ...form, availableBooks: event.target.value })
        }
      />
      <input
        type="text"
        value={form.ratings}
        placeholder="Ratings"
        onChange={(event) => setForm({ ...form, ratings: event.target.value })}
      />
      <hr />
      {errors}
      <br />
      <button onClick={addBook}>Add Book</button>
    </>
  );
}

export default AddBook;
