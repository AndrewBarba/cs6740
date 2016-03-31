Task 4
======

## Description

A TCP packet has a reset flag, RST, which can be set to indicate that a TCP connection should be terminated immediately. This can be useful in a lot of situations, such as a server being under load and indicating that a client should stop connecting. But it cal also be used by an attacker to prevent legitimate connections.

## Evidence

Evidence for this attack can be seen in three screenshots in `./task_4/screens`. There is a screenshot of the attacker issuing the `netwox` command, the victim unable to connect to the other host on the network, and a screen showing the RST packets in Wireshark.

## Code

A single `netwox` command was issued from the attacker to the victim, flooding the victim with TCP RST packets. This command can be seen in `./task_4/code`.

## Notes

I originally wanted to complete this task using scapy but for whatever reason, could not get the attack to be successful. I tried many different variations of the arguments: `sport`, `dport`, `ack`, and `seq`. The command that I felt should have worked, and did not, was:

```
send(IP(dst="192.168.56.101",src="192.168.56.102",ttl=128)/TCP(flags="RA",sport=23,dport=52250,ack=1730944919,seq=0), loop=1)
```

This command should have sent an RST ACK packet to the victim's telnet port with the appropriate ack number. I looke dup the appropriate values using Wireshark and replicated exactly what netwox was sending in the successful attack. I a not certain why this command failed.
