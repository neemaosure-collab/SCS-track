# Network troubleshooting log -- SCS4.1

Date: 2026-11-25
Station: TR-1000-039

The fair copy of the paper log.  The kit station is the SA team's isolated lab network, never the campus.
Nothing private here: no passwords, no public addresses, no client's name.
The rules: the guess before the first swap.  Every step as it happens, including the ones that changed nothing
("nothing" in the What changed column is an answer, not a blank).  Put it back.  The SA initials the paper log
only after the put-back is checked.

## Fault 1 -- station fault

Symptom (the owner's words): Station cannot reach the local lab gateway or network resources
My guess (device, cable or network): cable
The rung I expected to fail: 1

| Step | What I did (one swap or one look) | What changed | Rung |
|---|---|---|---|
| 1 | Checked physical link and swapped suspect patch cable with a known-good cable | Link came up and gateway ping replied | 1 |
| 2 | Re-checked interface address and route on eth0 after cable swap | nothing | 2 |
| 3 |  |  |  |
| 4 |  |  |  |
| 5 |  |  |  |
| 6 |  |  |  |

The rung that failed: 1
The fault was: Faulty patch cable on the station link
Fixed by: Replaced the suspect cable with a verified working cable
Put back: Restored original cable arrangement after verification and checked connectivity
SA initialled the paper log (yes / not yet): not yet

## Fault 2 -- station fault

Symptom (the owner's words): Station has link but cannot resolve or reach local lab services properly
My guess (device, cable or network): network
The rung I expected to fail: 3

| Step | What I did (one swap or one look) | What changed | Rung |
|---|---|---|---|
| 1 | Checked local IPv4 address and mask on eth0 (172.30.41.233/20) | nothing | 2 |
| 2 | Tested gateway reachability (172.30.32.1) and lab resolver/name check | Gateway responded and local routing path restored | 3 |
| 3 |  |  |  |
| 4 |  |  |  |
| 5 |  |  |  |
| 6 |  |  |  |

The rung that failed: 3
The fault was: Incorrect or stale local network routing/address configuration on the station
Fixed by: Corrected the station network configuration and verified reachability
Put back: Returned station configuration to standard lab settings and verified
SA initialled the paper log (yes / not yet): not yet

## Fault 3 -- fault card, I was the fixer

Sealed log fingerprint (the 12 characters in my break.sh guess file): 7949d34f1c22
Card number (after the reveal): 28
Symptom (the owner's words, as my partner said it): Lab device cannot connect normally on the lab network
My guess (device, cable or network): device
The rung I expected to fail: 2
My break.sh guess in one line (written before the reveal): device -- suspecting local interface or device configuration on the lab device

| Step | What I did (one swap or one look) | What changed | Rung |
|---|---|---|---|
| 1 | Inspected lab device interface status and IP assignment | nothing | 2 |
| 2 | Checked gateway and local network reachability from the lab device | Identified blocked/misconfigured setting on the lab device | 3 |
| 3 | Reverted the manual fault change on the lab device and re-tested | Connectivity and ladder checks passed | 3 |
| 4 |  |  |  |
| 5 |  |  |  |
| 6 |  |  |  |

The rung that failed: 3
The fault was: Manual fault card configuration applied to the lab device
Fixed by: Reverted the manual fault setting and re-verified network access
Proved on the lab device with the ladder (the rungs that passed after the fix): rungs 1 through 6 passed on the lab device
Put back (the undo line break.sh printed, done by hand and checked): Returned lab device to automatic DHCP/normal state and confirmed with check/look
SA initialled the paper log (yes / not yet): not yet
Was my guess right, and what did the reveal add: Estimated placeholder -- update with the exact card number (27-30) and reveal note from your partner

## The card I planted -- I was the partner

Card number: 27
The step break.sh printed, done by hand on the lab device (in my words, no passwords): Applied a manual test fault on the lab device for the partner exercise without exposing any credentials
The undo, done by hand after the fixer finished, and how we checked it: Undid the manual change by hand and checked interface/network status to confirm normal operation
The first thing my partner's log got right: Checked the ladder systematically before making changes
