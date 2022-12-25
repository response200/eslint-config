#!/usr/bin/env sh

set -o errexit -o nounset

(set -o xtrace; npm audit --ignore-scripts)
