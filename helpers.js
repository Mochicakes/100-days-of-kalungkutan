const d = new Date();
const month = d.getMonth();
const day = d.getDate();
const year = d.getFullYear();

const RED = '\x1b[31m%s\x1b[0m';
const GREEN = '\x1b[32m%s\x1b[0m';

const START = '6/20/2022';
const CURRENT = `${month + 1}/${day}/${year}`;

const weeks = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

const weekName = weeks[d.getDay()];
const monthName = months[month];

export const error = (msg) => console.log(RED, msg);
export const success = (msg) => console.log(GREEN, msg);

export const diff = Math.floor((Date.parse(CURRENT) - Date.parse(START)) / 86400000) + 1;
const [prevDay, nextDay] = [diff - 1, diff + 1];

export const currentDayChallenge = `Day ${diff}`;
export const currentDate = `${monthName} ${day}, ${year} - ${weekName}`;

const header = (username = 'Mochicakes', fullName = 'Alyzah Ebora') => `<div align="center">
  <h1>Round 1</h1>
  <p>${currentDayChallenge}</p>

  <sub>
    Author: <a href="https://github.com/${username}" target="_blank">${fullName}</a>
    <br>
    <small>${currentDate}</small>
  </sub>
</div>`;

const pad = (x, y = 3) => x.toString().padStart(y, '0');

const footer = `[<< Day ${prevDay}](day${pad(prevDay, 3)}.md) | [Day ${nextDay} >>](day${pad(nextDay, 3)}.md)`;
const content = `### Today's Progress:\n\n- TODO\n\n### Notes:\n\n- TODO\n\n### Thoughts:\n\n- TODO\n\n### Resources:\n\n- TODO`;

export const template = `${header()}\n\n${footer}\n\n${content}\n\n${footer}\n`;