Task 3
======

## Description

SYN flooding is an attempt to fill up a victims half-open connection queue by sending the first packet in a typical 3 packet handshake, and then continue sending SYN packets without ever completing the handshake. As the queue fills up on a certain port, that port will become unreachable.

## Evidence

I ultimate could net get this attack to work using either Netwox or Scapy. When attempting to use Netwox, the victim would simply never reply with a SYN-ACK. After reading thread on Piazza I switch to Scapy and began sending packets in a loop, this successfully began receiving SYN-ACK's but I could never DOS the victim. I started a simple Node.js server listening on port 8081 and even though Scapy was sending packets to the same port and the victim was acknowledging the packets, the server was always reachable. I checked multiple times to make sure syncookies were disabled on the victim but that did not seem to help.

## Code

Netwox:
```
netwox 76 -i 192.168.56.102 -p 80
```

Scapy:
```
send(IP(dst="192.168.56.101")/TCP(flags="S", dport=8081), count=1000000)
```

## Notes

Screenshots of all the failed attempts can be seen in `./task_3/screens`.
