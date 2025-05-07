@eslint
Feature: ESLint config

  Scenario: reportUnusedDisableDirectives config
    Given there is eslint/unused-eslint-disable-directive.js file
    When file is linted
    Then file should contain 2 lint errors
    And line 1 should contain error "Unused eslint-disable directive (no problems were reported from 'no-unused-vars')."
    And line 2 should contain error "Unused eslint-disable directive (no problems were reported from 'arrow-parens')."

  Scenario Template: calculate config for <sampleFile> file
    Given there is <sampleFile> file
    When config matching to file is calculated
    Then calculated config should match with config fixture

  Scenarios:
      | sampleFile               |
      | eslint/non-existent.js   |
      | eslint/non-existent.jsx  |
      | eslint/non-existent.ts   |
      | eslint/non-existent.tsx  |
      | eslint/non-existent.d.ts |
