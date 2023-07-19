import React, { useState } from 'react';
import '../Assets/css/DropdownMenu.css';
import { AccountCircle } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className='drop' onClick={handleToggle}>
      <Grid container alignItems="center" spacing={1}>
                    <Grid item><AccountCircle/></Grid>
                    <Grid item><span>Account</span></Grid>
                </Grid>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li><Link to="/profile" style={{textDecoration:'none'}} >Profile</Link></li>
          <li><Link style={{textDecoration:'none'}} >Settings</Link></li>
          <li><Link to="/login" style={{textDecoration:'none'}} >Logout</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
