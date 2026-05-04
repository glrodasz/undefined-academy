#!/bin/bash

# Parse command line arguments
DRY_RUN=true
DAYS_OLD=30
while (( "$#" )); do
  case "$1" in
    --repo)
      REPO="$2"
      shift 2
      ;;
    --max-files)
      if [[ $2 =~ ^[0-9]+$ ]] ; then
        MAX_FILES="$2"
      else
        echo "Error: max-files should be an integer."
        exit 1
      fi
      shift 2
      ;;
    --execute)
      DRY_RUN=false
      shift 1
      ;;
    --days-old)
      if [[ $2 =~ ^[0-9]+$ ]] ; then
        DAYS_OLD="$2"
      else
        echo "Error: days-old should be an integer."
        exit 1
      fi
      shift 2
      ;;
    *)
      echo "Error: Invalid argument"
      echo "Usage: ./closeprs.sh --repo <owner>/<repo> --max-files <max_files> [--days-old <days_old>] [--execute]"
      exit 1
  esac
done

# Check if necessary parameters are set
if [[ -z "$REPO" || -z "$MAX_FILES" ]]; then
  echo "Error: Missing arguments"
  echo "Usage: ./closeprs.sh --repo <owner>/<repo> --max-files <max_files> [--days-old <days_old>] [--execute]"
  exit 1
fi

# Get the current date timestamp
current_date=$(date +%s)

# List all open PRs in your repository
PRs=$(gh pr list -R "$REPO" -s open --json number,createdAt -L 200 -q '.[] | "\(.number) \(.createdAt)"')

# Loop through all open PRs
while read -r line; do
  # Get PR number and creation date
  PR_NUMBER=$(echo $line | cut -d' ' -f1)
  PR_CREATED_AT=$(echo $line | cut -d' ' -f2)

  # Convert the creation date to a format that macOS's date command can understand
  # This removes the 'Z' at the end and replaces the 'T' with a space
  PR_CREATED_AT=$(echo $PR_CREATED_AT | sed -e 's/Z$//' -e 's/T/ /')

  # Get the PR creation date timestamp
  pr_date=$(date -j -f "%Y-%m-%d %H:%M:%S" "$PR_CREATED_AT" +%s)

  # Calculate the age of the PR in days
  pr_age=$(( (current_date - pr_date) / 86400 ))

  # If the PR is older than the specified number of days
  if [ "$pr_age" -gt "$DAYS_OLD" ]; then
    # Get the count of changed files in the PR
    FILES_CHANGED_COUNT=$(gh pr diff "$PR_NUMBER" -R "$REPO" | grep 'diff --git' | wc -l || echo "0")

    # If the number of modified files is less than or equal to the maximum allowed
    if [ "${FILES_CHANGED_COUNT:-0}" -le "$MAX_FILES" ]; then
      if $DRY_RUN; then
        # Print the PR number (dry run)
        echo "Would have closed PR #$PR_NUMBER as it modifies $FILES_CHANGED_COUNT file(s)."
      else
        # Close the PR
        gh pr close "$PR_NUMBER" -R "$REPO"
        echo "Closed PR #$PR_NUMBER as it modifies $FILES_CHANGED_COUNT file(s)."
      fi
    fi
  fi
done <<< "$PRs"
