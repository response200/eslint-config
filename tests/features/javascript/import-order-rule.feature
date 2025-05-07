@javascript
Feature: JavaScript rules

  Scenario: import/order rule (part 1/2)
    Given there is javascript/import/order-1.js file
    When file is linted
    Then file should contain 10 lint errors
    And line 4 should contain error "`./a1` import should occur before import of `./a2`"
    And line 6 should contain error "`./b/b1` import should occur before import of `./b/b2`"
    And line 7 should contain error "`../c2` import should occur before import of `./a2`"
    And line 8 should contain error "`../c1` import should occur before import of `./a2`"
    And line 9 should contain error "`src/d2` import should occur before import of `./a2`"
    And line 10 should contain error "`src/d1` import should occur before import of `./a2`"
    And line 11 should contain error "`lodash` import should occur before import of `./a2`"
    And line 12 should contain error "`express` import should occur before import of `./a2`"
    And line 13 should contain error "`path` import should occur before import of `./a2`"
    And line 14 should contain error "`fs` import should occur before import of `./a2`"

  Scenario: import/order rule (part 2/2)
    Given there is javascript/import/order-2.js file
    When file is linted
    Then file should pass linting
