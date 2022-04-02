#!/bin/bash

SERVER="uvphotons.com"
SERVERNAME = "uvphotons web"
APP = "uvphotons-web"

echo Deploying $SERVERNAME
echo INITIATING NG BUILD production
ng build --prod
echo INITIATING SCULLY STATIC
npx scully -- --scanRoutes
echo GZTAR operation...
tar -zcvf dist.tar.gz dist/static
echo Distribution folder updated. ;
echo Initiating $SERVER deploy ;
scp dist.tar.gz deploy@$SERVER:/home/deploy/app/$APP
ssh deploy@$SERVER 'cd /home/deploy/app && tar xvzf dist.tar.gz'