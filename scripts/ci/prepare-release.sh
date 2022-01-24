#!/usr/bin/env sh

set -o errexit

version="$1"
username="$2"
changelogFiles='CHANGELOG.md VERSIOHISTORIA.md'
releaseBranch="release-$version"

git config user.name "$username"
git config user.email "$username@ci.invalid"

# -B option recreates the local branch, if it happens to exist already,
# eg. after a failed release.
(set -o xtrace; git checkout -B "$releaseBranch")

previousTag="$(git describe --abbrev=0 --tags)"
changelogEntry="
## [$version](https://github.com/response200/eslint-config/compare/$previousTag...v$version) ($(date --utc '+%Y-%m-%d'))

$(git log --format='- %s' --no-merges --reverse "$previousTag..HEAD")"

(
  set -o xtrace
  npm version --ignore-scripts --no-git-tag-version "$version" 1> /dev/null
  git commit --message "Bumped version number in package.json to $version" \
    package.json package-lock.json 1> /dev/null
)

for changelogFile in $changelogFiles; do
  echo "$changelogEntry" | sed \
    '/<!-- New entries inserted automatically after this line -->/r /dev/stdin' \
    -i "$changelogFile"
done

(
  set -o xtrace
  git commit --message "Added changelog entries for version $version" \
    $changelogFiles 1> /dev/null
)

# --force option is required in order to overwrite the remote release branch
# which could exist already because of a previously failed release.
(set -o xtrace; git push --force --set-upstream origin "$releaseBranch")
