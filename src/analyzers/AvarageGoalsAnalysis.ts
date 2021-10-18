import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";

export class AvarageGoalAnalysis implements Analyzer {
  constructor(
    public team: string
  ) { }

  run (matches: MatchData[]): string {
    return `This is AvarageGoalAnalysis for ${this.team}`
  }
}
