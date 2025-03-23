const baseUrl = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export async function fetchAllBooks() {
  try {
    const response = await fetch(`${baseUrl}/books`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSingleBook(id) {
  try {
    const response = await fetch(`${baseUrl}/books/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function registerUser(firstname, lastname, email, password) {
  try {
    const response = await fetch(`${baseUrl}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function loginUser(email, password) {
  try {
    const response = await fetch(`${baseUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

// returns account details and an array of user's reservations
// reservations array includes reservation id and book title
export async function fetchUser(token) {
  try {
    const response = await fetch(`${baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function checkoutBook(id, token) {
  try {
    const response = await fetch(`${baseUrl}/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        bookId: id,
      }),
    });
    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getReservations(token) {
  try {
    const response = await fetch(`${baseUrl}/reservations`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

// reservation is deleted and book is returned and marked as available
export async function deleteReservation(id, token) {
  try {
    const response = await fetch(`${baseUrl}/reservations/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}
