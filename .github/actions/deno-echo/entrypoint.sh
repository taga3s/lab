#!/bin/sh

printf "Running scripts with %d arguments: %s\n" "$#" "$@"

deno run --allow-env ./gha/deno-echo/main.ts "$@"
