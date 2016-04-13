#!/bin/bash

cp -r dist /tmp/
git checkout testing
git pull
cp -r /tmp/dist .
git add -A
git commit -a -m "deploy"
git push
git checkout 04-16
git pull

exit 0
