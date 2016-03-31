#!/bin/bash

# update sources
apt-get update

# install vlc media player
apt-get install vlc

# start vlc and open stream
vlc http://192.168.56.103:4567/SampleVideo_640x360_10mp.mp4
