import React from 'react';
import './App.css';
import moment from 'moment'
import { Progress } from 'antd'

export default () => {
  const one_year = moment("20200513")
  const now = moment()

  return (
    <div className="App">
      <header className="App-header">
        <code>Today is {now.format('dddd, MMMM Do YYYY')}</code>
        <h1>{one_year.diff(now, 'days')}</h1>
        <code>days until May 13, 2020</code>
        <div id="progress">
        <Progress
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#09d3ac',
          }}
          percent={Math.floor((365 - one_year.diff(now, 'days')) / 365 * 100)}
          showInfo={false}
        />
        </div>
      </header>
    </div>
  );
}

