Task 5
======

## Description

Task 5 is similar to Task 4 in that the attacker will attempt to upset a network connection by flooding the victim with RST packets. The big difference in task 5 is attempting to disrupt a video stream. The assignment specifically states to try and disrupt a stream of a common video network but because of our setup, we must stream the video in the LAN. For this we installed VLC media player to read a stream and play video, and I chose to use Node.js to install a simple http server to stream the video to the client. The attacker then floods the victim with RST packets in hopes of disrupting the stream.

## Evidence

The attack was successful as seen in the `./task_5/screens` directory. The victim initially started playing the video stream, and then after a couple seconds I initiated `netwox 78` from the attacker VM. This immediately started disrupting the stream to the point that VLC stopped retrying and displayed an error on the screen.

## Code

Three main code files were used in this task: `httpserver.sh` used to stream the video files, `vlc.sh` used to download and start the VLC media player with a given stream, and `rst.sh` which was the actual attack. All code files can be seen in the `./task_5/code` directory.

## Notes

In this task I chose not to try scapy because of the difficulties I experienced in Task 4.
