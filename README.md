## User Management App

A simple user management system built with React (frontend), Express (backend), and SQLite (database). Users can add, edit, view, search, and delete records.

----
## Tech Stack

**Frontend:** React.js, React Router v6, Axios, React Icons

**Backend:** Node.js, Express.js

**Database:** SQLite

**Other Tools:** CORS for cross-origin requests

---

## Deployment and Live URLs

# Deployment
1. backend -> Render
2. Frontend -> Vercel

# Live URLs
- [Backend](https://user-management-dashboard-9nys.onrender.com)
- [Fronted](https://user-management-dashboard-silk.vercel.app/)
-----

## Setup Instructions
1. Clone the repository
```bash
git clone https://github.com/Sravanikonapalli/user-management-dashboard.git
cd user-management-dashboard-forty4
```

2. Backend Setup
```bash
cd backend   
npm install
```


Create a SQLite database file named database.db 

Run the server:
```bash
node server.js
```
The backend will run on http://localhost:5000

3. Frontend Setup
```bash
cd frontend   
npm install
npm start
```

The frontend will run on http://localhost:3000 and communicate with the backend.

4. Usage

**Navigate to Dashboard:** view all users

**Add User:** click the "+" icon

**Edit User:** click the edit icon next to a user

**Delete User:** click the delete icon and confirm

**Search Users:** type in the search bar by name or email