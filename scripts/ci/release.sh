#!/usr/bin/env sh

set -o errexit

rev="$1"
username="$2"
version="$(sed -rn 's/^.*"version"\s*:\s*"([^"]+)".*$/\1/p' package.json)"

git config user.name "$username"
git config user.email "$username@ci.invalid"

(
  set -o xtrace

  #
  # Merge README-en.md into README.md for a bilingual README in npmjs.com.
  #

  # Replace href attribute and text of README-en.md link in README.md.
  sed \
    -r 's|<a href="README-en.md"([^>]+)>[^<]+</a>|<a href="#README-en-GB"\1>Scroll down to English documentation</a>|' \
    -i README.md

  # Add an anchor ID for the main div element in README-en.md.
  # Append ‘ (English)’ to the main heading in README-en.md.
  # Append `-1` to each anchor link in README-en.md.
  # Finally append contents of README-en.md to README.md.
  sed \
    -e 's|<div lang="en-GB"|<div id="README-en-GB" lang="en-GB"|' \
    -e 's|\(# response200/eslint-config\)|\1 (English)|' \
    -e 's|\(\[[^]]\+\](#[^)]\+\)|\1-1|' \
    README-en.md >> README.md
)

touch .npmrc
chmod 0600 .npmrc
cat > .npmrc <<EOF
//registry.npmjs.org/:_authToken=$TOKEN_FOR_PUBLISHING_NPM_PACKAGES
EOF

(set -o xtrace; npm publish --access public --ignore-scripts)
shred --remove .npmrc

(
  set -o xtrace
  # --force option is required in order to overwrite the tag. The tag could
  # exist already because of a previously failed release.
  git tag --force "v$version"
  git push --force origin "v$version"

  git checkout master
  git merge --no-edit --no-ff "$rev"
  git push # Pushes merge
  git push origin --delete "$rev"
)
