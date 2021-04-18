@typescript
Feature: TypeScript rules

  Scenario: @typescript-eslint/member-ordering rule (part 1/4)
    Given there is typescript/member-ordering-1.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 4 lint errors
    And line 6 should contain error "Member c should be declared before all field definitions."
    And line 18 should contain error "Member c should be declared before all method definitions."
    And line 19 should contain error "Member b2 should be declared before all method definitions."
    And line 20 should contain error "Member b1 should be declared before all method definitions."

  Scenario: @typescript-eslint/member-ordering rule (part 2/4)
    Given there is typescript/member-ordering-2.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 3 lint errors
    And line 4 should contain error 'Member "a1" should be declared before member "a2".'
    And line 6 should contain error 'Member "b1" should be declared before member "b2".'
    And line 12 should contain error 'Member "b1" should be declared before member "b2".'

  Scenario: @typescript-eslint/member-ordering rule (part 3/4)
    Given there is typescript/member-ordering-3.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 1 lint error
    And line 18 should contain error 'Member "a1" should be declared before member "a2".'

  Scenario: @typescript-eslint/member-ordering rule (part 4/4)
    Given there is typescript/member-ordering-4.ts file
    When file is linted against recommended-typescript ruleset
    Then file should pass linting
