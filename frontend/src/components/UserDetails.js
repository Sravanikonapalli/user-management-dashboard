import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import '../styles/styles.css';

function UserDetails() {
  const { id } = useParams(); 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://user-management-dashboard-9nys.onrender.com/${id}`);
        setUser(response.data);
      } catch (e) {
        console.log("Error fetching user:", e);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <p className="loading">Loading user details...</p>;
  if (!user) return <p className="error">User not found.</p>;

  return (
    <div className="user-details-container">
        <h1>User Details</h1>
      <div className="user-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Company:</strong> {user.company}</p>
        <p><strong>Street:</strong> {user.street}</p>
        <p><strong>City:</strong> {user.city}</p>
        <p><strong>ZIP:</strong> {user.zip}</p>
        <p><strong>Latitude:</strong> {user.latitude}</p>
        <p><strong>Longitude:</strong> {user.longitude}</p>
      </div>
      <Link to="/" className="back-btn">Back to Dashboard</Link>
    </div>
  );
}

export default UserDetails;
