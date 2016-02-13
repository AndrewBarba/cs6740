#!/bin/bash

# download a simple node.js http server
npm install -g spadin/simple-express-static-server

# start the server with the given host
# root server in downloads folder where we downloaded sample movies
HOSTNAME=192.168.56.103 simple-server ~/Downloads/
