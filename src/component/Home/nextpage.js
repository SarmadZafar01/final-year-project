import React from 'react';
import "./nextpage.css";

function Page({ goToNextPage, goToPreviousPage }) {
  return (
    <div className="page">
      <button onClick={goToPreviousPage}>Previous</button>
      <button onClick={goToNextPage}>Next</button>
    </div>
  );
}

export default Page;
