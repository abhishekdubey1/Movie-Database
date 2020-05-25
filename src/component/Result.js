import React from "react";


function Result({result, openPopup}) {
  return (
    <div className="result" onClick={() => openPopup(result.imdbID)}>
      <img src={result.Poster} alt={"Poster"} />
      <h3>{result.Title}</h3>
    </div>
    // 3
  );
}

export default Result;