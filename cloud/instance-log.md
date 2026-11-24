# SCS2b.3 Instance Log

## Step 0 — Launch Sheet (Spec Before Launch)

| Field | Value |
| --- | --- |
| **My sign-in (SCS2b.1)** | Builder ID: `neema.atieno@learninglions.org` · Skill Builder plan open: Yes |
| **Server name** | Web Server |
| **Image (the system it starts from)** | Amazon Linux 2023 AMI |
| **Instance type (the size)** | `t3.micro` (2 vCPUs, 1 GiB memory) |
| **Key pair** | Proceed without a key pair (Not recommended) |
| **Network** | `Lab VPC` · `Public Subnet 1` |
| **The wall in front (security group) and its rules at launch** | Existing: `Web Server security group` — no inbound rules at launch |
| **Disk size** | 8 GiB (default root volume) |
| **Termination protection** | Enable |
| **The script at first boot (user data): what it installs** | `dnf -y install httpd`, enables & starts `httpd`, writes `Hello From Your Web Server!` to `/var/www/html/index.html` |
| **Public address at launch** | *(fill in after Task 1 launch)* |
| **Public address after the stop and start** | *(fill in after Task 4)* — same / different because *(reason)* |
