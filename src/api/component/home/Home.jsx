import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../hero/Hero';

function Home({ movies }) {
  return (
    <div>
      <Hero movies={movies} />
    </div>
  );
}

Home.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Home;
