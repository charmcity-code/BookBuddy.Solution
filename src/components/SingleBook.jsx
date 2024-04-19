/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { checkoutBook, fetchSingleBook } from "../api";

const SingleBook = ({ token }) => {
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleClick = async () => {
    if (token) {
      try {
        await checkoutBook(id, token);
        navigate("/account");
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    async function fetchBook() {
      try {
        const APIResponse = await fetchSingleBook(id);
        setBook(APIResponse.book);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBook();
  }, []);

  return (
    <>
      {book && (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.description}</p>
          <img
            style={{ height: "250px" }}
            src={book.coverimage}
            alt={`${book.title} image`}
          />
          <br />
          {token ? (
            <button onClick={handleClick}>Checkout</button>
          ) : (
            <p>Please Login or Register to checkout this book.</p>
          )}
        </div>
      )}
    </>
  );
};

export default SingleBook;
