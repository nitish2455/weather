
import React from 'react';

const RecentSearches = ({ searches }) => {
  return (
    <div className="p-4">
      <h3>Recent Searches:</h3>
      <ul>
        {searches.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;
