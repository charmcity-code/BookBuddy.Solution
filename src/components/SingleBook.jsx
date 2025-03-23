/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { checkoutBook, fetchSingleBook } from "../api";

const SingleBook = ({ token }) => {
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const statusStyle = {
    color: "white",
    padding: "2px 6px",
  };

  const handleClick = async () => {
    if (token) {
      await checkoutBook(id, token);
      navigate("/account");
    }
  };

  const renderCheckoutSection = () => {
    const isAvailable = book.available;

    if (token) {
      return isAvailable ? (
        <button onClick={handleClick}>Checkout</button>
      ) : null;
    } else {
      return isAvailable ? (
        <p style={{ color: "#D81E5B" }}>
          Please <b>Login</b> or <b>Register</b> to checkout this book.
        </p>
      ) : null;
    }
  };

  useEffect(() => {
    async function fetchBook() {
      const APIResponse = await fetchSingleBook(id);
      setBook(APIResponse);
    }
    fetchBook();
  }, []);

  return (
    <>
      {book && (
        <div
          style={{
            backgroundColor: "#ccc5b9",
            margin: "10px",
            padding: "15px",
            borderRadius: "25px",
          }}
          key={book.id}
        >
          <h2>{book.title}</h2>
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
          <img
            style={{ height: "250px" }}
            src={book.coverimage}
            alt={`${book.title} image`}
          />
          <br />
          {renderCheckoutSection()}
        </div>
      )}
    </>
  );
};

export default SingleBook;
