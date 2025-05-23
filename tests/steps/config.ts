import assert from 'assert/strict'
import fs from 'fs/promises'
import type { World } from '@cucumber/cucumber'
import { When, Then } from '@cucumber/cucumber'
import { ESLint } from 'eslint'
import type { Linter } from 'eslint'

type LintProps = World & {
  fileToLint: string
  calculatedConfig: Linter.Config
}

const extensions = [
  '.js',
  '.jsx',
  '.ts',
  '.tsx',
  '.d.ts'
]

const extensionRegExp = /(\.[^.]+)+$/

When('config matching to file is calculated', async function (this: LintProps) {
  const eslint = new ESLint({
    // GlobalIgnores in eslint.config.mjs should not be respected because files
    // in tests/sample-files are linted in the tests.
    ignore: false
  })
  const calculatedConfig = await eslint.calculateConfigForFile(this.fileToLint) as unknown
  assert(isConfig(calculatedConfig))
  if (typeof calculatedConfig.languageOptions?.parserOptions?.['tsconfigRootDir'] === 'string') {
    calculatedConfig.languageOptions.parserOptions['tsconfigRootDir'] = '/path/to/eslint-config'
  }
  this.calculatedConfig = calculatedConfig
})

/**
 * Compare the calculated config to a config fixture. The fixtures can be
 * updated with the following commands:
 *
 * ```sh
 * for extension in js jsx ts tsx d.ts; do
 *   ./scripts/lint.sh p --print-config "non-existent.$extension" \
 *     | sed -E 's|("tsconfigRootDir":).+(,)?$|\1 "/path/to/eslint-config"\2|' \
 *     > "tests/fixtures/config.$extension.json"
 * done
 * ```
 */
Then('calculated config should match with config fixture', async function (this: LintProps) {
  // Get file extensions with a regexp instead of with path.extname because the
  // latter returns `.ts` when this.fileToLint is `eslint/non-existent.d.ts`.
  const match = extensionRegExp.exec(this.fileToLint)
  assert(Array.isArray(match))
  const [extension] = match
  assert(extensions.includes(extension))
  const fixture = (await fs.readFile(
    `tests/fixtures/config${extension}.json`,
    { encoding: 'utf8' }
  )).trim()
  assert.strictEqual(
    JSON.stringify(this.calculatedConfig, undefined, 2),
    fixture
  )
})

function isConfig (value: unknown): value is Linter.Config {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    && 'rules' in value && typeof value.rules === 'object'
    && value.rules !== null && !Array.isArray(value.rules)
}
