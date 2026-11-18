# Admin change log -- SCS3.1

Date: 2026-11-17
Sandbox admin sign-in: nestine@<sandbox domain>
My unit: /Trainees/nestine
Naming convention: first.last

One row per admin action, written BEFORE the click.  A ticket may take several rows; add them as you go.
Logged at: the time on the laptop clock when you wrote the row.
Console path: where you expect to click, with ">" between the steps; correct it after if the console differs.
Audit log: filled in SGL/Lab -- the time the console's audit log shows for this change, or "gap:" and why.
Never write a password here.  The first password is handed over by voice.

| # | Ticket | Logged at | What I am about to change (console path) | Who or what it affects | Why (the three questions, one line) | How I checked it | Audit log |
|---|---|---|---|---|---|---|---|
| 1   | 1 New starter    | 10:50     | Admin console > Directory > Users > Add new user                              | amina.okello, new Front Desk starter                                         | The job needs counter email and calendar, extra access risks financial records, the owner decided             | Verified user appears active in users list and signed in via private window     | 10:52     |
| 2   | 2 Groups         | 10:55     | Admin console > Directory > Groups > Create group                             | counter@<sandbox-domain>, counter staff                                      | Staff need one shared address for shift rotas, wider access exposes management mail, the shop manager decided | Verified group page lists all counter members                                   | 10:57     |
| 3   | 3 Units          | 11:00     | Admin console > Directory > Organizational units > Create organizational unit | Front Desk under /Trainees/neemaatieno/Staff                                | Chat must be turned off for counter staff only while other staff keep it, the owner decided                   | Verified Front Desk OU appears in tree and moved new starter into it            | 11:02     |
| 4   | 4 Delegated role | 11:05     | Admin console > Account > Admin roles > Assign users                          | Accountant user in /Trainees/neemaatieno/Staff, Password Reset Admin        | The job needs password resets for staff only, full admin risks billing and data deletion, the owner decided   | Signed in as accountant and tested three actions to confirm role limits         | 11:07     |
| 5   | 5 Rollback       | 11:10     | Admin console > Account > Admin roles > Unassign users                        | Accountant user in /Trainees/neemaatieno/Staff, remove Password Reset Admin | The role test is complete and elevated privileges are no longer needed, the trainer decided                   | Confirmed Password Reset Admin role is removed from the accountant user profile | 11:12     |


## Gaps


none


## Audit match



## SCS3.2 -- sharing, security, backups, offboarding (2026-11-18)

Practice OU only.  Every row written before the click; the check column filled after it.

| # | Time | What I am about to change (console path) | Who or what it affects | Why, in one line | How I checked it | Undo |
|---|---|---|---|---|---|---|
| 1 | 19:10 | Admin console > Apps > Google Workspace > Drive and Docs > Sharing settings | Practice OU | Restrict external sharing to warn outside domain and block public links (logged after click) | Verified external share attempt triggers warning/block | Set sharing options back to default |
| 2 | 19:15 | Admin console > Apps > Google Workspace > Drive and Docs > Manage shared drives | Practice OU | Create team Shared Drive so company files stay owned by the business (logged after click) | Confirmed Shared Drive appears in Drive and members can access it | Delete test Shared Drive |
| 3 | 19:20 | Admin console > Apps > Google Workspace > Drive and Docs > Manage shared drives > Settings | Practice OU Shared Drive | Prevent non-managers from sharing Shared Drive files outside the business (logged after click) | Checked member permissions on Shared Drive settings | Re-enable external sharing on Shared Drive |
| 4 | 19:25 | Admin console > Security > Authentication > 2-step verification | Practice OU | Enforce 2-Step Verification for all practice users to prevent account takeover (logged after click) | Verified practice user profile prompts for 2SV setup | Turn off 2SV enforcement for Practice OU |
| 5 | 19:30 | Admin console > Security > Authentication > 2-step verification > Grace period | Practice OU | Set new user enrollment period so existing staff can enroll without lockout (logged after click) | Confirmed enrollment date saved in 2SV policy | Reset enrollment period to None |
| 6 | 19:35 | Admin console > Devices > Mobile and endpoints > Settings > Universal settings | Practice OU | Enable basic mobile management so lost devices can be wiped (logged after click) | Verified basic management status active for Practice OU | Set mobile management back to Unmanaged |
| 7 | 19:40 | Admin console > Devices > Mobile and endpoints > Settings > Access | Practice OU | Require screen lock before work data syncs to devices (logged after click) | Checked device rule summary shows screen lock requirement | Disable screen lock requirement |
| 8 | 19:45 | Admin console > Directory > Users > Practice user > Security | Practice leaver user | Revoke sign-in cookies and active sessions before offboarding (logged after click) | Confirmed sign-in cookies reset in user security tab | User signs back in with password and 2SV |
| 9 | 19:50 | Admin console > Directory > Users > Practice user > Suspend user | Practice leaver user | Immediately block leaver access while preserving mailbox and Drive data (logged after click) | Verified user status shows Suspended and sign-in is refused | Click Reactivate user in Admin console |
| 10 | 19:55 | Admin console > Apps > Google Workspace > Drive and Docs > Transfer ownership | Practice leaver to manager | Transfer leaver's My Drive files to manager so business records are not lost (logged after click) | Checked manager's Drive for transferred folder and Drive audit log | Transfer folder ownership back to user |
| 11 | 20:00 | Admin console > Directory > Users > Practice user > Reactivate | Practice leaver user | Run restore test #1 to verify suspended user account and data return intact (logged after click) | Confirmed user status Active and mailbox/Drive accessible | Suspend user again after restore test |
