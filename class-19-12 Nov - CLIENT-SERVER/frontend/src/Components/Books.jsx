import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context";

function Books(props) {
  const [errors, setErrors] = useState("");
  const [books, setBooks] = useState([]);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/books");
      setBooks(res.data);
      console.log("BOOKS:", res);
    } catch (error) {
      console.log("BOOKS: ERROR", error);
      setErrors(error.response.data);
    }
  };

  const deleteBook = async (id) => {
    const x = window.confirm("Are you sure?");
    console.log(x);
    if (!x) return null;
    try {
      const res = await axios.delete("http://localhost:4000/api/books/" + id);

      fetchBooks();
      console.log("BOOKS:", res);
    } catch (error) {
      console.log("BOOKS: ERROR", error);
      setErrors(error.response.data);
    }
  };

  return (
    <>
      <hr />
      <h1>Books</h1>
      <div>
        <Link to="/add_book">Add Book</Link>
      </div>

      <hr />
      <table border={1}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Image</th>
            <th>Rating</th>
            <th>Available Books</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b._id}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.publisher}</td>
              <td>
                <img src={b.image} alt={b.title} width="100" />
              </td>
              <td>{b.ratings}</td>
              <td>{b.availableBooks}</td>
              <td>{b.stock}</td>
              <td>
                <Link to={"/update/" + b._id}>Update</Link>
                <button onClick={() => deleteBook(b._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <button
        onClick={() =>
          auth.signout(() => {
            navigate("/login");
            localStorage.clear();
          })
        }
      >
        LOGOUT
      </button>
    </>
  );
}

export default Books;
