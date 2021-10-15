import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "./utils"

// 1. LOAD & PARSE DATA
const reader = new CsvFileReader('football.csv')
reader.read()
console.log(reader.data)

// 2. ANALYZE DATAww

// Enum - enumeration
enum MatchResults { HomeWin = 'H', AwayWin = 'A', Draw = 'D' }

let manUnitedWins = 0;
for (let match of reader.data) {
  if ((match[1] === 'Man United' && match[5] === MatchResults.HomeWin ) ||
    (match[2] === 'Man United' && match[5] === MatchResults.AwayWin)) {
    manUnitedWins++
  }
}


console.log(dateStringToDate('18/02/2018'))

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
