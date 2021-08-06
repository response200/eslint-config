import type { ExecException } from 'child_process'
import { execFile as ef } from 'child_process'
import { promisify } from 'util'
import type { World } from '@cucumber/cucumber'
import type { ESLint } from 'eslint'

export const execFile = promisify(ef)

export function isExecFileException (error: unknown): error is ExecFileException {
  if (typeof error !== 'object') {
    return false
  }

  const potentialExecFileException = error as {
    code?: number
    stderr?: string
    stdout?: string
  }

  return (
    (typeof potentialExecFileException.code === 'number'
      || typeof potentialExecFileException.code === 'undefined')
    && typeof potentialExecFileException.stdout === 'string'
    && typeof potentialExecFileException.stderr === 'string'
  )
}

export type Script = 'scripts/lint.sh'
export type ScriptProps = World & {
  args: string[]
  exitCode?: number
  lintResults: ESLint.LintResult[]
  script: Script
  stderr: string
  stdout: string
  testGitRepo: string
}

type ExecFileException = ExecException & {
  stderr: string
  stdout: string
}
