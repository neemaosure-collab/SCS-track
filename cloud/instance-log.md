# SCS2b.3 Instance Log

## Step 0 — Launch Sheet (Spec Before Launch)

| Field | Value |
| --- | --- |
| **My sign-in (SCS2b.1)** | Builder ID: `neema.atieno@learninglions.org` · Skill Builder plan open: Yes |
| **Server name** | Web Server |
| **Image (the system it starts from)** | Amazon Linux 2023 AMI (confirm exact name on lab screen) |
| **Instance type (the size)** | t2.micro (confirm exact type on lab screen) |
| **Key pair** | Proceed without a key pair |
| **The wall in front (security group) and its rules at launch** | New security group — SSH (port 22) allowed; HTTP (port 80) not open at launch |
| **Disk size** | 8 GiB gp3 (confirm exact size on lab screen) |
| **Termination protection** | Enabled |
| **The script at first boot (user data): what it installs** | Updates packages and installs/starts Apache (`httpd`) web server with a sample page |
| **Public address at launch** | *(fill in after launch)* |
| **Public address after the stop and start** | *(fill in after Task 4)* — same / different because *(reason)* |
