import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "./utils"
import { MatchResult } from "./MatchResult";

// 1. LOAD & PARSE DATA
const reader = new CsvFileReader('football.csv')
reader.read()
console.log(reader.data[0])

// 2. ANALYZE DATAww
let manUnitedWins = 0;
for (let match of reader.data) {
  if ((match[1] === 'Man United' && match[5] === MatchResult.HomeWin ) ||
    (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)) {
    manUnitedWins++
  }
}
console.log(dateStringToDate('18/02/2018'))

// 3. REPORT DATA
console.log(`Report: Man United wins ${manUnitedWins} games!`)
