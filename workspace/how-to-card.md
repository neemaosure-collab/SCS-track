# How-to card -- SCS3.1 (my own words, as the console was on the day)

Six paths.  Write each one as the console showed it today, with ">" between the steps -- not as a tool said it.

User: Admin console > Directory > Users > Add new user
Group: Admin console > Directory > Groups > Create group
Unit: Admin console > Directory > Organizational units > Create organizational unit
Role: Admin console > Account > Admin roles > Assign users
Reset: Admin console > Directory > Users > Select user > Reset password
Rollback: Admin console > Account > Admin roles > Unassign users

## AI receipts

One line per AI look-up, each starting "AI receipt:" -- the tool, the date, what I asked, what it said, what the
real console showed, what was different.  Never a user list, an address, a password or the domain name in the ask.

AI receipt: ChatGPT | 2026-11-17 | Where to export Google Workspace admin audit log events as CSV | Go to Reporting > Audit and investigation > Admin log events and export CSV | Admin console > Reporting > Audit and investigation > Admin log events | Matched the console path directly
AI receipt: Gemini | 2026-11-17 | How to structure least-privilege access map rows and method note reflections for Google Workspace admin tasks | Assign super-admin only to the owner, use one OU per user and group addresses for permissions, and document verification steps | Admin console > Account > Admin roles and Directory > Organizational units | Console uses Assign users and Unassign users under each admin role rather than a single toggle
