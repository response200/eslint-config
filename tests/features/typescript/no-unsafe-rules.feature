@typescript
Feature: TypeScript rules

  Scenario: @typescript-eslint/no-unsafe-argument rule
    Given there is typescript/no-unsafe-argument.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 4 lint errors
    And line 22 should contain error "Unsafe argument of type `any` assigned to a parameter of type `string`."
    And line 24 should contain error "Unsafe argument of type `any` assigned to a parameter of type `string[]`."
    And line 25 should contain error "Unsafe argument of type `any` assigned to a parameter of type `any[]`."
    And line 28 should contain error "Unsafe argument of type `any[]` assigned to a parameter of type `string[]`."

  Scenario: @typescript-eslint/no-unsafe-assignment rule
    Given there is typescript/no-unsafe-assignment.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 10 lint errors
    And line 7 should contain error "Unsafe assignment of an `any` value."
    And line 8 should contain error "Unsafe assignment of an `any` value."
    And line 10 should contain error "Unsafe assignment of type any[] to a variable of type string[]."
    And line 12 should contain error "Unsafe assignment of type any[] to a variable of type string[]."
    And line 15 should contain error "Unsafe assignment of an `any` value."
    And line 16 should contain error "Unsafe assignment of an `any` value."
    And line 17 should contain error "Unsafe assignment of an `any` value."
    And line 18 should contain error "Unsafe assignment of an `any` value."
    And line 21 should contain error "Unsafe assignment of an `any` value."
    And line 23 should contain error "Unsafe assignment of an `any` value."

  Scenario: @typescript-eslint/no-unsafe-call rule
    Given there is typescript/no-unsafe-call.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 2 lint errors
    And line 6 should contain error "Unsafe call of an `any` typed value."
    And line 7 should contain error "Unsafe call of an `any` typed value."

  Scenario: @typescript-eslint/no-unsafe-declaration-merging rule
    Given there is typescript/no-unsafe-declaration-merging.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 2 lint errors
    And line 1 should contain error "Unsafe declaration merging between classes and interfaces."
    And line 5 should contain error "Unsafe declaration merging between classes and interfaces."

  Scenario: @typescript-eslint/no-unsafe-member-access rule
    Given there is typescript/no-unsafe-member-access.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 2 lint errors
    And line 6 should contain error "Unsafe member access .split on an `any` value."
    And line 7 should contain error "Unsafe member access .bar on an `any` value."

  Scenario: @typescript-eslint/no-unsafe-return rule
    Given there is typescript/no-unsafe-return.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 4 lint errors
    And line 8 should contain error "Unsafe return of an `any` typed value."
    And line 12 should contain error "Unsafe return of an `any` typed value."
    And line 20 should contain error "Unsafe return of an `any[]` typed value."
    And line 24 should contain error "Unsafe return of an `any[]` typed value."
