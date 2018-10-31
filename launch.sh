#!/bin/bash

URL="~/techdivision/html/index.html"

sleep 5
firefox -new-window $URL &
sleep 2
xdotool search --sync --onlyvisible --class "Firefox" windowactivate key F11 &> ~/temp.log
