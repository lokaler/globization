#!/bin/bash

cd ../
NODE_ENV=production npm run buildDeploy
cp -r dist /tmp/
git checkout testing
cp -r /tmp/dist .
git add -A
git commit -a -m "deploy"
git push
git checkout 04-16
git pull

exit 0
