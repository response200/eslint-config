<div lang="en-GB">

# response200/eslint-config

Strict ESLint rules for JavaScript/TypeScript/JSX projects in one convenient package. Linting keeps your code clean, maintains consistency, and helps in avoiding common pitfalls and outright programming errors.

JS, TS and JSX rulesets can be individually enabled or left disabled. `response200/eslint-config` is mostly based on the following rulesets, but it also enables and tightens some additional rules.

* [eslint/recommended](https://eslint.org/docs/latest/rules)
* [neostandard](https://github.com/neostandard/neostandard)
* [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x)
* [eslint-plugin-promise](https://github.com/eslint-community/eslint-plugin-promise)
* [@stylistic/eslint-plugin](https://eslint.style/rules)
* [@typescript-eslint/eslint-plugin](https://typescript-eslint.io/rules)
* [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
* [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)

Included in `response200/eslint-config` is `lint.sh` tool. With it it's easy to lint different file selections. Read more about it below [lint.sh](#lintsh).

## Installation

To install run the following command:

```sh
npm install --save-dev @response200/eslint-config
```

## Configuration

Add the following configuration to `eslint.config.js` file:

```js
import { configs } from '@response200/eslint-config'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    extends: [
      configs.recommended,
      configs.recommendedJsx
    ]
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      configs.recommendedTypeScript
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  }
])
```

If you do not use TypeScript or do not wish to use TypeScript rules, you can leave out the following lines.

```js
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      configs.recommendedTypeScript
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  }
```

If you do not use JSX or do not wish to use JSX rules, you can leave out the following line.

```js
      configs.recommendedJsx
```

## Notes on JSX rules and React

`response200/eslint-config` includes JSX rules, and `eslint-plugin-react` is automatically installed with it. Some of the JSX rules are React specific. Although `response200/eslint-config` aims to be a generic, framework agnostic ruleset it is possible that the React-specific rules have to be disabled manually in projects that use other JSX frameworks than React.

## lint.sh

`response200/eslint-config` includes `lint.sh` tool. It's a useful command-line tool for linting various file selections quickly and easily in a git project. The tool is a helper for running eslint.

The tool has 4 operational modes:

* paths (lint specified files and/or directories)
* changed (lint uncommitted changed files incl. staged files)
* staged (lint staged files)
* rev (lint files that have been changed after a specified revision)

Lint.sh gathers a list of changed .js, .jsx, .ts and .tsx files by calling `git diff`. In `paths` mode the file list is user specified. The file list and possible command-line arguments are passed to eslint.

Example 1: lint specified files and directories
```sh
npx lint.sh paths foo.js bar.tsx directory/subdirectory
```


Example 2: lint specified files and instruct eslint to apply automatic fixes
```sh
npx lint.sh paths foo.js bar.tsx --fix
```


Example 3: lint uncommitted changed files
```sh
npx lint.sh changed
```


Example 4: lint staged files
```sh
npx lint.sh staged
```

**Tip:** create a git pre-commit hook that runs `node_modules/.bin/lint.sh staged --fix`. Automatic linting and fixing on each git commit!


Example 5: lint files changed in the latest commit
```sh
npx lint.sh rev HEAD~1..HEAD
```

**Tip:** `rev` mode accepts any git revision. See `man 7 gitrevisions` to see what git revisions can be used for.


Example 6: lint files that have been changed in the current branch compared to the main branch
```sh
npx lint.sh rev main..HEAD
```

**Tip:** configure your CI environment to run `node_modules/.bin/lint.sh rev main..HEAD` for each pull request. If the files changed in the branch do not pass linting, lint.sh exits with a non-zero exit code which can be used to prevent merging of the branch to the main branch. Automatic code quality monitoring and enforcement of coding conventions.

**PRO TIP:** modes have abbreviated aliases p, c, s and r.

## Common issues

### Linting dotfiles fails in a TypeScript project

Linting dotfiles might fail in a TypeScript project with the following error message:

```
/path/to/.file.js
  0:0  error  Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.
The file does not match your project config: .file.js.
The file must be included in at least one of the projects provided
```

This error happens because by default `tsc` does not read dotfiles. The issue can be fixed by adding the following lines to the `tsconfig.json` file:

```json5
{
  // This include array enables linting of dotfiles.
  "include": ["**/*", "**/.*"]
}
```

## Licence

[BSD 3-Clause](LICENCE.md). Authored by Joel Posti.

## Support the development of response200/eslint-config

`response200/eslint-config` is an open source project distributed free of charge. I hope you find it useful. If you wish to support its development or if you are feeling generous, you can donate an amount of your choosing with [PayPal](https://paypal.me/joelposti).
</div>
