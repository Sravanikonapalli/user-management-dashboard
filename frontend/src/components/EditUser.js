import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import '../styles/styles.css'

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/${id}`);
        const data = response.data;
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
        setCompany(data.company);
        setStreet(data.street);
        setCity(data.city);
        setZip(data.zip);
        setLatitude(data.latitude);
        setLongitude(data.longitude);
      } catch (err) {
        console.log("Error fetching user:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://user-management-dashboard-9nys.onrender.com/${id}`, {
        name, email, phone, company, street, city, zip, latitude, longitude
      });
      navigate("/");
    } catch (err) {
      console.log("Error updating user:", err);
      alert("Failed to update user.");
    }
  };

  if (loading) return <p>Loading user...</p>;

  return (
    <div className="user-details-container">
      <h1>Edit User</h1>
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
        <button type="submit" className="update-user">Update User</button>
      </form>
      <Link to="/" className="back-btn">Back to Dashboard</Link>
    </div>
  );
}

export default EditUser;
