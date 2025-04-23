#!/usr/bin/env sh

set -o errexit -o nounset
cd "$(dirname "$0")/.."

./node_modules/.bin/tsc \
  --project tsconfig.json \
  --noEmit
