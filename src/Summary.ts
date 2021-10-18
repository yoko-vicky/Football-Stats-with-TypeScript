import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { AvarageGoalAnalysis } from "./analyzers/AvarageGoalsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";


export interface Analyzer {
  run(matches: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {
  static winsAnalysisHtmlReport (team: string) {
    const winsAnalysis = new WinsAnalysis(team)
    const htmlReport = new HtmlReport()
    return new Summary(winsAnalysis, htmlReport)
  }

  static winsAnalysisConsoleReport (team: string) {
    const winsAnalysis = new WinsAnalysis(team)
    const consoleReport = new ConsoleReport()
    return new Summary(winsAnalysis, consoleReport)
  }

  static avgGoalAnalysisHtmlReport (team: string) {
    const avgGoalAnalysis = new AvarageGoalAnalysis(team)
    const htmlReport = new HtmlReport()
    return new Summary(avgGoalAnalysis, htmlReport)
  }

  static avgGoalAnalysisConsoleReport (team: string) {
    const avgGoalAnalysis = new AvarageGoalAnalysis(team)
    const consoleReport = new ConsoleReport()
    return new Summary(avgGoalAnalysis, consoleReport)
  }

  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget
  ) { }

  buildAndPrintReport (matches: MatchData[]): void{
    const report = this.analyzer.run(matches)
    this.outputTarget.print(report)
  }
}
