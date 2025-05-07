import type { ESLint, Linter } from 'eslint'

export function getFileLintResult (lintResults: ESLint.LintResult[], filePath: string): ESLint.LintResult {
  return lintResults.find((lintResult) => lintResult.filePath === filePath) as ESLint.LintResult
}

export function getLineMessages (lintResult: ESLint.LintResult, lineNumber: number): Linter.LintMessage[] {
  return lintResult.messages.filter(({ line }) => line === lineNumber)
}

export function getTotalLintErrorCount (lintResults: ESLint.LintResult[]): number {
  return lintResults.reduce((acc, { errorCount }) => {
    return acc + errorCount
  }, 0)
}

export function getTotalLintWarningCount (lintResults: ESLint.LintResult[]): number {
  return lintResults.reduce((acc, { warningCount }) => {
    return acc + warningCount
  }, 0)
}
