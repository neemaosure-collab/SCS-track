# SCS2b.3 Instance Log

| Step | Typed | Expected | Seen |
| :--- | :--- | :--- | :--- |
| 1 | `ssh-keygen -t ed25519 -f ~/.ssh/nestine-key` | Ed25519 key pair generated in `~/.ssh` with mode 600 | Key generated (`SHA256:5IAVRXZc32YNPwlcS9QPItygOQcSKPDvzBh2UVI1jl4`), permissions `-rw-------` |
| 2 | `test-scs2b.3` | Automated validation of SCS2b.3 script suite | 74 passed (2 stubbed port-80 items skipped under WSL2) |
| 3 | `sudo apt install -y openssh-server ufw nginx` | SSH server, UFW firewall, and Nginx installed | Installed and upgraded cleanly on Ubuntu |
| 4 | `ssh -i ~/.ssh/nestine-key nestine@127.0.0.1 "hostname && uptime"` | Key-based SSH login without password | Connected cleanly (`TR-1000-039`, `22:16:43 up 6:58`) |
| 5 | `curl -I http://127.0.0.1` | Nginx serves HTTP 200 OK on port 80 | `HTTP/1.1 200 OK` (`Server: nginx/1.28.3 (Ubuntu)`) |
| 6 | `sudo service nginx stop && sudo service ssh stop` | Services stopped cleanly at end of session | Stopped cleanly |
| 7 | `nc -zv -w 3 127.0.0.1 8000` | Connection refused / timed out (port 8000 not open in firewall) | `nc: connect to 127.0.0.1 port 8000 (tcp) failed: Connection refused` — proves listening is not reachable unless the wall allows it |
| 8 | SSH first-connect host fingerprint prompt | Prompt asks to verify ED25519 key fingerprint before saving to `known_hosts` | Verified fingerprint and answered `yes` — asked to prevent man-in-the-middle (MITM) spoofing |
| 9 | Stop and Start EC2 instance (AWS Skill Builder Lab) | Stopping releases ephemeral public IPv4; starting assigns a new public IPv4 | Recorded old public IP before Stop and new public IP after Start; confirmed instance left `Stopped` at end of lab |
