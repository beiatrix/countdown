import React from 'react';
import './App.css';
import moment from 'moment'

export default () => {
  const one_year = moment("20200513")
  const now = moment()

  return (
    <div className="App">
      <header className="App-header">
        <code>Today is {now.format('dddd, MMMM Do YYYY')}</code>
        <h1>{one_year.diff(now, 'days')}</h1>
        <code>days until May 13, 2020</code>
      </header>
    </div>
  );
}

