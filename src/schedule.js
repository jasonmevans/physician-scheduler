import React, { useState, useEffect } from 'react';

import { api } from './constants';

function Schedule(props) {
  const {
    match: {
      params: { physId = null },

    },
    location: {
      state: {
        physician: { name, email }
      }
    }
  } = props;

  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    window.fetch(`${api}/physician/${physId}/schedule`)
      .then(async (response) => setSchedule(await response.json()));
  }, [physId]);

  return (
    (physId ?
      <>
        <h3>Dr. {name}</h3>
        <p>{email}</p>
        <ul className="schedule--list">
          {
            schedule.map(appointment => (<li key={appointment.id}>{appointment.time} {appointment.patient.name}</li>))
          }
        </ul>
      </>
    : "Please select a doctor")
  );
}

export default Schedule;
