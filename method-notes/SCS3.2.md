1. Tested external sharing restrictions, Shared Drives, 2SV enforcement, device rules, and offboarding in the Practice OU first to verify behavior before touching client settings.
2. Logged every administrative action in admin-change-log.md with console paths, checks, and undo steps so every change has a clear rollback path.
3. Corrected the AI-drafted sharing and retention policy line by line against our actual Google Workspace edition to remove features we do not pay for.
4. Verified backup viability by running four concrete restore tests rather than assuming exports or trash retention work automatically.
5. Exported the post-suspend Users CSV, Drive audit log CSV, and Takeout archive outside the public Git repository to keep private tenant data secure.
6. What I might be wrong about in this client's data is assuming all critical files live in Google Drive rather than local desktops or personal WhatsApp/email accounts, and I would find out by interviewing staff and checking local device folders during the inventory check.
