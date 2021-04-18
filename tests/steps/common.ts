import path from 'path'
import type { World } from '@cucumber/cucumber'
import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from 'chai'
import { ESLint } from 'eslint'
import { getFileLintResult, getTotalLintErrorCount, getTotalLintWarningCount } from 'tests/helpers/common'

type LintProps = World & {
  fileToLint: string
  lintResults: ESLint.LintResult[]
}

Given('there is {word} file', function (this: LintProps, filePath: string): void {
  this.fileToLint = path.resolve(`tests/sample-files/${filePath}`)
})

When('file is linted against {word} ruleset', async function (this: LintProps, rulesetFilename: string) {
  const eslint = new ESLint({
    // .eslintignore of the repo should not be respected because files in
    // tests/sample-files are linted in the tests.
    ignore: false,
    overrideConfigFile: `${rulesetFilename}.js`
  })
  this.lintResults = await eslint.lintFiles(this.fileToLint)
})

Then('files should contain 1 lint error', function (this: LintProps) {
  expect(getTotalLintErrorCount(this.lintResults)).equal(1)
})

Then('files should contain {int} lint errors', function (this: LintProps, errorCount: number) {
  expect(getTotalLintErrorCount(this.lintResults)).equal(errorCount)
})

Then('files should contain 1 lint warning', function (this: LintProps) {
  expect(getTotalLintWarningCount(this.lintResults)).equal(1)
})

Then('files should contain {int} lint warnings', function (this: LintProps, warningCount: number) {
  expect(getTotalLintWarningCount(this.lintResults)).equal(warningCount)
})

Then('files should pass linting', function (this: LintProps) {
  expect(getTotalLintErrorCount(this.lintResults)).equal(0)
  expect(getTotalLintWarningCount(this.lintResults)).equal(0)
})

Then('file should contain 1 lint error', function (this: LintProps) {
  const lintResult = getFileLintResult(this.lintResults, this.fileToLint)
  expect(lintResult.errorCount).equal(1)
})

Then('file {word} should contain 1 lint error', function (this: LintProps, filePath: string) {
  const lintResult = getFileLintResult(this.lintResults, path.resolve(filePath))
  expect(lintResult.errorCount).equal(1)
})

Then('file should contain {int} lint errors', function (this: LintProps, errorCount: number) {
  const lintResult = getFileLintResult(this.lintResults, this.fileToLint)
  expect(lintResult.errorCount).equal(errorCount)
})

Then('file should contain 1 lint warning', function (this: LintProps) {
  const lintResult = getFileLintResult(this.lintResults, this.fileToLint)
  expect(lintResult.warningCount).equal(1)
})

Then('file should contain {int} lint warnings', function (this: LintProps, warningCount: number) {
  const lintResult = getFileLintResult(this.lintResults, this.fileToLint)
  expect(lintResult.warningCount).equal(warningCount)
})

Then('file should pass linting', function (this: LintProps) {
  const lintResult = getFileLintResult(this.lintResults, this.fileToLint)
  expect(lintResult.errorCount).equal(0)
  expect(lintResult.warningCount).equal(0)
})

Then('line {int} should contain error {string}', function (this: LintProps, lineNumber: number, errorMessage: string) {
  const lintResult = getFileLintResult(this.lintResults, this.fileToLint)
  expect(lintResult.messages.map(({ severity, line, message }) => ({ severity, line, message }))).deep.include.members([{ severity: 2, line: lineNumber, message: errorMessage }])
})

Then('line {int} should contain warning {string}', function (this: LintProps, lineNumber: number, warningMessage: string) {
  const lintResult = getFileLintResult(this.lintResults, this.fileToLint)
  expect(lintResult.messages.map(({ severity, line, message }) => ({ severity, line, message }))).deep.include.members([{ severity: 1, line: lineNumber, message: warningMessage }])
})

Then('line {int} of {word} should contain error {string}', function (this: LintProps, lineNumber: number, filePath: string, errorMessage: string) {
  const lintResult = getFileLintResult(this.lintResults, path.resolve(filePath))
  expect(lintResult.messages.map(({ severity, line, message }) => ({ severity, line, message }))).deep.include.members([{ severity: 2, line: lineNumber, message: errorMessage }])
})
