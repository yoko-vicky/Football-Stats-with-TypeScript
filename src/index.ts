import fs from 'fs';

// 1. LOAD & PARSE DATA
const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8' // to return string, use utf-8
})
  .split('\n')
  .map((row: string): string[] => row.split(','))
  // row: [ '27/10/2018', 'Watford', 'Huddersfield', '3', '0', 'H', 'M Dean' ],
// console.log(matches)

// 2. ANALYZE DATA
let manUnitedWins = 0;
for (let match of matches) {
  if ((match[1] === 'Man United' && match[5] === 'H') ||
    (match[2] === 'Man United' && match[5] === 'A')) {
    manUnitedWins++
  }
}
// 3. REPORT DATA
console.log(`Report: Man United wins ${manUnitedWins} games!`)
