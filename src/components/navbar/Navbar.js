import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from '../theme_toggle/ThemeToggle';
// import YearsDropdown from '../years_dropdown/YearsDropdown';
import phishInLogo from '../../phish-in-logo.png';
import phishInPartyLogo from '../../phish-in-party-multicolor-logo.png';
import './Navbar.css';

const Navbar = () => {
  const { mode, party, basic } = useTheme();
  const theme = mode ? party : basic;

  return (
    <div
      className="navbar"
      style={{
        background: theme.primaryBG,
      }}
    >
      <div className="mode">
        <ThemeToggle />
      </div>
      <Link className="phish-in-link" to="/">
        <img
          className="phish-in-logo"
          alt="phish-in-logo"
          src={mode ? phishInPartyLogo : phishInLogo}
        ></img>
      </Link>
      {/* <YearsDropdown /> */}
    </div>
  );
};

export default Navbar;
