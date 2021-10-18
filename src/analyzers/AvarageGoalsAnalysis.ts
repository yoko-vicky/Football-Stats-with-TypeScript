import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";

export class AvarageGoalAnalysis implements Analyzer {
  run (matches: MatchData[]): string {
    return 'This is AvarageGoalAnalysis'
  }
}
