# AI Receipt — SCS2b.4 Instance Sizing

- **The spec:** Small retail/service business site with ~60 assumed daily visitors and a strict budget cap of 1,500 KES/month (~11.50 USD).
- **The ask:** Asked AI to compare three AWS hosting options (static S3, Lightsail $5 bundle, and EC2 `t3.micro`) with vCPU, RAM, storage, and transfer limits—without trusting AI for prices.
- **The three options:**
  1. Amazon S3 static hosting (no server, pay-per-GB storage and requests).
  2. Amazon Lightsail $5/month Linux plan (2 vCPUs, 512 MB RAM, 20 GB SSD, 1 TB transfer).
  3. Amazon EC2 `t3.micro` On-Demand (2 vCPUs, 1 GiB RAM, separate EBS storage and data-out charges).
- **Each number checked with the page:** Verified `t3.micro` ($0.0116/hr) on `aws.amazon.com/ec2/pricing/on-demand` (read 2026-11-21), Lightsail ($5.00/mo) on `aws.amazon.com/lightsail/pricing` (read 2026-11-21), S3 ($0.023/GB) on `aws.amazon.com/s3/pricing` (read 2026-11-21), and exchange rate (1 USD = 129.50 KES) on `centralbank.go.ke` (read 2026-11-21).
- **My decision:** Chose the Lightsail $5.00/month (648 KES) plan for predictable fixed billing within the 1,500 KES budget while still supporting a dynamic backend if needed.
