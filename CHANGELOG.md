<div lang="en-GB">

# Changelog

<!-- New entries inserted automatically after this line -->

## [1.1.0](https://github.com/response200/eslint-config/compare/v1.0.0...v1.1.0) (2021-08-08)

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

- Updated devDependencies.
- Fixed vulnerability in devDependencies: https://npmjs.com/advisories/1747 (browserslist).

## [1.0.0](https://github.com/response200/eslint-config/compare/v0.0.0...v1.0.0) (2021-05-19)

First release.

</div>
