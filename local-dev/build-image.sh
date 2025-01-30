#!/bin/sh

set -e

SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
CONTEXT_DIR=$(cd "$SCRIPT_DIR/.." && pwd)

cd "${CONTEXT_DIR}"

./local-dev/build.sh
cd "${CONTEXT_DIR}/console"
docker build -t littlehorse/lh-user-tasks-bridge-console:latest .
