/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import { useEffect, useState } from "react";
import { fetchUser } from "../api";
import Reservations from "./Reservations";

const Account = ({ token }) => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    async function fetchAccount() {
      const APIResponse = await fetchUser(token);
      setAccount(APIResponse);
    }
    fetchAccount();
  }, []);

  return (
    <>
      {!account?.id && (
        <h2 style={{ color: "#D81E5B" }}>
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

          <Reservations token={token} />
        </>
      )}
    </>
  );
};

export default Account;
