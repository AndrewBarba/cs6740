#!/bin/bash

# Enables / disables syncookies
sysctl -w net.ipv4.tcp_syncookies=$1
