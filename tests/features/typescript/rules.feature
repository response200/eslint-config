@typescript
Feature: TypeScript rules

  Scenario: @typescript-eslint/array-type rule
    Given there is typescript/array-type.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 4 lint errors
    And line 3 should contain error "Array type using 'Array<string>' is forbidden. Use 'string[]' instead."
    And line 4 should contain error "Array type using 'Array<string>' is forbidden. Use 'string[]' instead."
    And line 5 should contain error "Array type using 'Array<T>' is forbidden. Use 'T[]' instead."
    And line 6 should contain error "Array type using 'Array<T>' is forbidden. Use 'T[]' instead."

  Scenario: @typescript-eslint/consistent-type-assertions rule
    Given there is typescript/consistent-type-assertions.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 7 lint errors
    And line 3 should contain error "Use 'as string' instead of '<string>'."
    And line 3 should contain error "Use 'as unknown' instead of '<unknown>'."
    And line 10 should contain error "Use 'as Foo' instead of '<Foo>'."
    And line 10 should contain error "Use 'as unknown' instead of '<unknown>'."
    And line 17 should contain error "Use 'as Foo' instead of '<Foo>'."
    And line 19 should contain error "Always prefer const x: T = { ... }."
    And line 20 should contain error "Use 'as Foo' instead of '<Foo>'."

  Scenario: @typescript-eslint/consistent-type-definitions rule
    Given there is typescript/consistent-type-definitions.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 2 lint errors
    And line 2 should contain error "Use an `interface` instead of a `type`."
    And line 8 should contain error "Use an `interface` instead of a `type`."

  Scenario: @typescript-eslint/consistent-type-imports rule
    Given there is typescript/consistent-type-imports.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 6 lint errors
    And line 3 should contain error "All imports in the declaration are only used as types. Use `import type`"
    And line 5 should contain error 'Type import "constB" is used by decorator metadata'
    And line 8 should contain error 'Import "TypeC" is only used as types'
    And line 10 should contain error 'Type import "constD" is used by decorator metadata'
    And line 17 should contain error "`import()` type annotations are forbidden."
    And line 18 should contain error "`import()` type annotations are forbidden."

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
    Then file should contain 10 lint errors
    And line 2 should contain error "Unexpected separator (,)."
    And line 4 should contain error "Unexpected separator (,)."
    And line 8 should contain error "Unexpected separator (,)."
    And line 9 should contain error "Unexpected separator (,)."
    And line 11 should contain error "Expected a comma."
    And line 12 should contain error "Expected a comma."
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

  Scenario: @typescript-eslint/no-explicit-any rule
    Given there is typescript/no-explicit-any.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 1 lint error
    And line 1 should contain error "Unexpected any. Specify a different type."

  Scenario: @typescript-eslint/no-implicit-any-catch rule
    Given there is typescript/no-implicit-any-catch.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 1 lint error
    And line 3 should contain error "Implicit any in catch clause"

  Scenario: @typescript-eslint/no-inferrable-types rule
    Given there is typescript/no-inferrable-types.ts file
    When file is linted against recommended-typescript ruleset
    Then file should pass linting

  Scenario: @typescript-eslint/no-invalid-void-type rule
    Given there is typescript/no-invalid-void-type.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 1 lint error
    And line 1 should contain error "void is only valid as a return type or generic type variable"

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

  Scenario: @typescript-eslint/prefer-enum-initializers rule
    Given there is typescript/prefer-enum-initializers.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 1 lint error
    And line 2 should contain error "The value of the member 'bar' should be explicitly defined"

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
