import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from '../theme_toggle/ThemeToggle';
import YearsDropdown from '../years_dropdown/YearsDropdown';
import phishInLogo from '../../phish-in-logo.png';
import phishInPartyLogo from '../../phish-in-party-multicolor-logo.png';
import './Navbar.css';

const Navbar = () => {
  const { dark } = useTheme();
  console.log(dark);
  return (
    <div className="navbar">
      <div className="mode">
        <ThemeToggle />
      </div>
      <Link className="phish-in-link" to="/">
        <img
          className="phish-in-logo"
          alt="phish-in-logo"
          src={dark ? phishInPartyLogo : phishInLogo}
        ></img>
      </Link>
      <YearsDropdown />
    </div>
  );
};

export default Navbar;
