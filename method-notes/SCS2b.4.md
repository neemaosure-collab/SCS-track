# Method note -- SCS2b.4

## 1. What I set out to do
I set out to measure real CPU, memory, disk, and load metrics on a running micro instance and build a priced, evidence-backed rent card for a small business client.

## 2. What I did, in order
I checked live metrics on my instance (`nproc`, `free -m`, `uptime`, `df -h`, `uname -m`), compared S3, Lightsail, and EC2 options, verified all prices on AWS pricing pages with dates, and wrote the rent card and AI receipt.

## 3. What went wrong, and how I fixed it
The AWS CLI was initially missing in Ubuntu so `size-scs2b.4` could not query AWS directly; I installed the AWS CLI and verified the instance metrics directly.

## 4. How long it took, against the plan
The measurement, pricing lookup, and rent card write-up took about 2 hours, matching the planned morning lab window.

## 5. One lesson for the next person
Never guess instance sizes "to be safe" and never quote a price from AI—always pair a measured `free -m` or `uptime` number with a dated provider pricing URL.

## 6. What I might be wrong about, and how I would find out
I might be wrong in assuming 60 daily visitors will stay evenly spread rather than spiking all at once during a promotion, which could push 512 MB RAM into swap. I will find out by checking CloudWatch CPU and memory/swap metrics after the first week of live traffic.
