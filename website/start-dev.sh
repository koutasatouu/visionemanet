#!/bin/bash
# Visionema.net Astro website · dev server bootstrap.
# The kubernetes preview URL routes requests to port 3000. This script
# ensures the Astro dev server is running there (and stops the default
# Expo dev server, which is not used by this project).
set -e
cd "$(dirname "$0")"

# Ensure the Expo dev server is stopped (it also targets port 3000).
if command -v supervisorctl >/dev/null 2>&1; then
  supervisorctl stop expo >/dev/null 2>&1 || true
fi

# If Astro is already running on 3000, do nothing.
if curl -sS -o /dev/null http://127.0.0.1:3000/; then
  echo "Astro already running on :3000"
  exit 0
fi

echo "Starting Astro dev on :3000 ..."
nohup npx astro dev --host 0.0.0.0 --port 3000 > /tmp/astro.log 2>&1 &
echo "Astro PID $!"
