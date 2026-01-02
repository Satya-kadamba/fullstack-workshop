#!/bin/bash
set -e

# Usage check
if [ $# -ne 1 ]; then
  echo "Usage: $0 <log_file_path>"
  exit 1
fi

LOG_FILE="$1"

# File existence check
if [ ! -f "$LOG_FILE" ]; then
  echo "Error: Log file not found -> $LOG_FILE"
  exit 1
fi

echo "=========== Log Analysis Report ============="
echo "File: $LOG_FILE"

TOTAL_LINES=$(wc -l < "$LOG_FILE")
echo "Total lines : $TOTAL_LINES"

echo "-----------------------------------"
echo "INFO    : $(grep -c 'INFO' "$LOG_FILE")"
echo "WARNING : $(grep -c 'WARNING' "$LOG_FILE")"
echo "ERROR   : $(grep -c 'ERROR' "$LOG_FILE")"

echo "-----------------------------------"
echo "Unique IP Addresses Found:"
grep -oE '[0-9]{1,3}(\.[0-9]{1,3}){3}' "$LOG_FILE" | sort -u

echo "==================================="
