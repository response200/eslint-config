import type { ExecFileOptions } from 'child_process'
import path from 'path'
import { Given, When, Then, setWorldConstructor } from '@cucumber/cucumber'
import { expect } from 'chai'
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
  const { exitCode, stdout, stderr } = await runScript(this.script, this.args)

  this.exitCode = exitCode
  this.stdout = stdout
  this.stderr = stderr
  this.lintResults = parseLintResults(this.script, this.stdout)
})

When('script is run in the git repository', { timeout: 60 * 1000 }, async function (this: ScriptProps) {
  const { exitCode, stdout, stderr } = await runScript(
    this.script,
    this.args,
    { cwd: this.testGitRepo }
  )

  this.exitCode = exitCode
  this.stdout = stdout
  this.stderr = stderr
  this.lintResults = parseLintResults(this.script, this.stdout)
})

Then('script should exit with code {int}', function (this: ScriptProps, exitCode: number) {
  expect(this.exitCode).equal(exitCode)
})

Then('script should output', function (this: ScriptProps, output: string) {
  expect(this.stdout).equal(output)
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
  script: Script,
  args: string[] = [],
  execFileOptions: ExecFileOptions = {}
) {
  try {
    if (script === 'scripts/lint.sh') {
      args = [
        ...args,
        '--format', 'json',
        '--no-ignore'
      ]
    }

    const { stdout, stderr } = await execFile(
      path.join(process.cwd(), script),
      args,
      execFileOptions
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
