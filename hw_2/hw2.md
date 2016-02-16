CS6740 Homework #2
==================

Andrew Barba [abarba@ccs.neu.edu](abarba@ccs.neu.edu)

#### Problem 1

This protocol represents a challenge-response protocol where the goal is for each party involved to convince the other that they are who they say they are, and in this case really know the shared secret key. Once each party is verified the connection will be established, if either end fails to prove their identity then the connection is aborted.

This protocol is **not** vulnerable to a reflection attack because it forces the initiating party, A in this case, to respond to, and present a challenge before the target, B, responds. If this were not the case, the attacker could open a second connection and immediately send the initial challenge received in the first connection. B would respond, and then A would have an authenticated connection and simply abandon the original connection.

#### Problem 2

The goal of this protocol is to establish a secure connection over a public channel, where neither the initiator nor the target need to know/share a common, private key.

This protocol is vulnerable to a reflection attack. When A tries to authenticate with B, an attacker E sends a response to A that makes A think it is B. A will finish the protocol and now E has an authenticated connection with A.

#### Problem 3

###### 1.

SYN flooding is an attack where an attacker floods a target with SYN packets (the first packet in the TCP 3 step handshake) in an effort to consume resources on the target by opening a lot of half-open connections. As the targets connection queue fills up, it will stop responding to legitimate traffic.

###### 2.

Cryptography can help prevent SYN flood attacks, specifically in the **syncookie** implementation. A syncookie is a small has of the client's IP, port, and other unique info which is added to the initial SYN-ACK sent from the target. Only when the client responds with an appropriate ACK will the server allocate resources for the connection.

###### 3.

Building on the answer above, a syncookie allows the target to discard any information related to the initial SYN packet (and not allocate resources for it) because it can reconstruct that information based on the initial SYN-ACK packet when the client appropriately responds with a final ACK packet.

#### Problem 4

#### Problem 5
