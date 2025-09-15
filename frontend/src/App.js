import {Routes,Route} from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard';
import UserDetails from './components/UserDetails';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
 return (
  <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path='/users/:id' element={<UserDetails/>}/>
    <Route path='/users/add' element={<AddUser/>}/>
    <Route path="/users/edit/:id" element={<EditUser/>}/>
  </Routes>
 )
}

export default App;