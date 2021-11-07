// import React, { useContext } from 'react';
// import { ShowContext } from '../../contexts/ShowContext';
// import { useTheme } from '../../contexts/ThemeContext';
// import './YearsDropdown.css';

// const YearsDropdown = () => {
//   const { years } = useContext(ShowContext);
//   const { mode, party, basic } = useTheme();
//   const theme = mode ? party : basic;

//   const yearsOptions = years.map((year) => {
//     return (
//       <option className="dropdown-option" key={year} value={year}>
//         {year}
//       </option>
//     );
//   });

//   const redirect = (year) => {
//     const url = `/years/${year}`;
//     window.location.assign(url);
//   };

//   return (
//     <div>
//       <select
//         style={{ color: theme.primaryText }}
//         className="select"
//         name="years"
//         id="yearsSelect"
//         onChange={(e) => redirect(e.target.value)}
//       >
//         <option value="">Years</option>
//         {yearsOptions}
//       </select>
//     </div>
//   );
// };

// export default YearsDropdown;
