const express = require('express');
const app = express();
const port = 3002;

app.use((req, res, next) => {
  console.log("Incoming request for", req.url);
  res.set('Access-Control-Allow-Origin', '*');
  next();
})

const DB = require('./DB.json');

app.get('/api/physicians', (req, res) => {
  res.json(Object.keys(DB.physicians).map(k => {
    return {
      ...DB.physicians[k],
      id: k
    }
  }));
});

app.get('/api/physician/:physId/schedule', (req, res) => {
  const schedule = Object.keys(DB.schedule).reduce((sched, item) => {
    const { id, physician, patient } = DB.schedule[item]; // eslint-disable-line
    return [
      ...sched,
      {
        ...DB.schedule[item],
        patient: DB.patients[patient],
        physician: DB.physicians[physician],
        id: item
      }
    ];
  }, []);

  res.json(schedule);
});

app.listen(port, () => console.log(`Listening on ${port}`));
