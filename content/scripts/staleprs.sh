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
      echo "Usage: ./staleprs.sh --repo <owner>/<repo> [--days-old <days_old>] [--execute]"
      exit 1
  esac
done

# Check if necessary parameters are set
if [[ -z "$REPO" ]]; then
  echo "Error: Missing arguments"
  echo "Usage: ./staleprs.sh --repo <owner>/<repo> [--days-old <days_old>] [--execute]"
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
    # Get the labels of the PR
    labels=$(gh pr view "$PR_NUMBER" -R "$REPO" --json labels -q '.labels[]?.name' 2>/dev/null)

    # Check if the PR already has the "stale" label
    if [[ $labels =~ "stale" ]]; then
      continue
    fi

    if $DRY_RUN; then
      # Print the PR number (dry run)
      echo "Would have added the 'stale' label to PR #$PR_NUMBER."
    else
      # Add the 'stale' label to the PR
      gh pr edit "$PR_NUMBER" -R "$REPO" --add-label stale
      echo "Added the 'stale' label to PR #$PR_NUMBER."
    fi
  fi
done <<< "$PRs"
