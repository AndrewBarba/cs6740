Task 6
======

## Description

This attack again takes advantage of the trust policy in TCP, where a client just assumes that if it gets a packet with a certain bit of info that it can act on that info. In this case we are triggering a "hard error" code to be sent to the victim in an attempt to break the current connection.

## Evidence

I ultimately could not get this attack to be successful. The best I was able to do was stall the initial `telnet` connection so it would never prompt the victim to login and the connection would essentially be unusable. However, if the victim was able to login and complete the connection, I could not interrupt it as the attacker. The victim could list files, run commands etc. and would only exit if they chose to do so.

## Code

The code for this attack was a single `netwox` command:

```
netwox 82 -i 192.168.56.101 -c 2 -d eth17
```

## Notes

The `netwox` command accepts an error code parameter and I tried many variations of the parameter but all failed to interrupt the connection.
