import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";


// 1. LOAD & PARSE DATA
const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load()
const data = matchReader.matches

// 2. ANALYZE & REPORT DATA
// Call Shortcut static method to create an summary instance, call method by combining specific analyzers and reportTargets
const winAnalysisHtmlSummary = Summary.winsAnalysisHtmlReport('Man United')
winAnalysisHtmlSummary.buildAndPrintReport(data)

const winAnalysisConsoleSummary = Summary.winsAnalysisConsoleReport('Man United')
winAnalysisConsoleSummary.buildAndPrintReport(data)

const avgGoalAnalysisHtmlSummary = Summary.avgGoalAnalysisHtmlReport('Man United')
avgGoalAnalysisHtmlSummary.buildAndPrintReport(data)

const avgGoalAnalysisConsoleSummary = Summary.avgGoalAnalysisConsoleReport('Man United')
avgGoalAnalysisConsoleSummary.buildAndPrintReport(data)
