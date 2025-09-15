import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://user-management-dashboard-9nys.onrender.com/", {
        name,
        email,
        phone,
        company,
        street,
        city,
        zip,
        latitude,
        longitude,
      });
      navigate("/");
    } catch (err) {
      console.log("Error adding user:", err);
      alert("Failed to add user.");
    }
  };

  return (
    <div className="user-details-container">
      <h1>Add New User</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>Name</label>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Email</label>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Phone Number</label>
        <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <label>Company Name</label>
        <input placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
        <label>Street</label>
        <input placeholder="Street" value={street} onChange={(e) => setStreet(e.target.value)} />
        <label>City</label>
        <input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
        <label>ZIP Code</label>
        <input placeholder="ZIP" value={zip} onChange={(e) => setZip(e.target.value)} />
        <label>Latitude</label>
        <input placeholder="Latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
        <label>Longitude</label>
        <input placeholder="Longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
        <button type="submit" className="update-user">Add User</button>
      </form>
      <Link to="/" className="back-btn">Back to Dashboard</Link>
    </div>
  );
}

export default AddUser;
