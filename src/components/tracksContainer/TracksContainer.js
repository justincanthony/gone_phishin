import React, { useState, useEffect, useContext, useCallback } from 'react';
import { ShowContext } from '../../contexts/ShowContext';
import { useTheme } from '../../contexts/ThemeContext';
import TrackCard from '../track_card/TrackCard';
import ErrorDisplay from '../error_display/ErrorDisplay';
import dayjs from 'dayjs';
import './TracksContainer.css';

const TracksContainer = ({ id }) => {
  const { fetchData } = useContext(ShowContext);
  const { mode, party, basic } = useTheme();
  const theme = mode ? party : basic;
  const [tracks, setTracks] = useState([]);
  const [show, setShow] = useState({});
  const [error, setError] = useState('');

  const memo = useCallback(() => {
    const getShow = async (id) => {
      try {
        const show = await fetchData(`shows/${id}`);
        console.log(show.data.tracks);
        setTracks(show.data.tracks);
        setShow(show.data);
      } catch (error) {
        setError(error.message);
      }
    };
    getShow(id);
  }, [id, fetchData, setTracks, setShow, setError]);

  useEffect(() => {
    memo(id);
  }, [id, memo]);

  const filterBySet = (setNumber) => {
    return tracks
      .filter((track) => track.set_name === setNumber)
      .map((track) => <TrackCard key={track.id} id={track.id} track={track} />);
  };

  return (
    <section
      className="tracks-container"
      style={{
        background: theme.primaryBG,
      }}
    >
      {error && <ErrorDisplay message={error} />}
      {show.date && show.venue_name && show.venue.location && (
        <div className="show-info" style={{ color: theme.primaryText }}>
          <h3>{dayjs(show.date).format('MMM D, YYYY')}</h3>
          <h3>{show.venue_name}</h3>
          <h3>{show.venue.location}</h3>
        </div>
      )}

      {tracks.length > 0 && (
        <div className="tracks-container">
          {filterBySet('Set 1').length > 0 && (
            <React.Fragment>
              <h4 style={{ color: theme.primaryText }}>-- SET I --</h4>
              <div className="set-1">{filterBySet('Set 1')}</div>
            </React.Fragment>
          )}
          {filterBySet('Set 2').length > 0 && (
            <React.Fragment>
              <h4 style={{ color: theme.primaryText }}>-- SET II --</h4>
              <div className="set-2">{filterBySet('Set 2')}</div>
            </React.Fragment>
          )}
          {filterBySet('Set 3').length > 0 && (
            <div className="set-3">
              <h4 style={{ color: theme.primaryText }}>-- SET III --</h4>
              <div className="set-3">{filterBySet('Set 3')}</div>
            </div>
          )}
          {filterBySet('encore').length > 0 && (
            <React.Fragment>
              <h4 style={{ color: theme.primaryText }}>-- ENCORE --</h4>
              <div className="encore">{filterBySet('Encore')}</div>
            </React.Fragment>
          )}
          {filterBySet('Soundcheck').length > 0 && (
            <React.Fragment>
              <h4 style={{ color: theme.primaryText }}>-- Soundcheck --</h4>
              <div className="soundcheck">{filterBySet('Soundcheck')}</div>
            </React.Fragment>
          )}
        </div>
      )}
    </section>
  );
};

export default TracksContainer;
