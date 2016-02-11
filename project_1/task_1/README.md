Task 1
======

## Description

This attack attempts to inject an entry in the ARP cache of a victim. This is useful for an attacker because once an entry is in the cache the MAC address for a specific IP does not need to be looked up again. An attacker may choose to alter the associated MAC address for a database server, preventing the victim from connecting that database and potentially bringing it offline.

## Evidence

All evidence for this attack can be in the `./screens` folder.

## Code

This attack was executed using a single command which can be seen in `./code/poison.sh`.

## Notes

When I first tried executing the `netwox` command I was getting an error saying the victim IP was `unreached`. Thanks to [Aboobacker Rizwan](https://piazza.com/class/ija4wa3pya337l?cid=66), I realized it was necessary to specify the device in the command because `netwox` was using the NAT interface by default. 
