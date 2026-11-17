# Method note -- SCS3.1

## 1. What I set out to do
Configure least-privilege Google Workspace organizational units, groups, user accounts, service controls, and delegated admin roles while logging every change before clicking save.

## 2. What I did, in order
I logged each action first, created the new starter account, built the counter group, created the Front Desk OU with restricted chat, tested delegated Password Reset Admin limits as the accountant, and rolled back that role.

## 3. What went wrong, and how I fixed it
The users export lacked a last-sign-in column and the audit log needed filtering to my admin actor before export, so I verified the new starter login directly and exported the filtered Admin log events CSV.

## 4. How long it took, against the plan
The console configuration took about 25 minutes as planned, while exporting the audit log and matching timestamps took an extra 15 minutes.

## 5. One lesson for the next person
Always write the change-log row before clicking save in the Admin console so your timestamps align cleanly with the audit log export.

## 6. What I might be wrong about, and how I would find out
I might be wrong about whether Password Reset Admin still lets the accountant trigger resets for super-admins or users outside Staff, which I would find out by testing a reset attempt against an admin account or checking the role privilege list in Admin console > Account > Admin roles.
