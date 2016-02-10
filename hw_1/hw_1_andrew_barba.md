CS6740 Homework #1
==================
Andrew Barba [abarba@ccs.neu.edu](abarba@ccs.neu.edu)

#### Problem 1

Carl must intercept the public key concatenated with the id that Alice intended to send to Bob. Instead of forwarding the message to Bob, Carl will forward his own, different public key concatenated with the id, and thus, Bob will use the injected key to encrypt message K. When Bob sends the message back, Carl will intercept it and decrypt the message to retrieve K. Now Carl knows K, but to make sure Alice thinks the message is still unknown, Carl with encrypt K with the original public key that Alice sent initially and the message to Alice. This is a classic man-in-the-middle attack.

To prevent this sort of attack, Alice needs to sign the public key she is sending to Bob, so when Bob receives the key, he can verify that it was the same key Alice intended to send.

#### Problem 2

```
P = (7 / 7) * (6 / 7) * (5 / 7)
P = (30 / 49)
P = 0.612
```

#### Problem 3

HMAC was specifically designed to prevent length extension attacks, meaning an attacker can pad the original message with data and obtain a valid hash without actually knowing the secret key. Instead of hashing the concatenation of the message and secret, HMAC provides an extra step by hashing the result and the key again. This process means the HMAC is not affected by the insecurities (collision resistance) of the underlying hash function, and therefore it we would have more luck brute forcing the short 128 bit secret key used for the encryption than we would brute forcing the hash function itself.

#### Problem 4

Existential forgery describes an attack where an attacker is able to produce a message and signature pair that matches some known pair, however, the signature the attacker used was not the original signature. Because Bob chose a hash function that is not weak collision resistant, and the original hash is known to the attacker, the attacker can brute force a hash that matches the original hash sent by Bob. Ideally Bob would sign the message directly however this is limited by the length of the private key. Therefore RSA relies on "compressing" the message using a good hash function, and relies on the fact that another message, not equal to the original, will not equate to the same hash. Of course, Bob's function is not suitable in this case, and an attacker can find other messages that equate to the same hash due to it not being weak collision resistant.

#### Problem 5

Assuming `d` is small enough that we can brute force `n + d^2` to equal some `x^2`, then we know that `n = x^2 - d^2` which can easily be factored into `n = (x + d)(x - d)`, giving us the two prime factors of n.
