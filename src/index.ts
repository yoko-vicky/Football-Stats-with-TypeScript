import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { dateStringToDate } from "./utils"
import { MatchResult } from "./MatchResult";

// 1. LOAD & PARSE DATA

// Create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader('football.csv')

// Create an instance of MatchReader and pass something that satisfies DataReader interface
const matchReader = new MatchReader(csvFileReader)

// Run load() method to MatchReader
matchReader.load()

// See if it works
// console.log(matchReader.matches[0])

// 2. ANALYZE DATAww
let manUnitedWins = 0;
for (let match of matchReader.matches) {
  if ((match[1] === 'Man United' && match[5] === MatchResult.HomeWin ) ||
    (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)) {
    manUnitedWins++
  }
}
console.log(dateStringToDate('18/02/2018'))

// 3. REPORT DATA
console.log(`Report: Man United wins ${manUnitedWins} games!`)
