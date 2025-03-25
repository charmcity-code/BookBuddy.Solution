/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import { useEffect, useState } from "react";
import { fetchUser } from "../api";
import { deleteReservation } from "../api";

const Account = ({ token }) => {
  const [account, setAccount] = useState(null);
  const [refresh, setRefresh] = useState(false);
  console.log(account);

  useEffect(() => {
    async function fetchAccount() {
      const APIResponse = await fetchUser(token);
      setAccount(APIResponse);
    }
    fetchAccount();
  }, [refresh]);

  const handleClick = async (id) => {
    if (token) {
      try {
        await deleteReservation(id, token);
        setRefresh(!refresh);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      {!account?.id && (
        <h2 style={{ color: "#97153f" }}>
          Please log in to view your account details.
        </h2>
      )}
      {account?.id && (
        <>
          <div>
            <h2>Welcome {account.email}!</h2>
            <p>First name: {account.firstname}</p>
            <p>Last name: {account.lastname}</p>
          </div>

          {account?.reservations.length === 0 ? (
            <h3 style={{ color: "#97153f" }}>No Books Checked Out</h3>
          ) : (
            <h3>Books Checked Out</h3>
          )}
        </>
      )}

      {account?.reservations &&
        account.reservations.map((reservation) => {
          return (
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#ccc5b9",
                margin: "10px",
                padding: "15px",
                borderRadius: "25px",
              }}
              key={reservation.id}
            >
              <h4>{reservation.title}</h4>
              <img
                style={{ height: "200px" }}
                src={reservation.coverimage}
                alt={`${reservation.title} image`}
              />
              <br />
              <button onClick={() => handleClick(reservation.id)}>
                Return
              </button>
            </div>
          );
        })}
    </>
  );
};

export default Account;
