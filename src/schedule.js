import React, { useState, useEffect } from 'react';

import { api } from './constants';

import './schedule.css';

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
        <table className="schedule--list">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Time</th>
              <th>Kind</th>
            </tr>
          </thead>
          <tbody>
            {
              schedule.map((appointment, i) => (
                <tr key={appointment.id}>
                  <td>{i + 1}</td>
                  <td>{appointment.patient ? appointment.patient.name : "Unknown"}</td>
                  <td>{new Date(appointment.time).toLocaleString()}</td>
                  <td>{appointment.reason}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </>
    : "Please select a doctor")
  );
}

export default Schedule;
