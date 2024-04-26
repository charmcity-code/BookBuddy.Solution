import { useEffect, useState } from "react";
import { deleteReservation, getReservations } from "../api";

const Reservations = ({ token }) => {
  const [reservations, setReservations] = useState([]);
  const [refresh, setRefresh] = useState(false);

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

  useEffect(() => {
    async function fetchReservations() {
      const APIResponse = await getReservations(token);
      setReservations(APIResponse.reservation);
    }
    fetchReservations();
  }, [refresh]);

  return (
    <>
      {reservations.length === 0 ? (
        <h3 style={{ color: "#D81E5B" }}>No Books Checked Out</h3>
      ) : (
        <h3>Books Checked Out</h3>
      )}

      {reservations &&
        reservations.map((reservation) => {
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
