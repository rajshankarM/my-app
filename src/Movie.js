import { useState } from 'react';
import { Counter } from "./Counter";


export function Movie({ name, rating, summary, poster }) {
  const [show, setShow] = useState(true);

  const styles = {
    color: rating < 8 ? "crimson" : "green",
    fontWeight: "bold"
  };
  const summaryStyles = {
    display: show ? "block" : "none",
  };
  return (
    <div className="movie-container">
      <img src={poster}
        alt={name}
        className="movie-poster" />
      <div className="movie-specs">
        <h3 className="movie-name">{name}</h3>
        <p className="movie-rating" style={styles}>
          ⭐ {rating}</p>
      </div>
      <button onClick={() => setShow(!show)} className="movie-show-button">
        {show ? "Hide" : "show"} description
      </button>

      {show ? <p style={summaryStyles} className="movie-summary">{summary}</p> : ""}
      {/* <p style={summaryStyles} className="movie-summary">{summary}</p> */}
      <Counter />
    </div>
  );
}
