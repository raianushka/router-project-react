import './App.css';
import React,{ useState } from 'react';
import Navbar from './components/Navbar'
import {Routes , Route } from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import PrivateRoute from "./components/PrivateRoute"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className='w-screen h-screen bg-slate flex flex-col bg-slate-950'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element={
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <Dashboard/>
        </PrivateRoute>
        }/>

      </Routes>
    </div>
  );
}

export default App;
