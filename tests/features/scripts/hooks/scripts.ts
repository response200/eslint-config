import { promises as fs } from 'fs'
import { After } from '@cucumber/cucumber'
import type { ScriptProps } from 'tests/features/scripts/helpers/scripts'

After({ tags: '@scripts' }, async function (this: ScriptProps) {
  if (this?.testGitRepo?.length > 0) {
    await fs.rmdir(this.testGitRepo, { recursive: true })
  }
})
