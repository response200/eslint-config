#!/usr/bin/env sh

scriptDir="$(dirname "$(realpath "$0")")"
scriptName="$(basename "$0")"

. "$scriptDir/helpers/git.sh"
. "$scriptDir/helpers/paths.sh"

gitDir="$(findDirInParentDirs .git "$scriptDir")"
exitCode="$?"
if [ "$exitCode" = 0 ]; then
  gitWorkTree="$(dirname "$gitDir")"
else
  echo "Could not determine the project directory/git work tree. There is no .git directory in \`$scriptDir\` nor in any of its parent directories. $scriptName only works in a git work tree." 1>&2
  exit 1
fi

nodeModulesDir="$gitWorkTree/node_modules"
dryRun=0
mode="$1"
rev="$2"
filesToLint=''
filesToLintRegexp='\.(js|jsx|ts|tsx)$'
IFS='
'

if [ "$2" = '--dry-run' ]; then
  dryRun=1
  rev="$3"
  shift 1
fi

help() {
  echo "Usage: $scriptName
Lint a selection of files.

Examples:
  $scriptName # Show this help message.
  $scriptName paths/p <paths> # Lint specified files and/or directories.
  $scriptName changed/c # Lint changed files.
  $scriptName staged/s # Lint staged files.
  $scriptName rev/r <revision> # Lint files that have been changed after the specified revision.
  $scriptName rev/r HEAD~1..HEAD # Lint files that were changed in the latest commit.
  $scriptName branch/b # Lint files that have been changed in this branch.
  $scriptName <mode> --dry-run # Show the selection of files.

Options:
  --dry-run      Do not lint. Instead show the selection of files that would normally be linted."
}

if [ -z "$mode" ]; then
  help
  exit 0
fi

if ! echo "$mode" | grep -E '^(paths|p|changed|c|staged|s|rev|r|branch|b)$' 1> /dev/null; then
  echo "Unknown option ‘$mode’." 1>&2
  help
  exit 2
fi

if echo "$mode" | grep -E '^(rev|r)$' 1> /dev/null && [ -z "$rev" ]; then
  echo 'No revision specified. Try HEAD~1..HEAD for example.' 1>&2
  exit 3
fi

case $mode in
  changed|c)
    filesToLint="$(getChangedFiles "$filesToLintRegexp")";;
  staged|s)
    filesToLint="$(getStagedFiles "$filesToLintRegexp")";;
  rev|r)
    filesToLint="$(getFilesAfterRev "$rev" "$filesToLintRegexp")";;
  branch|b)
    filesToLint="$(getFilesAfterRev "$(getFirstCommitInBranch)~1..HEAD" "$filesToLintRegexp")";;
esac

if [ "$mode" != 'paths' ] && [ "$mode" != 'p' ] && [ -z "$filesToLint" ]; then
  echo 'No files to lint.'
  exit 0
fi

# Drop $1/$mode from $@.
shift 1

# Drop $2/$rev from $@.
if echo "$mode" | grep -E '^(rev|r)$' 1> /dev/null; then
  shift 1
fi

if [ "$dryRun" = 1 ]; then
  echo "Dry-run option was used. No linting was performed. Selection of files
(might include eslint options in paths mode):"

  if [ "$mode" = 'paths' ] || [ "$mode" = 'p' ]; then
    echo "$@"
  else
    echo "$filesToLint"
  fi
  exit 0
fi

"$nodeModulesDir/.bin/eslint" \
  --ext js,jsx,ts,tsx \
  "$@" $filesToLint
