import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { AvarageGoalAnalysis } from "./analyzers/AvarageGoalsAnalysis";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";

// 1. LOAD & PARSE DATA
// Create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader('football.csv')

// Create an instance of MatchReader and pass something that satisfies DataReader interface
const matchReader = new MatchReader(csvFileReader)

// Run load() method to MatchReader
matchReader.load()

// 2. ANALYZE & REPORT DATA
// PREPARE DATA IN STEP 1
const data = matchReader.matches

// ANALYZER
const avarageGoalAnalysis = new AvarageGoalAnalysis()
const winsAnalysis = new WinsAnalysis('Man United')

// OUTPUT TARGET
const consoleReport = new ConsoleReport()
const htmlReport = new HtmlReport()

// OUTOUT WITH COMBINATION OF ANALYZER & OUTPUT TARGET(WAYS)
const winAnalysisConsoleSummary = new Summary(winsAnalysis, consoleReport)
winAnalysisConsoleSummary.buildAndPrintReport(data)

const winAnalysisHtmlSummary = new Summary(winsAnalysis, htmlReport)
winAnalysisHtmlSummary.buildAndPrintReport(data)
// To open report file from console, run 'open report.html'
