@scripts @scripts/lint
Feature: scripts/lint.sh

  Scenario: paths mode correctly lints specified paths
    Given script scripts/lint.sh
    And argument paths
    And argument tests/sample-files/scripts/foo.js
    And argument tests/sample-files/scripts/subdirectory
    When script is run
    Then script should exit with code 1
    And files should contain 2 lint errors
    And file tests/sample-files/scripts/foo.js should contain 1 lint error
    And line 2 of tests/sample-files/scripts/foo.js should contain error "'foo2' is assigned a value but never used."
    And file tests/sample-files/scripts/subdirectory/bar.js should contain 1 lint error
    And line 2 of tests/sample-files/scripts/subdirectory/bar.js should contain error "'bar2' is assigned a value but never used."

  Scenario: paths mode is correctly dry run
    Given script scripts/lint.sh
    And argument paths
    And argument --dry-run
    And argument tests/sample-files/scripts/foo.js
    And argument tests/sample-files/scripts/subdirectory
    When script is run
    Then script should exit with code 0
    And script should output
      """
      Dry-run option was used. No linting was performed. Selection of files
      (might include eslint options in paths mode):
      tests/sample-files/scripts/foo.js tests/sample-files/scripts/subdirectory --format json --no-ignore
      """

  Scenario: changed mode correctly lints changed files
    Given git repository is created
    And script scripts/lint.sh
    And argument changed
    When git file tests/sample-files/scripts/foo.js is changed
    And git file tests/sample-files/scripts/subdirectory/bar.js is changed
    And git file tests/sample-files/scripts/foo.js is staged
    And script is run in the git repository
    Then script should exit with code 1
    And files should contain 4 lint errors
    And git file tests/sample-files/scripts/foo.js should contain 2 lint errors
    And line 2 of git file tests/sample-files/scripts/foo.js should contain error "'foo2' is assigned a value but never used."
    And line 3 of git file tests/sample-files/scripts/foo.js should contain error "'unusedConst' is assigned a value but never used."
    And git file tests/sample-files/scripts/subdirectory/bar.js should contain 2 lint errors
    And line 2 of git file tests/sample-files/scripts/subdirectory/bar.js should contain error "'bar2' is assigned a value but never used."
    And line 3 of git file tests/sample-files/scripts/subdirectory/bar.js should contain error "'unusedConst' is assigned a value but never used."

  Scenario: changed mode is correctly dry run
    Given git repository is created
    And script scripts/lint.sh
    And argument changed
    And argument --dry-run
    When git file tests/sample-files/scripts/foo.js is changed
    And git file tests/sample-files/scripts/subdirectory/bar.js is changed
    And git file tests/sample-files/scripts/foo.js is staged
    And script is run in the git repository
    Then script should exit with code 0
    And script should output
      """
      Dry-run option was used. No linting was performed. Selection of files
      (might include eslint options in paths mode):
      tests/sample-files/scripts/foo.js
      tests/sample-files/scripts/subdirectory/bar.js
      """

  Scenario: staged mode correctly lints staged files
    Given git repository is created
    And script scripts/lint.sh
    And argument staged
    When git file tests/sample-files/scripts/foo.js is changed
    And git file tests/sample-files/scripts/subdirectory/bar.js is changed
    And git file tests/sample-files/scripts/foo.js is staged
    And script is run in the git repository
    Then script should exit with code 1
    And files should contain 2 lint errors
    And git file tests/sample-files/scripts/foo.js should contain 2 lint errors
    And line 2 of git file tests/sample-files/scripts/foo.js should contain error "'foo2' is assigned a value but never used."
    And line 3 of git file tests/sample-files/scripts/foo.js should contain error "'unusedConst' is assigned a value but never used."

  Scenario: staged mode is correctly dry run
    Given git repository is created
    And script scripts/lint.sh
    And argument staged
    And argument --dry-run
    When git file tests/sample-files/scripts/foo.js is changed
    And git file tests/sample-files/scripts/subdirectory/bar.js is changed
    And git file tests/sample-files/scripts/foo.js is staged
    And script is run in the git repository
    Then script should exit with code 0
    And script should output
      """
      Dry-run option was used. No linting was performed. Selection of files
      (might include eslint options in paths mode):
      tests/sample-files/scripts/foo.js
      """

  Scenario: rev mode correctly lints files changed in specified revision
    Given git repository is created
    And script scripts/lint.sh
    And argument rev
    And argument HEAD~1..HEAD
    When script is run in the git repository
    Then script should exit with code 1
    And files should contain 1 lint error
    And git file tests/sample-files/scripts/subdirectory/bar.js should contain 1 lint error
    And line 2 of git file tests/sample-files/scripts/subdirectory/bar.js should contain error "'bar2' is assigned a value but never used."

  Scenario: rev mode is correctly dry run
    Given git repository is created
    And script scripts/lint.sh
    And argument rev
    And argument --dry-run
    And argument HEAD~1..HEAD
    When script is run in the git repository
    Then script should exit with code 0
    And script should output
      """
      Dry-run option was used. No linting was performed. Selection of files
      (might include eslint options in paths mode):
      tests/sample-files/scripts/subdirectory/bar.js
      """

  Scenario: rev mode correctly lints files changed in active branch
    Given git repository is created
    And git branch is switched to test
    And script scripts/lint.sh
    And argument rev
    And argument master..HEAD
    When script is run in the git repository
    Then script should exit with code 1
    And files should contain 1 lint error
    And git file tests/sample-files/scripts/baz.js should contain 1 lint error
    And line 2 of git file tests/sample-files/scripts/baz.js should contain error "'baz2' is assigned a value but never used."

  Scenario: rev mode is correctly dry run against files in active branch
    Given git repository is created
    And git branch is switched to test
    And script scripts/lint.sh
    And argument rev
    And argument --dry-run
    And argument master..HEAD
    When script is run in the git repository
    Then script should exit with code 0
    And script should output
      """
      Dry-run option was used. No linting was performed. Selection of files
      (might include eslint options in paths mode):
      tests/sample-files/scripts/baz.js
      """
