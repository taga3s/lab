#!/bin/sh

printf "Running scripts with %d arguments: %s\n" "$#" "$@"

deno run --allow-env ./gha/docker-container-action-deno/main.ts "$@"
