import fs from 'fs';

// 1. LOAD & PARSE DATA
const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8' // to return string, use utf-8
})
  .split('\n')
  .map((row: string): string[] => row.split(','))
  // row: [ '27/10/2018', 'Watford', 'Huddersfield', '3', '0', 'H', 'M Dean' ],
// console.log(matches)



// 2. ANALYZE DATAww

// Enum - enumeration
enum MatchResults { HomeWin = 'H', AwayWin = 'A', Draw = 'D' }

let manUnitedWins = 0;
for (let match of matches) {
  if ((match[1] === 'Man United' && match[5] === MatchResults.HomeWin ) ||
    (match[2] === 'Man United' && match[5] === MatchResults.AwayWin)) {
    manUnitedWins++
  }
}


// const matchResults = {
//   homeWin: 'H',
//   awayWin: 'A',
//   draw: 'D'
// }
// const homeWin = 'H'
// const awayWin = 'A'
// const draw = 'D'





// 3. REPORT DATA
console.log(`Report: Man United wins ${manUnitedWins} games!`)
