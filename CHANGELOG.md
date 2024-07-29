<div lang="en-GB">

# Changelog

<!-- New entries inserted automatically after this line -->

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
