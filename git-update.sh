#!/bin/bash
cd /Users/egorchetverikov/Desktop/DI-Bootcamp
git add .
current_date_time="$(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "Update - $current_date_time"
git push