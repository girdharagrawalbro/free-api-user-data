import React, { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const fetchData = () => {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((res) => {
        setUser(res.results[0]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="container my-3">
      <button onClick={fetchData} className="btn btn-outline-success">
        Fetch data
      </button>
      <br />
      <br />
      {user && (
        <div className="card">
          <img src={user.picture.large} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {user.name.first} {user.name.last}
            </h5>
            <p className="card-text">
              {user.location.street.number} {user.location.street.name},{" "}
              {user.location.city}, {user.location.state},{" "}
              {user.location.country} - {user.location.postcode}
            </p>
            <p>Email : {user.email}</p>
            <p>
              Date of Birth: {new Date(user.dob.date).toLocaleDateString()}{" "}
              (Age: {user.dob.age})
            </p>
            <p>Phone: {user.phone}</p>
            <p>Cell: {user.cell}</p>
            <p>Username: {user.login.username}</p>
            <p>Password: {user.login.password}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
