import PropTypes from 'prop-types';
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Hero = ({ movies }) => {
  return (
    <div>
      <Carousel>
        {movies.map((movie, index) => {
          return (
            <Paper key={index}>
              <div className='movie-card-container'>
                <div
                  className='movie-card'
                  style={{
                   "background-image": `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${movie.backdrops[0]})`}}
                >
                  <div className='movie-detail'>
                    <div className='movie-poster'>
                      <img src={movie.poster} alt={movie.title} />
                    </div>
                    <div className='movie-title'>
                      <h1>{movie.title}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

Hero.propTypes = {
  movies: PropTypes.array.isRequired,
};
export default Hero;
