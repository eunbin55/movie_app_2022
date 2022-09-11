import React from "react";
import PropTYpes from "prop-types";
import './Movie.css'

function Movie({ title, year, summary, poster, genres }) {
  return (
    <div>
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title" >
          {title}
        </h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => {
            return (
                <li key={index} className="movie__genre">
                    {genre}
                </li>
            )
          })}  
        </ul>
        
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  year: PropTYpes.number.isRequired,
  title: PropTYpes.string.isRequired,
  summary: PropTYpes.string.isRequired,
  poster: PropTYpes.string.isRequired,
  genres: PropTYpes.arrayOf(PropTYpes.string).isRequired
};

export default Movie;
