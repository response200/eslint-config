getChangedFiles() {
  local files="$(getStagedFiles "$1")
$(git diff --diff-filter=ACMR --name-only \
    | grep -E "$1")"
  echo "$files"
}

getFilesAfterRev() {
  git diff --diff-filter=ACMR --name-only --pretty='' "$1" \
    | grep -E "$2" || return 0
}

getStagedFiles() {
  git diff --staged --diff-filter=ACMR --name-only \
    | grep -E "$1" || return 0
}
