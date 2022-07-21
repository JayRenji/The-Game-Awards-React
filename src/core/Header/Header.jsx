import React from 'react';
import { Route, Link, Routes, useLocation } from "react-router-dom";


const Header = () => {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/podium'>Podium</Link>
        <Link to='/management'>Management</Link>
    </div>
  )
}

export default Header