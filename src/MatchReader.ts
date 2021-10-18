import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { MatchData } from './MatchData'

interface DataReader {
  read (): void
  data: string[][]
}

export class MatchReader {
  matches: MatchData[] = []

  constructor(
    public reader: DataReader
  ) { }

  load (): void{
    this.reader.read()
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          +row[3],
          +row[4],
          row[5] as MatchResult,　// TypeScript can infer the value should be 'H', 'A' or 'D'
          row[6]
        ]
      })
  }
}
