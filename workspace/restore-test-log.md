# Restore test log -- the practice business (2026-11-18)

A backup nobody has restored from is a hope.  'It worked' is not an entry: say what did not come back,
or what you checked to be sure nothing is missing.

| # | Restore | What I deleted or suspended | How I restored it | How long | What came back | What did not come back |
|---|---|---|---|---|---|---|
| 1 | The suspended user, restored whole | Suspended the practice leaver user account in Admin console | Admin console > Directory > Users > Selected suspended user > Clicked Reactivate | 2 mins | Account login access, Gmail inbox messages, My Drive files, and Calendar events | Active sign-in sessions/cookies had been revoked so user had to re-authenticate with 2SV |
| 2 | A file from the shared drive's trash | Deleted test roster spreadsheet from the Practice Shared Drive | Opened Shared Drive > Trash > Right-clicked file > Clicked Restore | 1 min | File content, version history, and Shared Drive folder location | Verified nothing was missing; folder-level sharing permissions remained intact |
| 3 | A user's deleted file, restored by the admin | Practice user deleted a file from My Drive and emptied their Drive trash | Admin console > Directory > Users > User profile > Restore data (selected date range) | 3 mins | Deleted file returned to the user's My Drive root folder with original content | Previous folder hierarchy and custom sharing links were not preserved automatically |
| 4 | One file from the export | Extracted one sample document from the downloaded Takeout zip archive | Unzipped Takeout archive locally and uploaded the extracted file back to Google Drive | 2 mins | Document text, tables, and formatting converted back into Google Docs format | Live comment threads, original sharing permissions, and Google Forms links did not come back |
