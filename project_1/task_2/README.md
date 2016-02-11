Task 2
======

## Description

ICMP redirects are used by routers to tell systems to update their routing tables for a specific IP address. Because there is no authentication an attacker can use this to send a valid ICMP redirect packet to a host and modify the record of an IP address to and address of their choosing. This can be used as a denial of service attack to prevent a host from reaching a specific IP.

## Evidence

In `./screens` you can see the attacker using netwox to send an IMCP redirect packet in an attempt to take redirect from `192.168.56.101` to an invalid IP `192.168.56.133`. You can also see the packets being sent in the Wireshark screenshots.

## Code

This attack was executed using a single command which can be seen in `./code/icmp_redirect.sh`.

## Notes

Ultimately I could not redirect traffic away `192.168.56.101` because all of the IP's are under the same LAN and the hosts were not going to the router to look up routing information. If they were, we would see in the `route` command that the address would be poisoned with the invalid IP address.
