#!/usr/bin/env sh

set -o errexit

(set -o xtrace; npm audit --ignore-scripts)
