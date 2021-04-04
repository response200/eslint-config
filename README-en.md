<div lang="en-GB">

# response200/eslint-config

Strict ESLint rules for JavaScript/TypeScript/JSX projects in one convenient
package. Linting keeps your code clean, maintains consistency, and helps in
avoiding common pitfalls and outright programming errors.

JS, TS and JSX rulesets can be individually enabled or left disabled.
`response200/eslint-config` is mostly based on the following common rulesets,
but it also enables and tightens some additional rules.

* [eslint/recommended](https://eslint.org/docs/rules)
* [eslint-config-standard](https://github.com/standard/eslint-config-standard)
* [eslint-config-standard-with-typescript](https://github.com/standard/eslint-config-standard-with-typescript)
* [eslint-config-standard-jsx](https://github.com/standard/eslint-config-standard-jsx)
* [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
* [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
* [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
* [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)

Included in `response200/eslint-config` is `lint.sh` tool. With it it's easy to
lint different file selections. Read more about it below [lint.sh](#lintsh).

## Installation

### Npm 7 or newer

If you use npm 7 or newer, run the following command:

```sh
npm install --save-dev @response200/eslint-config
```

### Npm 6 or older

If you use npm 6 or older, run the following more complicated command (npm 6 and
older do not install peerDependencies automatically):

```sh
npm install --save-dev @response200/eslint-config \
  eslint \
  eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise \
  eslint-config-standard-with-typescript @typescript-eslint/eslint-plugin typescript \
  eslint-config-standard-jsx eslint-plugin-jsx-a11y eslint-plugin-react
```

If your project is not a TypeScript project, you can leave
`eslint-config-standard-with-typescript`, `@typescript-eslint/eslint-plugin` and
`typescript` modules out.

If your project is not a JSX project, you can leave
`eslint-config-standard-jsx`, `eslint-plugin-jsx-a11y` and `eslint-plugin-react`
modules out.

## Configuration

Add the following configuration to `.eslintrc.js` file:

```js
const path = require('path')

module.exports = {
  extends: [
    '@response200/eslint-config/recommended',
    '@response200/eslint-config/recommended-jsx'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        '@response200/eslint-config/recommended-typescript'
      ]
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json')
  }
}
```

If you do not use TypeScript or do not wish to use TypeScript rules, you can
leave out the following lines.

```js
const path = require('path')

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        '@response200/eslint-config/recommended-typescript'
      ]
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json')
  },
```

If you do not use JSX or do not wish to use JSX rules, you can leave out the
following line.

```js
    '@response200/eslint-config/recommended-jsx'
```

## Notes on JSX rules and React

`response200/eslint-config` includes JSX rules, and `eslint-plugin-react` is
automatically installed with it. However, no React specific rules are enabled.
`response200/eslint-config` aims to be a generic, framework agnostic ruleset
that fits in all kinds of JSX projects including those that use other JSX
frameworks, eg. [Crank](https://crank.js.org).

If you do use React, it's recommended to include [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react),
[eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
and [eslint-config-standard-react](https://github.com/standard/eslint-config-standard-react)
rulesets. Run the following command to install them:

```sh
npm install --save-dev eslint-plugin-react-hooks eslint-config-standard-react
```

Then add the following lines to the `extends` array in `.eslintrc.js`:

```js
  extends: [
    ...
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard-react'
  ],
```

## lint.sh

`response200/eslint-config` includes `lint.sh` tool. It's a useful command-line
tool for linting various file selections quickly and easily in a git project.
The tool is a helper for running eslint.

The tool has 5 operational modes:

* paths (lint specified files and/or directories)
* changed (lint uncommitted changed files incl. staged files)
* staged (lint staged files)
* rev (lint files that have been changed after a specified revision)
* branch (lint files that have been changed in the current branch)

Lint.sh gathers a list of changed .js, .jsx, .ts and .tsx files by calling `git diff`.
In `paths` mode the file list is user specified. The file list and possible
command-line arguments are passed to eslint.

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

**Tip:** create a git pre-commit hook that runs `node_modules/.bin/lint.sh staged --fix`.
Automatic linting and fixing on each git commit!


Example 5: lint files changed in the latest commit
```sh
npx lint.sh rev HEAD~1..HEAD
```

**Tip:** `rev` mode accepts any git revision. See `man 7 gitrevisions` to see
what git revisions can be used for.


Example 6: lint files that have been changed in the current branch
```sh
npx lint.sh branch
```

**Tip:** configure your CI environment to run `node_modules/.bin/lint.sh branch`
for each pull request. If the files changed in the branch do not pass linting,
lint.sh exits with a non-zero exit code which can be used to prevent merging of
the branch to master. Automatic code quality monitoring and enforcement of
coding conventions.

**PRO TIP:** modes have abbreviated aliases p, c, s, r and b.

## Common issues

### Linting dotfiles fails in a TypeScript project

Linting dotfiles, such as ESLint's `.eslintrc.js`, might fail in a TypeScript
project with the following error message:

```
/path/to/.eslintrc.js
  0:0  error  Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.
The file does not match your project config: .eslintrc.js.
The file must be included in at least one of the projects provided
```

This error happens because by default `tsc` does not read dotfiles. The issue
can be fixed by adding the following lines to the `tsconfig.json` file:

```json5
{
  // This include array enables linting of dotfiles.
  "include": ["**/*", "**/.*"]
}
```

## Licence

[BSD 3-Clause](LICENCE.md). Authored by Joel Posti.

## Support the development of response200/eslint-config

`response200/eslint-config` is an open source project distributed free of charge.
I hope you find it useful. If you wish to support its development or if you
are feeling generous, you can donate an amount of your choosing with
[PayPal](https://paypal.me/joelposti).
</div>
