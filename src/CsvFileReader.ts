import fs from 'fs';
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

type MatchData = [ Date, string, string, number, number, MatchResult, string ]

export class CsvFileReader {
  data: MatchData[] = []

  constructor(
    public fileName: string
  ) {}

  read (): void {
    this.data = fs.readFileSync(this.fileName, {
      encoding: 'utf-8' // to return string, use utf-8
    })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map((row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          +row[3],
          +row[4],
          row[5] as MatchResult,　// TypeScript can infer the value should be 'H', 'A' or 'D'
          row[6]
        ]
      } )
  }
}
