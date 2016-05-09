#!/bin/bash
set -e

cp -r dist /tmp/
git checkout deploy
rm -rf dist/
git pull
cp -r /tmp/dist .
git add -A
git commit -a -m "deploy"
git push
git checkout 05-16
git pull

exit 0
