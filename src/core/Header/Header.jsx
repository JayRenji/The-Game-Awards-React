import React from 'react';
import { Route, Link, Routes, useLocation } from "react-router-dom";


const Header = () => {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/podium'>Podium</Link>
        <Link to='/management'>Management</Link>
        <Link to='/login'>Login</Link>
    </div>
  )
}

export default Header