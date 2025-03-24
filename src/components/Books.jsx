/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllBooks } from "../api";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const navigate = useNavigate();

  const statusStyle = {
    color: "white",
    padding: "2px 6px",
  };

  useEffect(() => {
    async function fetchBooks() {
      const APIResponse = await fetchAllBooks();
      setBooks(APIResponse);
    }
    fetchBooks();
  }, []);

  const booksToDisplay = searchParam
    ? books.filter((book) => book.title.toLowerCase().includes(searchParam))
    : books;

  return (
    <>
      <div>
        <div>
          <label>
            Search:{" "}
            <input
              type="text"
              placeholder="search"
              onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
            />
          </label>
        </div>

        {booksToDisplay.map((book) => {
          return (
            <div
              style={{
                backgroundColor: "#ccc5b9",
                margin: "12px 0px",
                padding: "15px",
                borderRadius: "25px",
                display: "flex",
              }}
              key={book.id}
            >
              <div>
                <img
                  style={{ height: "250px" }}
                  src={book.coverimage}
                  alt={`${book.title} image`}
                />
                <br />
                <button
                  onClick={() => {
                    navigate(`books/${book.id}`);
                  }}
                >
                  Details
                </button>
              </div>
              <div style={{ marginLeft: "20px" }}>
                <h3>{book.title}</h3>
                <p>by: {book.author}</p>
                <p>{book.description}</p>
                <p>
                  <span
                    style={{
                      ...statusStyle,
                      backgroundColor: book.available ? "#157145" : "#D81E5B",
                    }}
                  >
                    {book.available
                      ? "Available"
                      : "This book is currently checked out."}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Books;
