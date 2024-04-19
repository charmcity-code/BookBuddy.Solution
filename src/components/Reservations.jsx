import { useEffect, useState } from "react";
import { deleteReservation, getReservations } from "../api";

const Reservations = ({ token }) => {
  const [reservations, setReservations] = useState([]);

  const handleClick = async (id) => {
    if (token) {
      try {
        await deleteReservation(id, token);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    async function fetchReservations() {
      try {
        const APIResponse = await getReservations(token);
        setReservations(APIResponse.reservation);
      } catch (error) {
        console.error(error);
      }
    }
    fetchReservations();
  }, []);
  return (
    <>
      <h3>Books Checked Out</h3>
      {reservations &&
        reservations.map((reservation) => {
          return (
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#D9DADE",
                margin: "10px",
                padding: "10px",
              }}
              key={reservation.id}
            >
              <h4>{reservation.title}</h4>
              <img
                style={{ height: "250px" }}
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

export default Reservations;
