1. Goal: Launch and configure a first Ubuntu 24.04 server instance with SSH and HTTP access.
2. Key management: Generated an ed25519 key pair in ~/.ssh with mode 600 and kept private keys out of git.
3. Firewall: Restricted SSH (port 22) to the campus network while opening HTTP (80) and HTTPS (443).
4. Verification: Tested connectivity over SSH and verified nginx served the web page on port 80.
5. Cost control: Stopped the instance at the end of the session instead of leaving compute running.
6. What I might be wrong about: Assuming firewall rules apply automatically without verifying with nc/curl from outside.
