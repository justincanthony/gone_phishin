import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './Footer.css';
import { useContext } from 'react';
import { ShowContext } from '../../contexts/ShowContext';
import dayjs from 'dayjs';

export default function Footer() {
  const { currentTrack } = useContext(ShowContext);
  const { mp3, title, show_date, venue_name, venue_location } = currentTrack;
  const formattedDate = dayjs(show_date).format('M-D-YYYY');

  return (
    <footer className="footer">
      <p className="venue-text venue-title">{title}</p>
      <p className="venue-text">{formattedDate}</p>
      <p className="venue-text">{venue_name}</p>
      <p className="venue-text">{venue_location}</p>
      <ReactAudioPlayer
        className="audio-player"
        src={mp3}
        autoPlay={true}
        controls={true}
      />
    </footer>
  );
}
