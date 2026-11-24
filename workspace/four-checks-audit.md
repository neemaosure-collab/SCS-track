# Four-Checks Audit

Run all four on every AI-built piece before a client sees it.  Write what you found, not what you hoped.
'Clean' is allowed only with the evidence beside it: the command you ran and what it printed, or the
page you read and the date you read it.  One section per piece; add a new piece at the bottom each time.

## Piece 1: the stock tool (workspace/stock-tools)

### Auth
Looked for: Hardcoded API keys, tokens, or credentials committed in source files.
Found: Hardcoded gateway API key on line 9 of `workspace/stock-tools/send-sms.js` instead of reading from an environment variable.
Evidence: `nl -ba workspace/stock-tools/send-sms.js | sed -n '8,11p'` -> line 9 defines a hardcoded string constant for the gateway API key (`const API_KEY = ...`), followed on line 10 by `const GATEWAY = "http://sms-gateway.example.invalid/send";`.

### Edge cases
Ugly inputs, written before trying them: Items where `In stock` equals `Reorder at` (`grinding discs 115 mm`: 20 vs 20), blank `In stock` cell (`Cement 50 kg`: empty cell), quoted item names containing commas (`"Nails, 3 inch"`), and apostrophes in lowercase names (`ng'ombe salt lick`).
Found: Three rows silently vanish from the reorder list (`grinding discs 115 mm` dropped because line 23 uses `<` instead of `<=`; `Cement 50 kg` dropped because blank `In stock` parses as `NaN`; `"Nails, 3 inch"` dropped because `line.split(",")` shifts columns on quoted commas), and `ng'ombe salt lick` title-cases to `Ng'Ombe Salt Lick`.
Evidence: `node workspace/stock-tools/reorder.js workspace/stock-tools/stock-export.csv` -> printed only 4 items (`Welding rods 2.5 mm`, `Oxygen refill`, `Ng'Ombe Salt Lick`, `Nuts & bolts M10`), omitting `grinding discs 115 mm`, `Cement 50 kg`, and `Nails, 3 inch`.

### Wrong versions
Looked for: Node APIs incompatible with older Node versions despite `README.md` claiming "Works on any Node".
Found: `Object.groupBy` on line 29 of `reorder.js` requires Node 21+, and `fetch` in `send-sms.js` requires Node 18+; works on this machine's Node v22.22.1 but fails on older LTS versions.
Evidence: `grep -n "Object.groupBy" workspace/stock-tools/reorder.js && node -v` -> `29:  return Object.groupBy(list, (r) => r.Supplier);` and `v22.22.1`.

### Invented libraries
Looked for: Non-existent npm packages, fake endpoints, or invented placeholder data.
Found: Zero external packages imported (`require("fs")` and `node:test`/`node:assert` only), while `send-sms.js` line 10 uses an invented placeholder endpoint (`http://sms-gateway.example.invalid/send`).
Evidence: `grep -nE "https?://|sender|from" workspace/stock-tools/send-sms.js` -> `10:const GATEWAY = "http://sms-gateway.example.invalid/send";`.

The one to fix first, and why: Remove the hardcoded gateway API key in `workspace/stock-tools/send-sms.js:9` by hand immediately so credentials are not exposed in code, then patch the `<` vs `<=` reorder boundary bug in `workspace/stock-tools/reorder.js:23` on `scs3.6-patch`.

## Piece 2: my own SCS3.5 script

### Auth
Looked for: Hardcoded credentials, API keys, webhooks, or external URLs in `workspace/automation/stock-automation.gs`.
Found: Clean — script uses only `SpreadsheetApp.getActiveSpreadsheet()` with no hardcoded keys, tokens, or external endpoints.
Evidence: `grep -nE "https?://|API|KEY|TOKEN|secret|password" workspace/automation/stock-automation.gs || echo "no matches"` -> `no matches`.

### Edge cases
Ugly inputs, written before trying them: Empty `ITEM` or `QUANTITY` cells on `INTAKE`, zero or negative quantities (`0`, `-5`), text dates instead of `Date` objects in `RECORD`, and missing `REMINDERS` or `MONTHLYREPORT` tabs.
Found: Blank inputs and `<= 0` quantities are handled safely (`INVALID ENTRY` written), and missing output tabs are created automatically, but text-formatted dates in `RECORD` are silently skipped by `typeof row[0].getMonth === "function"` on line 35.
Evidence: `grep -n "getMonth" workspace/automation/stock-automation.gs` -> `35:  const monthlySales = data.filter(row =>row[0] && typeof row[0].getMonth === "function" && row[0].getMonth()===reportMonth && row[0].getFullYear()=== reportYear && row[2]==="OUT");`.

### Wrong versions
Looked for: Deprecated Google Apps Script services or browser-only JS methods that behave unexpectedly in V8 runtime.
Found: Line 31 calls `toLocaleTimeString("en",{month: "long"})` instead of `toLocaleDateString`, which appends a default time string (`12:00:00 AM`) to the month name in V8 runtime.
Evidence: `grep -n "toLocaleTimeString" workspace/automation/stock-automation.gs` -> `31:  const monthName =new Date (reportYear, reportMonth).toLocaleTimeString("en",{month: "long"});`.

### Invented libraries
Looked for: Non-existent Apps Script services, undefined globals, or hallucinated methods in `workspace/automation/stock-automation.gs`.
Found: Clean — uses only standard Google Apps Script `SpreadsheetApp` APIs (`getActiveSpreadsheet`, `getSheetByName`, `insertSheet`, `getRange`, `getValues`, `setValues`, `clearContents`, `setNumberFormat`).
Evidence: `grep -n "App\." workspace/automation/stock-automation.gs` -> lines `4`, `25`, and `54` (`SpreadsheetApp.getActiveSpreadsheet()`).

What I will do about what I found (a fix on the sheet copy, SCS3.5's test log, or 'clean'): Keep the manual `toLocaleDateString` fix documented in `workspace/automation/test-log.md` (commit `8ace72d`) and enforce real Date cells (`=DATE(...)`) in the sheet copy's `RECORD` tab.
