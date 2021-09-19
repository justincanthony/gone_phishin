import React, { useContext } from 'react';
import { ShowContext } from '../../contexts/ShowContext';
import { useTheme } from '../../contexts/ThemeContext';

import './TrackCard.css';

const TrackCard = ({ track }) => {
  const { getCurrentTrack } = useContext(ShowContext);
  const { isPartyMode, partyMode, basic } = useTheme();
  const theme = isPartyMode ? partyMode : basic;
  const { id, title } = track;

  return (
    <article
      className="card"
      id={id}
      style={{
        background: theme.primaryBG,
        boxShadow: theme.shadow,
        borderRadius: theme.radius,
      }}
      onClick={() => getCurrentTrack(id)}
    >
      <p
        className="song-title"
        style={{ color: theme.primaryText, background: theme.secondaryBG }}
      >
        {title}
      </p>
    </article>
  );
};

export default TrackCard;
