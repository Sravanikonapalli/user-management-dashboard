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

-------
## API Endpoints (for Postman)

Base URL (local): http://localhost:5000
Base URL (deployed): https://user-management-dashboard-9nys.onrender.com

1. Get all users

GET /
Response:

[
    {
    "id": 1,
    "name": "sravani",
    "email": "sravani@gmail.com",
    "phone": "9381037572",
    "company": "Forty4",
    "street": "gattu kothakota",
    "city": "madanapalle",
    "zip": "517325",
    "latitude": 13.556,
    "longitude": 78.501
  }
]

2. Get user by ID

GET /:id
Example: /1

3. Add new user

POST /
Request Body (JSON):

{
  "name": "testcase",
  "email": "test@example.com",
  "phone": "9876543210",
  "company": "XYZ Ltd",
  "street": "Park Lane",
  "city": "Mumbai",
  "zip": "400001",
  "latitude": "19.0760",
  "longitude": "72.8777"
}


Response:

{ "userId": 2 }

4. Update user

PUT /:id
Request Body (JSON):

{
  "name": "Alice Updated",
  "email": "alice.updated@example.com",
  "phone": "9876500000",
  "company": "XYZ Ltd",
  "street": "Park Lane",
  "city": "Mumbai",
  "zip": "400001",
  "latitude": "19.0760",
  "longitude": "72.8777"
}


Response:

{ "message": "User updated successfully" }

5. Delete user

DELETE /:id
Response:

{ "message": "User deleted successfully" }