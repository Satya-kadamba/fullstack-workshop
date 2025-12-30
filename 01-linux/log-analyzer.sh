#!/bin/bash
set -e

LOG_FILE="${1:-/c/Users/kadam/devtraining/sample-log.txt}"

echo "=========== Log Analysis Report ============="

if [ -e "$LOG_FILE" ]; then
  count=0

  while read -r line; do
    ((count++))
  done < "$LOG_FILE"

  echo "File: $LOG_FILE"
  echo "Total lines : $count"
  echo "-----------------------------------"

  echo "INFO    : $(grep -c 'INFO' "$LOG_FILE")"
  echo "WARNING : $(grep -c 'WARNING' "$LOG_FILE")"
  echo "ERROR   : $(grep -c 'ERROR' "$LOG_FILE")"

  echo "-----------------------------------"
  echo "Unique IP Addresses Found:"
  IP_LIST=$(grep -oE '[0-9]{1,3}(\.[0-9]{1,3}){3}' "$LOG_FILE" | sort | uniq)
  echo "$IP_LIST"

else
  echo "Error: Log file not found"
fi
