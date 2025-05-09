<div lang="en-GB">

# Changelog

<!-- New entries inserted automatically after this line -->

## [4.0.0](https://github.com/response200/eslint-config/compare/v3.0.0...v4.0.0) (2025-05-09)

### Breaking changes including lint rule changes
- Converted default, recommended, recommended-jsx and recommended-typescript rulesets to ESLint 9's ‘flat config’ format.

- The goal in this release has been to keep the aforementioned rulesets as backwards compatible with version 3.0.0 as possible. However, migration to ESLint 9, updates and replacements of dependencies, changes in heuristics of some rules and name changes of some rules can, upon linting your project with this new 4.0.0 version, surface new rule violations.

- The aforementioned rulesets are no longer compatible with ESLint 8. ESLint 8 configuration file `.eslintrc`, `.eslintrc.js` or `.eslintrc.json` has to be replaced in your project with ESLint 9 configuration file `eslint.config.js`, `eslint.config.cjs` or `eslint.config.mjs`. There is an example of such a configuration file in README-en.md file.

- Removed `branch` mode from `lint.sh` tool. It was essentially `rev` mode invoked with the argument `master..HEAD`. Nowadays a convention where the primary branch of a repository is named main has become common. Thus the presumption of the `branch` mode that the primary branch is named master is no longer good. As a replacement for the `branch` mode one can use the `rev` mode with the argument `master..HEAD`, `main..HEAD` or with some other argument that references the primary branch.

### New features
- Added support to `lint.sh` for file extensions `.cjs`, `.mjs`, `.cts` and `.mts`.

- Take `NODE_BIN` environment variable into account in `lint.sh` when it executes eslint in a `node` process. Setting the environment variable allows `node` to be executed from a specified path or with specified options.

- Added support to `lint.sh` for running it from a current working directory that is outside the git work tree.

### Maintenance
- Updated eslint-plugin-jsx-a11y 6.9.0 to 6.10.2 and moved it from peer dependencies to ordinary dependencies. It seems with ESLint 9 the convention is to put dependency shareable configs to ordinary dependencies.

- Removed all other peer dependencies. They were replaced by adding neostandard to ordinary dependencies.
    * Neostandard is a spiritual successor to standard and eslint-config-standard. Eslint-config-standard is no longer maintained and lacks support for ESLint 9.
    * Eslint-config-standard-jsx is no longer maintained and lacks support for ESLint 9. Neostandard provides a very similar JSX ruleset.
    * Eslint-config-love (formerly eslint-config-standard-with-typescript) was removed from dependencies, because it is no longer needed. Neostandard provides a very similar TypeScript ruleset.
    * Removed @typescript-eslint/eslint-plugin from dependencies. It is installed anyway because neostandard has it as a transitive dependency.

- Added @eslint/js to dependencies. It provides ESLint 9's own JavaScript rulesets.

