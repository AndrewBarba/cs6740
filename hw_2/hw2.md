CS6740 Homework #2
==================

Andrew Barba [abarba@ccs.neu.edu](abarba@ccs.neu.edu)

#### Problem 1

This protocol represents a challenge-response protocol where the goal is for each party involved to convince the other that they are who they say they are, and in this case really know the shared secret key. Once each party is verified the connection will be established, if either end fails to prove their identity then the connection is aborted.

This protocol is **not** vulnerable to a reflection attack because it forces the initiating party, A in this case, to respond to, and present a challenge before the target, B, responds. If this were not the case, the attacker could open a second connection and immediately send the initial challenge received in the first connection. B would respond, and then A would have an authenticated connection and simply abandon the original connection.

#### Problem 2

#### Problem 3

#### Problem 4

#### Problem 5
