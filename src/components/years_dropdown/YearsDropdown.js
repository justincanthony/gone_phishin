import React, { useContext } from 'react';
// import { Redirect } from 'react-router-dom';
import { ShowContext } from '../../contexts/ShowContext';
import './YearsDropdown.css';

const YearsDropdown = () => {
  //TO do: refactor to remove from context.
  // const { years, shows, getShows } = useContext(ShowContext);

  const { years } = useContext(ShowContext);

  const yearsOptions = years.map((year) => {
    return (
      <option className="dropdown-option" key={year} value={year}>
        {year}
      </option>
    );
  });

  const redirect = (year) => {
    const url = `/years/${year}`;
    window.location.assign(url);
  };

  return (
    <div>
      <select
        className="select"
        name="years"
        id="yearsSelect"
        onChange={(e) => redirect(e.target.value)}
      >
        <option value="">Years</option>
        {yearsOptions}
      </select>
    </div>
  );
};

export default YearsDropdown;
