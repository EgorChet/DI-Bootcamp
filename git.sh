#!/bin/bash

# Define the commit message with the current date and time
COMMIT_MESSAGE="Auto-update $(date +'%Y-%m-%d %H:%M:%S')"

# Add all changes to the staging area
git add .

# Commit the changes with the defined message
git commit -m "$COMMIT_MESSAGE"

# Push the changes to the main branch
git push origin main
