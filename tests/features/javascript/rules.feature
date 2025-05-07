@javascript
Feature: JavaScript rules

  Scenario: arrow-parens rule
    Given there is javascript/arrow-parens.js file
    When file is linted
    Then file should contain 1 lint error
    And line 2 should contain error "Expected parentheses around arrow function argument."

  Scenario: no-console rule
    Given there is javascript/no-console.js file
    When file is linted
    Then file should contain 1 lint error
    And line 1 should contain error "Unexpected console statement."

  Scenario: operator-linebreak rule
    Given there is javascript/operator-linebreak.js file
    When file is linted
    Then file should contain 8 lint errors
    And line 3 should contain error "'?' should be placed at the beginning of the line."
    And line 4 should contain error "':' should be placed at the beginning of the line."
    And line 11 should contain error "'??' should be placed at the beginning of the line."
    And line 17 should contain error "'&&' should be placed at the beginning of the line."
    And line 23 should contain error "'||' should be placed at the beginning of the line."
    And line 31 should contain error "'??=' should be placed at the beginning of the line."
    And line 38 should contain error "'&&=' should be placed at the beginning of the line."
    And line 45 should contain error "'||=' should be placed at the beginning of the line."

  Scenario: require-await rule
    Given there is javascript/require-await.js file
    When file is linted
    Then file should contain 1 lint error
    And line 5 should contain error "Async function 'bar' has no 'await' expression."

  # Commented out because import/extensions rule does not yet support `ignore`
  # default behaviour which would achieve the desired result.
  # Scenario: import/extensions rule
    # Given there is javascript/import/extensions.js file
    # When file is linted
    # Then file should contain 6 lint errors
    # And line 2 should contain error 'Unexpected use of file extension "js" for "src/foo.js"'
    # And line 3 should contain error 'Unexpected use of file extension "jsx" for "src/foo.jsx"'
    # And line 4 should contain error 'Unexpected use of file extension "ts" for "src/foo.ts"'
    # And line 5 should contain error 'Unexpected use of file extension "tsx" for "src/foo.tsx"'
    # And line 6 should contain error 'Unexpected use of file extension "ts" for "src/foo.d.ts"'
    # And line 10 should contain error 'Unexpected use of file extension "js" for "foo-package/bar-file.js"'

  Scenario: import/newline-after-import rule
    Given there is javascript/import/newline-after-import.js file
    When file is linted
    Then file should contain 1 lint error
    And line 1 should contain error "Expected 1 empty line after import statement not followed by another import."

  Scenario: import/no-amd rule
    Given there is javascript/import/no-amd.js file
    When file is linted
    Then file should contain 2 lint errors
    And line 2 should contain error "Expected imports instead of AMD define()."
    And line 3 should contain error "Expected imports instead of AMD require()."

  Scenario: import/no-commonjs rule
    Given there is javascript/import/no-commonjs.js file
    When file is linted
    Then file should contain 1 lint error
    And line 4 should contain error 'Expected "import" instead of "require()"'

  Scenario: import/no-default-export rule
    Given there is javascript/import/no-default-export.js file
    When file is linted
    Then file should contain 1 lint error
    And line 1 should contain error "Prefer named exports."

  Scenario: import/no-deprecated rule
    Given there is javascript/import/no-deprecated.js file
    When file is linted
    Then file should contain 1 lint warning
    And line 2 should contain warning "Deprecated: Do not use this anymore. It will be removed in the future."

  Scenario: import/no-namespace rule
    Given there is javascript/import/no-namespace.js file
    When file is linted
    Then file should contain 1 lint error
    And line 2 should contain error "Unexpected namespace import."

  Scenario: import/no-self-import rule
    Given there is javascript/import/no-self-import.js file
    When file is linted
    Then file should contain 1 lint error
    And line 2 should contain error "Module imports itself."

  Scenario: import/no-unassigned-import rule
    Given there is javascript/import/no-unassigned-import.js file
    When file is linted
    Then file should contain 1 lint error
    And line 1 should contain error "Imported module should be assigned"

  Scenario: import/no-unresolved rule
    Given there is javascript/import/no-unresolved.js file
    When file is linted
    Then file should pass linting

  Scenario: import/no-useless-path-segments rule
    Given there is javascript/import/no-useless-path-segments.js file
    When file is linted
    Then file should contain 2 lint errors
    And line 2 should contain error 'Useless path segments for "../import/helpers/no-useless-path-segments-foo", should be "./helpers/no-useless-path-segments-foo"'
    And line 3 should contain error 'Useless path segments for "./../bar", should be "../bar"'

  Scenario: promise/always-return rule
    Given there is javascript/promise/always-return.js file
    When file is linted
    Then file should pass linting

  Scenario: promise/catch-or-return rule
    Given there is javascript/promise/catch-or-return.js file
    When file is linted
    Then file should pass linting

  Scenario: promise/no-multiple-resolved rule
    Given there is javascript/promise/no-multiple-resolved.js file
    When file is linted
    Then file should contain 1 lint error
    And line 6 should contain error "Promise should not be resolved multiple times. Promise is potentially resolved on line 3."

  Scenario: promise/no-nesting rule
    Given there is javascript/promise/no-nesting.js file
    When file is linted
    Then file should contain 1 lint error
    And line 4 should contain error "Avoid nesting promises."

  Scenario: promise/no-return-in-finally rule
    Given there is javascript/promise/no-return-in-finally.js file
    When file is linted
    Then file should contain 1 lint error
    And line 2 should contain error "No return in finally"

  Scenario: promise/valid-params rule
    Given there is javascript/promise/valid-params.js file
    When file is linted
    Then file should contain 2 lint errors
    And line 1 should contain error "Promise.then() requires 1 or 2 arguments, but received 0"
    And line 4 should contain error "Promise.then() requires 1 or 2 arguments, but received 3"
