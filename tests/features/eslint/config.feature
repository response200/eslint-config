@eslint
Feature: ESLint config

  Scenario: reportUnusedDisableDirectives config
    Given there is eslint/unused-eslint-disable-directive.js file
    When file is linted against recommended ruleset
    Then file should contain 2 lint warnings
    And line 1 should contain warning "Unused eslint-disable directive (no problems were reported from 'no-unused-vars')."
    And line 2 should contain warning "Unused eslint-disable directive (no problems were reported from 'arrow-parens')."
