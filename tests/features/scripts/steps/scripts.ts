import assert from 'assert/strict'
import path from 'path'
import { Given, When, Then, setWorldConstructor } from '@cucumber/cucumber'
import type { Script, ScriptProps } from 'tests/features/scripts/helpers/scripts'
import { execFile, isExecFileException } from 'tests/features/scripts/helpers/scripts'

setWorldConstructor(function (this: ScriptProps) {
  this.args = []
})

Given('script {word}', function (this: ScriptProps, script: Script) {
  this.script = script
})

Given('argument {string}', function (this: ScriptProps, arg: string) {
  this.args.push(arg)
})

Given('argument {word}', function (this: ScriptProps, arg: string) {
  this.args.push(arg)
})

When('script is run', { timeout: 60 * 1000 }, async function (this: ScriptProps) {
  const { exitCode, stdout, stderr } = await runScript(
    path.join(process.cwd(), this.script),
    this.script === 'scripts/lint.sh'
      ? [
          ...this.args,
          '--format', 'json',
          '--no-ignore'
        ]
      : this.args
  )

  this.exitCode = exitCode
  this.stdout = stdout
  this.stderr = stderr
  this.lintResults = parseLintResults(this.script, this.stdout)
})

When('script is run in the git repository', { timeout: 60 * 1000 }, async function (this: ScriptProps) {
  const { exitCode, stdout, stderr } = await runScript(
    path.join(this.testGitRepo, this.script),
    this.script === 'scripts/lint.sh'
      ? [
          ...this.args,
          '--format', 'json',
          '--no-ignore'
        ]
      : this.args
  )

  this.exitCode = exitCode
  this.stdout = stdout
  this.stderr = stderr
  this.lintResults = parseLintResults(this.script, this.stdout)
})

Then('script should exit with code {int}', function (this: ScriptProps, exitCode: number) {
  assert.strictEqual(this.exitCode, exitCode)
})

Then('script should output', function (this: ScriptProps, output: string) {
  assert.strictEqual(this.stdout, output)
})

function parseLintResults (script: Script, scriptStdout: string): ScriptProps['lintResults'] {
  if (script === 'scripts/lint.sh') {
    try {
      return JSON.parse(scriptStdout) as ScriptProps['lintResults']
    } catch (error: unknown) {}
  }

  return []
}

async function runScript (
  script: string,
  args: string[] = []
) {
  try {
    const { stdout, stderr } = await execFile(
      script,
      args
    )

    return {
      exitCode: 0,
      stdout: stdout.trim(),
      stderr: stderr.trim()
    }
  } catch (error: unknown) {
    if (isExecFileException(error)) {
      return {
        exitCode: error.code,
        stdout: error.stdout.trim(),
        stderr: error.stderr.trim()
      }
    } else {
      throw error
    }
  }
}
