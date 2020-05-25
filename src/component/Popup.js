import React from "react";

function Popup({ selected, closePopup }) {
  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selected.Title} <span>({selected.Year})</span>
        </h2>
        <p className="rating">Rating: {selected.imdbRating}</p>

        <div>
          <img src={selected.Poster} alt="Poster" />
          <p> {selected.Plot} </p>
        </div>
        <button className="close" onClick={closePopup}>
          close
        </button>
      </div>
    </section>
  );
}

export default Popup;
