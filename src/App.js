import React, { useState } from 'react';
import {Route,Routes} from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar';
import UserList from './Components/UserList';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
//import Private from './Routes/Private';
import Admin from './Pages/Admin';
function App() {
  //const [isAuth, setIsAuth] = useState(false)
  return (
    <div className="App">
      <NavBar/>
      <h1>Workshop Api</h1>
      
      <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='users'element={<UserList/>}/>
      <Route path='/:id'element={<Profile/>}/>
      <Route path='/admin'element={<Admin/>}/>

      <Route path='/*'element={<Error/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
