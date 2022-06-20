import fs from 'fs';
import {
  diff,
  currentDate,
  currentDayChallenge,
  template,
  success,
  error,
} from './helpers.js';

console.log(`\n\t\t${currentDayChallenge}\n\t${currentDate}\n`);

try {
  const path = `Round-1/day${diff.toString().padStart(3, '0')}.md`;

  if (fs.existsSync(path)) {
    // for safety reasons, to avoid overwriting existing files
    error(`${path} already exists.`);
    error(`delete if you want to override it`);
  } else {
    fs.writeFileSync(path, template);
    success(`${path} created successfully`);
  }
} catch (err) {
  console.error(err);
}