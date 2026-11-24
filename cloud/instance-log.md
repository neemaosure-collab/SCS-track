# Amazon EC2 Lab Log (SPL-200)

## Task 1: Launch EC2 Instance
- **Instance Name:** web server
- **Instance ID:** i-02aff0467c2573a41
- **AMI:** Amazon Linux 2023 AMI
- **Instance Type:** t3.micro
- **VPC / Subnet:** Lab VPC / Public Subnet 1
- **Security Group:** Web Server security group (`sg-0bf68399e93497946`)
- **Termination Protection:** Enabled
- **Status:** Running (`3/3 checks passed`)

## Task 2: Monitor Instance
- Verified System status, Instance status, and EBS status checks (`3/3 checks passed`).

## Task 3: Security Group & Web Server Verification
- **Public IPv4 Address:** `54.188.172.203`
- **Before Rule Update:** Port 80 blocked (`ERR_CONNECTION_TIMED_OUT`).
- **Rule Added:** Inbound `HTTP` (`TCP` port `80`) from `0.0.0.0/0` (`::/0`) on `sg-0bf68399e93497946`.
- **Verification Output:**
  - `Connection to 54.188.172.203 80 port [tcp/http] succeeded!`
  - `HTTP/1.1 200 OK` -> `<html><h1>Hello From Your Web Server!</h1></html>`

## Task 4 & 5: Resizing & Termination Protection Concepts
- **Resizing Workflow:** Stop instance -> Change instance type (`t3.micro` to `t3.small`) -> Modify EBS volume (`8 GiB` to `10 GiB`) -> Start instance (assigns a new Public IPv4 address).
- **Termination Protection:** Blocks accidental deletion (`disableApiTermination`) until disabled under **Actions -> Instance settings -> Change termination protection**.
