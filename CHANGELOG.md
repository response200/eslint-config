<div lang="en-GB">

# Changelog

<!-- New entries inserted automatically after this line -->

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

- Loosened `objectLiteralTypeAssertions` option of
  @typescript-eslint/consistent-type-assertions to allow easier type assertions
  on object literals. There are some legit use cases for type asserting an object
  literal.

- Removed @typescript-eslint/no-implicit-any-catch rule from
  recommended-typescript ruleset. The rule is not needed anymore since
  TypeScript 4.4 introduced `useUnknownInCatchVariables` compiler option.

- @typescript-eslint/naming-convention rule has been fixed in the upstream.
  Previous version did not correctly check naming format of class properties.

- @typescript-eslint/consistent-type-imports rule now supports `type` keyword
  inside curly braces of import statements.

- Default values of `enums`, `generics` and `tuples` options of
  @typescript-eslint/comma-dangle rule had changed to `ignore`. They had to be
  switched explicitly back to `never`.

- Removed explicit enabling of @typescript-eslint/no-unsafe-argument rule from
  recommended-typescript ruleset. It's enabled by default in recent versions of
  @typescript-eslint/eslint-plugin.

### Maintenance
- Updated peer dependencies. Stopped `>=` version range experiment with peer
  dependencies. Peer dependencies now use `^` version ranges.

- Updated dev dependencies.

- Removed fs-extra from dev dependencies. It was needed for copying a directory
  recursively. Since Node.js 16.7.0 it has been possible to use fs.promises.cp
  that supports recursive directory copying.

## [1.1.0](https://github.com/response200/eslint-config/compare/v1.0.0...v1.1.0) (2021-08-08)

### Lint rule changes
- Enabled @typescript-eslint/no-unsafe-argument rule in recommended-typescript
  ruleset. Now all @typescript-eslint/no-unsafe-* rules are enabled.

- Enum keys are now enforced into StrictPascalCase format. Previously
  strictCamelCase format was allowed, as well.

- Enabled @typescript-eslint/comma-dangle rule and disabled comma-dangle rule in
  recommended-typescript ruleset. Now the last member of an enum should not have
  a trailing comma.

- Disabled @typescript-eslint/member-ordering rule in recommended-typescript
  ruleset. The rule proved to be overly strict and of dubious value especially
  when considering that rule violations could not be fixed automatically with
  `--fix` switch.

- Operator-linebreak rule was not correctly applied to .ts and .tsx files. The
  rule works correctly now.

### Maintenance
- Updated dev dependencies.

- Fixed vulnerability in dev dependencies: https://npmjs.com/advisories/1747 (browserslist).

## [1.0.0](https://github.com/response200/eslint-config/compare/v0.0.0...v1.0.0) (2021-05-19)

First release.

</div>
