CS6740 Homework #3
==================

Andrew Barba [abarba@ccs.neu.edu](abarba@ccs.neu.edu)

#### Problem 1

#### Problem 2

###### What is SOP?

SOP (Same origin policy) is a client side protocol implemented in web browsers that restricts how documents/scripts from one origin (combination of domain name, protocol and port) can interact with another (or same) origin.

###### Describe two limitations of SOP

1. SOP is strictly a client side implementation of web browsers and therefore there is no guarantee that the web browser even respects the protocol or certain parts of the protocol. Additionally, there is a large increase in web traffic coming from native mobile applications that do not adhere to such a protocol. In general, always assume that a request can be made and make sure you are protected if and when it is made.

2. SOP makes no assumptions about the business logic of your site, and even though user abc and user xyz may have resources under the same origin, it does not mean that you should necessarily allow both users to have access to each others content. SOP is there to prevent basic scripting attacks but that does not mean you should relax the security architecture of your application based on the policy.

###### Discuss the connection between SOP and CORS

CORS (Cross-Origin Resource Sharing) is a protocol that was designed to relax the restrictions of SOP. Today, sites use a variety of origins to host content and many sites act as a source of content for many other sites (graph.facebook.com for example). SOP would restrict a lot of this interaction across origins so sites needed a way to tell the browser that requests from certain origins are allowed and the browser should send them. When an origin makes a request to an origin the would normally be stopped by SOP, the browser sends a request to that origin and looks for a header (Access-Control-Allow-Origin) in the response indicating that the requesting origin can submit the request to the requested origin.

#### Problem 3

```
<?php
  $query = "UPDATE usertable SET pwd=’$pwd’ WHERE uid=’$uid’;";
?>
```

###### Does it have a security vulnerability?

For the sake of argument let's assume the variables `$pwd` and `$uid` came directly from the `POST` body of a request sent by a user in a login form. This code has a huge security flaw in that those variables have not been sanitized in anyway before using them to create a SQL query. Because the query is simply a string, we can craft a string of our own that adds additional commands into the query. For example, let's say I wanted to delete all the users from the database of this site to create a denial of service for it's users, I would send this as the value of my password:

```
bogus’; DROP TABLE usertable; #
```

This crafty password closes the `SET` command and inserts it's own `DROP` command which will remove the entire users table. But it also does something very important which is turns the rest of the command into a comment and therefore ensures this is still a valid SQL command. This is done by using the trailing `#` so SQL knows to ignore everything after that point.

###### Propose how to fix it

The reason the attack works is because there are reserved characters that make up a SQL query. Specifically strings are wrapped with `’` and commands are separated by `;`. What we need to do is escape/sanitize those characters in a way that they become a valid string for a password/user id and do not interfere with the actual SQL syntax. At a high level, all input received from an outside source should be verified and sanitized as early in the program flow as possible. In this specific case, we might use PHP's built in `mysql_real_escape_string($string)` function to sanitize those inputs:

```
<?php
  $sanitized_uid = mysql_real_escape_string($uid)
  $sanitized_pwd = mysql_real_escape_string($pwd)
  $query = "UPDATE usertable SET pwd=’$sanitized_pwd’ WHERE uid=’$sanitized_uid’;";
?>
```

#### Problem 4

#### Problem 5
