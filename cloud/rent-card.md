# Rent Card — SCS2b.4 Instance Types, Plainly

## The need
- **Kind of site:** A small local hospitality and room-service business brochure and booking-inquiry website (static HTML/CSS pages plus a lightweight room-inquiry form).
- **Visitors a day:** Assumed 60 visitors a day during business hours (low, steady daytime traffic with no heavy video streaming).
- **Budget in shillings:** Maximum 1,500 KES per month.

## Measured
Measured at 12:35 EAT on my running `t3.micro` Ubuntu instance (and via `size-scs2b.4` sections 1–3):
- `nproc`: 2 vCPUs
- `free -m`: 957 MiB total, 512 MiB used, 285 MiB free, 445 MiB available
- `uptime`: 12:35:10 up 2:15, 1 user, load average: 0.04, 0.02, 0.00
- `df -h`: `/` is 7.7G total, 2.3G used, 5.4G available (30% used)
- `uname -m`: x86_64

## What to rent for what
| Workload | What to rent | Why |
| :--- | :--- | :--- |
| **No-server (static site only)** | Amazon S3 static hosting | Lowest cost (under 130 KES/month) with zero OS patching when there is no backend code. |
| **T-micro (small dynamic app / learning)** | EC2 `t3.micro` (or `t4g.micro`) | 2 vCPUs and 1 GiB RAM handle a small web server and database at low daytime load. |
| **Lightsail (predictable bundle)** | Lightsail entry Linux plan | Fixed monthly price including static IP and 1 TB data transfer with no surprise bandwidth charges. |
| **Never for a small shop** | Large compute/memory instances (`m5.large`, `c5.xlarge`) | Costs roughly 8x to 16x more than a micro instance (over 8,000–16,000 KES/month); 95% of CPU and RAM would sit idle. |
| **Staging / short test** | On-demand `t3.micro` stopped when done | Billed per second while running and zero compute cost when stopped between test sessions. |

## My choice
Lightsail entry Linux plan (512 MB RAM, 2 vCPUs, 20 GB SSD, 1 TB transfer) — or EC2 `t3.micro` if hosted inside an existing VPC.

## Why not bigger, why not smaller
- **Why not bigger:** At 12:35 EAT (`free -m`), 445 MiB of 957 MiB RAM was available and `uptime` load average was 0.04 across 2 vCPUs, so upgrading to `t3.small` (2 GiB RAM) or `m5.large` (8 GiB RAM) would leave over 75% of memory unused.
- **Why not smaller:** A `t3.nano` (512 MiB RAM) leaves almost zero headroom once Ubuntu, SSH, and Nginx/database processes run (~512 MiB used at 12:35 EAT), risking out-of-memory crashes during peak traffic.

## Prices and exchange rate
- EC2 `t3.micro` On-Demand (eu-west-1 / sandbox region): $0.0116/hour (aws.amazon.com/ec2/pricing/on-demand, read 2026-11-21)
- EC2 `t3.small` On-Demand: $0.0232/hour (aws.amazon.com/ec2/pricing/on-demand, read 2026-11-21)
- Amazon Lightsail Linux bundle (512 MB RAM, 2 vCPUs, 20 GB SSD): $5.00/month (aws.amazon.com/lightsail/pricing, read 2026-11-21)
- Amazon S3 Standard storage (first 50 TB/month): $0.023/GB-month (aws.amazon.com/s3/pricing, read 2026-11-21)
- Rate: 1 USD = 129.50 KES, from Central Bank of Kenya (centralbank.go.ke), read 2026-11-21

## Lightsail or EC2 for this client
Lightsail for this client, because a fixed 648 KES/month bundle includes SSD storage, a static IP, and 1 TB of data transfer without metered bandwidth or EBS volume surprises.