- Added eslint with `>=9` version range to peer dependencies. This is recommended by [ESLint's documentation on shareable configs](https://eslint.org/docs/latest/extend/shareable-configs#publishing-a-shareable-config).

- Updated dev dependencies @babel/*, @cucumber/cucumber and typescript to their latest versions.

- Fixed https://github.com/advisories/GHSA-968p-4wvh-cqc8 (@babel/helpers) by updating transitive @babel/helpers dependency from version 7.20.7 to version 7.27.0.

- Fixed https://github.com/advisories/GHSA-3xgq-45jj-v275 (cross-spawn) by updating transitive cross-spawn dependency from version 7.0.3 to version 7.0.6.

- Fixed https://github.com/advisories/GHSA-952p-6rrq-rcjv (micromatch) by updating transitive micromatch dependency from version 4.0.7 to version 4.0.8.

- Replaced `git rev-parse --show-toplevel`-based current-working-directory-normalisation logic in `lint.sh` tool and in other scripts with other normalisation logics. This removes completely or partially the dependency to `git` executable from those scripts.

- Updated texts and instructions in README.md and README-en.md to be compatible with ESLint 9 and to be aligned with the rulesets and plugins @response200/eslint-config now uses.

## [3.0.0](https://github.com/response200/eslint-config/compare/v2.0.0...v3.0.0) (2024-07-26)

### Lint rule changes
- Some rules added and rule configs changed in updated peer dependencies.

- Loosened @typescript-eslint/naming-convention rule: if property name requires quotes, allow the property name to be in any format. This is needed to allow property names matching to for example HTTP headers such as `'Content-Type': 'application/json'`.

### Maintenance
- Updated peer dependencies. Replaced eslint-config-standard-with-typescript with eslint-config-love, because the former is deprecated and the latter is its successor. Installed eslint-config-love version 47.0.0 (dated 2024-04-10) instead of the latest version, because 47.0.0 is the last version that supports ESLint 8.x style non-flat config files. We do not yet plan to convert to ESLint 9.x flat config file format.

- Updated dev dependencies.

- Removed babel-plugin-module-resolver dev dependency by replacing it with a simplified local implementation.

- Removed chai and @types/chai from dev dependencies. Use Node.js's assert/strict package instead.

- Fixed https://github.com/advisories/GHSA-9c47-m6qq-7p4h (json5) by updating transitive json5 dependency from version 1.0.1 to version 1.0.2.

- Fixed https://github.com/advisories/GHSA-c2qf-rxjj-qqgw (semver) by updating transitive semver dependency from version 5.7.1 to version 5.7.2.

- Replaced reference to eslint-config-standard-with-typescript with eslint-config-love in README files.

- Removed ‘Installation – Npm 6 or older’ section from the README files. Npm 6 is rather old. No need to support that anymore.

## [2.0.0](https://github.com/response200/eslint-config/compare/v1.1.0...v2.0.0) (2022-12-26)

### Lint rule changes
- Enabled
  @typescript-eslint/no-duplicate-enum-values,
  @typescript-eslint/no-meaningless-void-operator,
  @typescript-eslint/no-redundant-type-constituents,
  @typescript-eslint/no-unsafe-declaration-merging and
  @typescript-eslint/no-useless-empty-export
  rules in recommended-typescript ruleset.

- Enabled promise/no-multiple-resolved rule in recommended ruleset.

- Loosened `objectLiteralTypeAssertions` option of @typescript-eslint/consistent-type-assertions to allow easier type assertions on object literals. There are some legit use cases for type asserting an object literal.

- Removed @typescript-eslint/no-implicit-any-catch rule from recommended-typescript ruleset. The rule is not needed anymore since TypeScript 4.4 introduced `useUnknownInCatchVariables` compiler option.

- @typescript-eslint/naming-convention rule has been fixed in the upstream. Previous version did not correctly check naming format of class properties.

- @typescript-eslint/consistent-type-imports rule now supports `type` keyword inside curly braces of import statements.

- Default values of `enums`, `generics` and `tuples` options of @typescript-eslint/comma-dangle rule had changed to `ignore`. They had to be switched explicitly back to `never`.

- Removed explicit enabling of @typescript-eslint/no-unsafe-argument rule from recommended-typescript ruleset. It's enabled by default in recent versions of @typescript-eslint/eslint-plugin.

### Maintenance
- Updated peer dependencies. Stopped `>=` version range experiment with peer dependencies. Peer dependencies now use `^` version ranges.

- Updated dev dependencies.

- Removed fs-extra from dev dependencies. It was needed for copying a directory recursively. Since Node.js 16.7.0 it has been possible to use fs.promises.cp that supports recursive directory copying.

## [1.1.0](https://github.com/response200/eslint-config/compare/v1.0.0...v1.1.0) (2021-08-08)

### Lint rule changes
- Enabled @typescript-eslint/no-unsafe-argument rule in recommended-typescript ruleset. Now all @typescript-eslint/no-unsafe-* rules are enabled.

- Enum keys are now enforced into StrictPascalCase format. Previously strictCamelCase format was allowed, as well.

- Enabled @typescript-eslint/comma-dangle rule and disabled comma-dangle rule in recommended-typescript ruleset. Now the last member of an enum should not have a trailing comma.

- Disabled @typescript-eslint/member-ordering rule in recommended-typescript ruleset. The rule proved to be overly strict and of dubious value especially when considering that rule violations could not be fixed automatically with `--fix` switch.

- Operator-linebreak rule was not correctly applied to .ts and .tsx files. The rule works correctly now.

### Maintenance
- Updated dev dependencies.

- Fixed vulnerability in dev dependencies: https://npmjs.com/advisories/1747 (browserslist).

## [1.0.0](https://github.com/response200/eslint-config/compare/v0.0.0...v1.0.0) (2021-05-19)

First release.

</div>
