# Router hardening record -- SCS4.1

Station: TR-1000-039
Admin page address: http://172.30.32.1
DHCP range: 172.30.32.100-172.30.32.200 (lab subnet 172.30.32.0/20)

1. [x] Changed default router admin password and verified login without recording credentials
2. [x] Disabled remote/WAN management and unneeded exposed services on the router
3. [x] Configured WPA2/WPA3 wireless security with a strong passphrase (not written here)
4. [x] A guest network for customers, so the till and the printer are not on the strangers' wifi
5. [x] DHCP range noted; the printer's address reserved on the router (or fixed outside range)
6. [x] Disabled WPS and legacy insecure wireless/management options
7. [x] Checked router configuration/settings and captured evidence screenshot without secrets
8. [x] Verified client connectivity and router status after hardening changes

## The printer

Printer's address (from its own panel or test page): 172.30.32.50
Reserved on router / fixed outside range: yes
Added on a lab laptop with a test page: yes
Added on a phone with a test page: yes
