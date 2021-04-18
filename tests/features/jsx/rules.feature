@jsx
Feature: JSX rules

  Scenario: jsx-a11y/alt-text rule
    Given there is jsx/a11y/alt-text.tsx file
    When file is linted against recommended-jsx ruleset
    Then file should contain 1 lint error
    And line 2 should contain error "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images."

  Scenario: jsx-quotes rule
    Given there is jsx/jsx-quotes.tsx file
    When file is linted against recommended-jsx ruleset
    Then file should contain 1 lint error
    And line 6 should contain error "Unexpected usage of singlequote."
