import { FaPlusCircle } from "react-icons/fa";
import '../styles/styles.css';
import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdEdit,MdDelete } from "react-icons/md";

class Dashboard extends Component {
  state = {
    users: [],
    search: "",
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      const response = await axios.get("https://user-management-dashboard-9nys.onrender.com");
      this.setState({ users: response.data });
    } catch (e) {
      console.log(e);
    }
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  deleteUser=async (id)=>{
    const {users}=this.state
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;
    try {
        await axios.delete(`https://user-management-dashboard-9nys.onrender.com/${id}`)
        this.setState({users:users.filter((user)=>user.id!==id)});
    } catch (e) {
        console.log("Error deleting user",e)
    }
  }

  render() {
    const { users, search } = this.state;

    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="dashboard">
        <div className="header">
          <h1>USERS</h1>
          <Link to="/users/add"><FaPlusCircle size={30} /></Link>         
        </div>

        <input
          type="text"
          placeholder="Search by name, email..."
          value={search}
          onChange={this.handleSearch}
          className="search-bar"
        />

        <div className="users-list">
          {filteredUsers.map((user) => (
            <div key={user.id} className="each-user-card">
                <div>
                  <h1>{user.name}</h1>
                  <p>{user.email}</p>
                  <Link to={`/users/${user.id}`}>
                    <p>MORE INFO</p>
                  </Link>
                </div>
                <div className="buttons">
                  <Link to={`/users/edit/${user.id}`}>
                    <button className="edit-btn"><MdEdit /></button>
                  </Link>
                  <button onClick={()=>this.deleteUser(user.id)} className="delete-btn"><MdDelete/></button>
                </div> 
              </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;
