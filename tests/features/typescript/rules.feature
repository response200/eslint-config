@typescript
Feature: TypeScript rules

  Scenario: @typescript-eslint/array-type rule
    Given there is typescript/array-type.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 4 lint errors
    And line 3 should contain error "Array type using 'Array<string>' is forbidden. Use 'string[]' instead."
    And line 4 should contain error "Array type using 'ReadonlyArray<string>' is forbidden. Use 'readonly string[]' instead."
    And line 5 should contain error "Array type using 'Array<T>' is forbidden. Use 'T[]' instead."
    And line 6 should contain error "Array type using 'ReadonlyArray<T>' is forbidden. Use 'readonly T[]' instead."

  Scenario: @typescript-eslint/comma-dangle rule
    Given there is typescript/comma-dangle.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 9 lint errors
    And line 2 should contain error "Unexpected trailing comma."
    And line 5 should contain error "Unexpected trailing comma."
    And line 7 should contain error "Unexpected trailing comma."
    And line 8 should contain error "Unexpected trailing comma."
    And line 9 should contain error "Unexpected trailing comma."
    And line 11 should contain error "Unexpected trailing comma."
    And line 12 should contain error "Unexpected trailing comma."
    And line 13 should contain error "Unexpected trailing comma."
    And line 17 should contain error "Unexpected trailing comma."

  Scenario: @typescript-eslint/consistent-type-assertions rule
    Given there is typescript/consistent-type-assertions.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 6 lint errors
    And line 3 should contain error "Use 'as string' instead of '<string>'."
    And line 3 should contain error "Use 'as unknown' instead of '<unknown>'."
    And line 10 should contain error "Use 'as Foo' instead of '<Foo>'."
    And line 10 should contain error "Use 'as unknown' instead of '<unknown>'."
    And line 17 should contain error "Use 'as Foo' instead of '<Foo>'."
    And line 20 should contain error "Use 'as Foo' instead of '<Foo>'."

  Scenario: @typescript-eslint/consistent-type-definitions rule
    Given there is typescript/consistent-type-definitions.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 2 lint errors
    And line 4 should contain error "Use an `interface` instead of a `type`."
    And line 10 should contain error "Use an `interface` instead of a `type`."

  Scenario: @typescript-eslint/consistent-type-imports rule
    Given there is typescript/consistent-type-imports.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 4 lint errors
    And line 3 should contain error "All imports in the declaration are only used as types. Use `import type`."
    And line 8 should contain error 'Imports "TypeC" are only used as type.'
    And line 20 should contain error "`import()` type annotations are forbidden."
    And line 21 should contain error "`import()` type annotations are forbidden."

  Scenario: @typescript-eslint/explicit-function-return-type rule
    Given there is typescript/explicit-function-return-type.ts file
    When file is linted against recommended-typescript ruleset
    Then file should pass linting

  Scenario: @typescript-eslint/explicit-module-boundary-types rule
    Given there is typescript/explicit-module-boundary-types.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 1 lint error
    And line 5 should contain error "Missing return type on function."

  Scenario: @typescript-eslint/member-delimiter-style rule
    Given there is typescript/member-delimiter-style.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 17 lint errors
    And line 1 should contain error "Requires a space after '{'."
    And line 1 should contain error "Requires a space before '}'."
    And line 2 should contain error "Requires a space after '{'."
    And line 2 should contain error "Unexpected separator (,)."
    And line 4 should contain error "Unexpected separator (,)."
    And line 8 should contain error "Unexpected separator (,)."
    And line 9 should contain error "Unexpected separator (,)."
    And line 11 should contain error "Requires a space after '{'."
    And line 11 should contain error "Expected a comma."
    And line 11 should contain error "Requires a space before '}'."
    And line 12 should contain error "Requires a space after '{'."
    And line 12 should contain error "Expected a comma."
    And line 12 should contain error "Requires a space before '}'."
    And line 12 should contain error "Unexpected separator (;)."
    And line 14 should contain error "Unexpected separator (;)."
    And line 18 should contain error "Unexpected separator (;)."
    And line 19 should contain error "Unexpected separator (;)."

  Scenario: @typescript-eslint/method-signature-style rule
    Given there is typescript/method-signature-style.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 1 lint error
    And line 2 should contain error "Shorthand method signature is forbidden. Use a function property instead."

  Scenario: @typescript-eslint/no-confusing-void-expression rule
    Given there is typescript/no-confusing-void-expression.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 2 lint errors
    And line 5 should contain error "Returning a void expression from an arrow function shorthand is forbidden. Please add braces to the arrow function."
    And line 6 should contain error "Returning a void expression from an arrow function shorthand is forbidden. Please add braces to the arrow function."

  Scenario: @typescript-eslint/no-duplicate-enum-values rule
    Given there is typescript/no-duplicate-enum-values.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 1 lint error
    And line 3 should contain error "Duplicate enum member value foo."

  Scenario: @typescript-eslint/no-explicit-any rule
    Given there is typescript/no-explicit-any.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 1 lint error
    And line 1 should contain error "Unexpected any. Specify a different type."

  Scenario: @typescript-eslint/no-implicit-any-catch rule
    Given there is typescript/no-implicit-any-catch.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 0 lint errors

  Scenario: @typescript-eslint/no-inferrable-types rule
    Given there is typescript/no-inferrable-types.ts file
    When file is linted against recommended-typescript ruleset
    Then file should pass linting

  Scenario: @typescript-eslint/no-invalid-void-type rule
    Given there is typescript/no-invalid-void-type.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 2 lint errors
    And line 1 should contain error "void is only valid as a return type or generic type argument."
    And line 2 should contain error "void is not valid as a constituent in a union type"

  Scenario: @typescript-eslint/no-meaningless-void-operator rule
    Given there is typescript/no-meaningless-void-operator.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 4 lint errors
    And line 11 should contain error "void operator shouldn't be used on void; it should convey that a return value is being ignored"
    And line 13 should contain error "void operator shouldn't be used on void; it should convey that a return value is being ignored"
    And line 38 should contain error "void operator shouldn't be used on never; it should convey that a return value is being ignored"
    And line 40 should contain error "void operator shouldn't be used on never; it should convey that a return value is being ignored"

  Scenario: @typescript-eslint/no-misused-promises rule
    Given there is typescript/no-misused-promises.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 1 lint error
    And line 6 should contain error "Expected non-Promise value in a boolean conditional."

  Scenario: @typescript-eslint/no-non-null-assertion rule
    Given there is typescript/no-non-null-assertion.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 2 lint errors
    And line 7 should contain error "Forbidden non-null assertion."
    And line 8 should contain error "Forbidden non-null assertion."

  Scenario: @typescript-eslint/no-redundant-type-constituents rule
    Given there is typescript/no-redundant-type-constituents.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 2 lint errors
    And line 1 should contain error "'unknown' overrides all other types in this union type."
    And line 2 should contain error "'unknown' is overridden by other types in this intersection type."

  Scenario: @typescript-eslint/no-unnecessary-qualifier rule
    Given there is typescript/no-unnecessary-qualifier.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 1 lint error
    And line 4 should contain error "Qualifier is unnecessary since 'x' is in scope."

  Scenario: @typescript-eslint/no-unnecessary-type-constraint rule
    Given there is typescript/no-unnecessary-type-constraint.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 2 lint errors
    And line 6 should contain error "Constraining the generic type `T` to `any` does nothing and is unnecessary."
    And line 10 should contain error "Constraining the generic type `T` to `unknown` does nothing and is unnecessary."

  Scenario: @typescript-eslint/no-useless-empty-export rule
    Given there is typescript/no-useless-empty-export.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 1 lint error
    And line 2 should contain error "Empty export does nothing and can be removed."

  Scenario: @typescript-eslint/object-curly-spacing rule
    Given there is typescript/object-curly-spacing.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 40 lint errors
    And line 2 should contain error "A space is required after '{'."
    And line 2 should contain error "A space is required before '}'."
    And line 4 should contain error "A space is required before '}'."
    And line 5 should contain error "A space is required after '{'."
    And line 14 should contain error "A space is required after '{'."
    And line 14 should contain error "A space is required before '}'."
    And line 16 should contain error "A space is required before '}'."
    And line 17 should contain error "A space is required after '{'."
    And line 24 should contain error "A space is required after '{'."
    And line 24 should contain error "A space is required before '}'."
    And line 26 should contain error "A space is required before '}'."
    And line 27 should contain error "A space is required after '{'."
    And line 34 should contain error "A space is required after '{'."
    And line 34 should contain error "A space is required before '}'."
    And line 35 should contain error "A space is required before '}'."
    And line 37 should contain error "A space is required before '}'."
    And line 38 should contain error "A space is required after '{'."
    And line 42 should contain error "A space is required before '}'."
    And line 49 should contain error "A space is required before '}'."
    And line 51 should contain error "A space is required before '}'."
    And line 53 should contain error "A space is required before '}'."
    And line 56 should contain error "A space is required before '}'."
    And line 62 should contain error "A space is required after '{'."
    And line 62 should contain error "A space is required before '}'."
    And line 64 should contain error "A space is required before '}'."
    And line 65 should contain error "A space is required after '{'."
    And line 72 should contain error "A space is required after '{'."
    And line 72 should contain error "A space is required before '}'."
    And line 74 should contain error "A space is required before '}'."
    And line 75 should contain error "A space is required after '{'."
    And line 82 should contain error "A space is required after '{'."
    And line 82 should contain error "A space is required before '}'."
    And line 83 should contain error "A space is required before '}'."
    And line 85 should contain error "A space is required before '}'."
    And line 86 should contain error "A space is required after '{'."
    And line 90 should contain error "A space is required before '}'."
    And line 106 should contain error "A space is required after '{'."
    And line 106 should contain error "A space is required before '}'."
    And line 109 should contain error "A space is required before '}'."
    And line 110 should contain error "A space is required after '{'."

  Scenario: @typescript-eslint/prefer-enum-initializers rule
    Given there is typescript/prefer-enum-initializers.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 1 lint error
    And line 2 should contain error "The value of the member 'Bar' should be explicitly defined."

  Scenario: @typescript-eslint/prefer-function-type rule
    Given there is typescript/prefer-function-type.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 1 lint error
    And line 2 should contain error "Interface only has a call signature, you should use a function type instead."

  Scenario: @typescript-eslint/prefer-reduce-type-parameter rule
    Given there is typescript/prefer-reduce-type-parameter.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 1 lint error
    And line 1 should contain error "Unnecessary cast: Array#reduce accepts a type parameter for the default value."

  Scenario: @typescript-eslint/type-annotation-spacing rule
    Given there is typescript/type-annotation-spacing.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 8 lint errors
    And line 2 should contain error "Expected a space after the ':'."
    And line 3 should contain error "Expected a space after the ':'."
    And line 3 should contain error "Unexpected space before the ':'."
    And line 4 should contain error "Unexpected space before the ':'."
    And line 7 should contain error "Expected a space after the '=>'."
    And line 7 should contain error "Expected a space before the '=>'."
    And line 8 should contain error "Expected a space after the '=>'."
    And line 9 should contain error "Expected a space before the '=>'."

  Scenario: @typescript-eslint/unified-signatures rule
    Given there is typescript/unified-signatures.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 1 lint error
    And line 3 should contain error "These overloads can be combined into one signature taking `string | number`."

  Scenario: operator-linebreak rule
    This test ensures that operator-linebreak rule works correctly for .ts
    files, too. It was discovered that operator-linebreak rule that is defined
    in recommended.js does not get applied to .ts files unless the rule is also
    defined in recommended-typescript.js.

    Given there is typescript/operator-linebreak.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 8 lint errors
    And line 3 should contain error "'?' should be placed at the beginning of the line."
    And line 4 should contain error "':' should be placed at the beginning of the line."
    And line 11 should contain error "'??' should be placed at the beginning of the line."
    And line 17 should contain error "'&&' should be placed at the beginning of the line."
    And line 23 should contain error "'||' should be placed at the beginning of the line."
    And line 31 should contain error "'??=' should be placed at the beginning of the line."
    And line 38 should contain error "'&&=' should be placed at the beginning of the line."
    And line 45 should contain error "'||=' should be placed at the beginning of the line."
