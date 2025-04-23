#!/usr/bin/env sh

set -o errexit -o nounset
cd "$(dirname "$0")/.."

./node_modules/.bin/cucumber-js \
  --format @cucumber/pretty-formatter \
  --parallel 2 \
  --require tests/babel-register.js \
  --require 'tests/**/hooks/*.ts' \
  --require 'tests/**/steps/*.ts' \
  tests "$@"
