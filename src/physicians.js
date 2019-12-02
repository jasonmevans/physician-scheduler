import React, { useState, useEffect } from 'react';

import { api } from './constants';

function Physicians() {
  const [physicians, setPhysicians] = useState([]);

  useEffect(() => {
    window.fetch(`${api}/physicians`)
      .then(async (response) => setPhysicians(await response.json()));
  });

  return (
    <>
      <h2>Physicians</h2>
      <ul className="physicians--list">
        {
          physicians.map(physician => (<li key={physician.id}>{physician.name}</li>))
        }
      </ul>
    </>
  );
}

export default Physicians;
