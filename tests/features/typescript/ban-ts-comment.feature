@typescript
Feature: TypeScript rules

  Scenario: @typescript-eslint/ban-ts-comment rule (part 1/2)
    Given there is typescript/ban-ts-comment-1.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 3 lint errors
    And line 3 should contain error 'Do not use "@ts-nocheck" because it alters compilation errors.'
    And line 5 should contain error 'Use "@ts-expect-error" to ensure an error is actually being suppressed.'
    And line 5 should contain error 'Do not use "@ts-ignore" because it alters compilation errors.'

  Scenario: @typescript-eslint/ban-ts-comment rule (part 2/2)
    Given there is typescript/ban-ts-comment-2.ts file
    When file is linted against recommended-typescript ruleset
    Then file should contain 2 lint errors
    And line 1 should contain error 'Include a description after the "@ts-expect-error" directive to explain why the @ts-expect-error is necessary. The description must be 3 characters or longer.'
    And line 4 should contain error 'Include a description after the "@ts-expect-error" directive to explain why the @ts-expect-error is necessary. The description must be 3 characters or longer.'
