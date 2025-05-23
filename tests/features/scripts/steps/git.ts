import assert from 'assert/strict'
import { promises as fs } from 'fs'
import os from 'os'
import path from 'path'
import { Given, When, Then } from '@cucumber/cucumber'
import type { ScriptProps } from 'tests/features/scripts/helpers/scripts'
import { execFile } from 'tests/features/scripts/helpers/scripts'
import { getFileLintResult } from 'tests/helpers/common'

Given('git repository is created', async function (this: ScriptProps) {
  this.testGitRepo = await fs.mkdtemp(path.join(os.tmpdir(), '/'))
  await execFile('git', ['init', '--initial-branch', 'master', this.testGitRepo])
  await Promise.all([
    ...[
      'recommended.js', 'recommended-typescript.js', 'recommended-jsx.js',
      'eslint.config.mjs', 'tsconfig.json',
      'scripts/lint.sh', 'scripts/helpers',
      'tests/tsconfig.json'
    ].map(async (file) => {
      await fs.cp(file, path.join(this.testGitRepo, file), { recursive: true })
    }),
    fs.symlink(
      path.join(process.cwd(), 'node_modules'),
      path.join(this.testGitRepo, 'node_modules'),
      'dir'
    )
  ])

  await addFileToGitRepo(this.testGitRepo, 'tests/sample-files/scripts/foo.js')
  await addFileToGitRepo(this.testGitRepo, 'tests/sample-files/scripts/subdirectory')
  await execFile('git', ['checkout', '-b', 'test'], { cwd: this.testGitRepo })
  await addFileToGitRepo(this.testGitRepo, 'tests/sample-files/scripts/zab.js')
  await addFileToGitRepo(this.testGitRepo, 'tests/sample-files/scripts/baz.js')
  await removeFileFromGitRepo(this.testGitRepo, 'tests/sample-files/scripts/zab.js')
  await execFile('git', ['checkout', 'master'], { cwd: this.testGitRepo })
})

Given('git branch is switched to {word}', async function (this: ScriptProps, branch: string) {
  await execFile('git', ['checkout', branch], { cwd: this.testGitRepo })
})

When('git file {word} is changed', async function (this: ScriptProps, filePath: string) {
  await fs.appendFile(
    path.join(this.testGitRepo, filePath),
    'const unusedConst = 123\n'
  )
})

When('git file {word} is staged', async function (this: ScriptProps, filePath: string) {
  await execFile('git', ['add', path.join(this.testGitRepo, filePath)], { cwd: this.testGitRepo })
})

Then('git file {word} should contain 1 lint error', function (this: ScriptProps, filePath: string) {
  const lintResult = getFileLintResult(this.lintResults, path.join(this.testGitRepo, filePath))
  assert.strictEqual(lintResult.errorCount, 1)
})

Then('git file {word} should contain {int} lint errors', function (this: ScriptProps, filePath: string, errorCount: number) {
  const lintResult = getFileLintResult(this.lintResults, path.join(this.testGitRepo, filePath))
  assert.strictEqual(lintResult.errorCount, errorCount)
})

Then('line {int} of git file {word} should contain error {string}', function (this: ScriptProps, lineNumber: number, filePath: string, errorMessage: string) {
  const lintResult = getFileLintResult(this.lintResults, path.join(this.testGitRepo, filePath))
  assert(lintResult.messages.some(({ severity, line, message }) => severity === 2 && line === lineNumber && message === errorMessage))
})

async function addFileToGitRepo (gitRepo: string, filePath: string) {
  await fs.cp(filePath, path.join(gitRepo, filePath), { recursive: true })
  await execFile('git', ['add', filePath], { cwd: gitRepo })
  await execFile('git', [
    '-c',
    'user.name=foo',
    '-c',
    'user.email=foo@bar.invalid',
    'commit',
    '-m',
    `Added ${filePath}`,
    filePath
  ], { cwd: gitRepo })
}

async function removeFileFromGitRepo (gitRepo: string, filePath: string) {
  await execFile('git', ['rm', '-r', filePath], { cwd: gitRepo })
  await execFile('git', [
    '-c',
    'user.name=foo',
    '-c',
    'user.email=foo@bar.invalid',
    'commit',
    '-m',
    `Removed ${filePath}`,
    filePath
  ], { cwd: gitRepo })
}
