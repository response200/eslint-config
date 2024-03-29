#!/usr/bin/env sh

set -o errexit -o nounset

projectDir="$(cd "$(dirname "$0")" && git rev-parse --show-toplevel)"
cd "$projectDir"

./node_modules/.bin/tsc \
  --project tsconfig.json \
  --noEmit
