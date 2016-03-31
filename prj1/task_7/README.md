Task 7
======

## Description

In Task 7 our goal was to observe TCP (Telnet) traffic between a victim and an observer; calling them M1 and M2 respectively. An attacker, M3, looks to hijack their session traffic and run arbitrary commands on M1's, the victim, machine.

To do so, the attacker first poisons the ARP cache of both M1 and M2, telling M1 that M2 lives at the attackers MAC address, and telling M2 that M1 lives at the attacker's MAC address. By poisoning both caches, M1 and M2 will be able to communicate back and forth, but now M3 has become a man-in-the-middle and can observe all traffic between the two machines. As traffic is sent from M1 to M2, we attempt to forge legitimate packets with our payload in an attempt to get M2 to run the command and report back to M1 it's results.

## Evidence

Evidence for a successful ARP poison can be seen in `./task_7/screens`. In `attacker_sniff_password.png` you can see that the attacker successfully sniffed what M1 typed and sent to M2. Other screens show attempts by M3 to forward the command `echo "Hello, World"` however no attempt was successful in getting one of the machines to actually run the command. My guess is I was no properly replicating the sequence and acknowledgment numbers when forwarding the packets. I tried simple things like increasing sequence numbers by 1 but ultimately could not figure out why the attacks were not successfully being run.

## Code

There are two parts to the code for this attack. `./task_7/code` has two files: `hijack.py` which continuously forwards ARP requests to the victim and observer in to remain a man in the middle. `poison.py` attempts to do the actual packet sniffing and forging.
