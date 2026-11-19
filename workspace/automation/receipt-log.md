# AI receipt log -- SCS3.5

Label: AI-assisted, directed by nestine
Tool: Gemini
Spec initialled on (YYYY-MM-DD): 2026-11-19
First prompt sent on (YYYY-MM-DD HH:MM): 2026-11-19 12:30

## The one prompt, word for word
Write an Apps Script on Google Sheets with a comment on every line for a small shop inventory and sales workbook using only these made-up rows and column headings:
1. Function checkstock(): read DASHBOARD range A12:C15 with columns ITEM, CURRENT STOCK, STATUS (for example: Sugar, 4, REORDER; Bread, 20, OK; Milk, 20, OK; Rice, 5, REORDER). Filter rows where STATUS is "REORDER", clear REMINDERS, write headers ITEM, CURRENT STOCK, STATUS in A1:C1, and output matching rows starting at A2.
2. Function generateMonthlyReport(): read RECORD range A2:F1000 with columns DATE, ITEM, DIRECTION, QUANTITY, PRICE, AMOUNT (for example: 05/11/2026, Rice, OUT, 3, 200, 600; 12/11/2026, Beans, OUT, 2, 200, 400; 15/11/2026, Oil, IN, 10, 100, 1000). Filter rows where DATE is in November 2026 and DIRECTION is "OUT", sum AMOUNT for TOTAL SALES and QUANTITY for UNITS SOLD, clear MONTHLYREPORT, write headers REPORT MONTH, TOTAL SALES, UNITS SOLD in A1:C1, and write the summary row in A2:C2.
3. Trigger function onEdit(e): when sheet INTAKE is edited on row > 1 in column 1 (ITEM) or column 2 (QUANTITY), if both are non-empty, set column 3 (DATE) to today's date formatted as dd/MM/yyyy if blank, and set column 4 (STATUS) to "OK" if quantity is a number greater than 0, otherwise "INVALID ENTRY".

## What came back, and what I changed by hand
The tool returned all three functions (`checkstock`, `generateMonthlyReport`, and `onEdit`) with the required sheet names and ranges. By hand, I added the `// AI-assisted, directed by nestine -- the FS5a label` header on line 1 (commit `8ace72d`), verified the 0-based month index for November (`10`), and patched line 31 from `toLocaleTimeString` to `toLocaleDateString` so `REPORT MONTH` displays `November 2026` cleanly without a timestamp.

## Iteration -- only if the draft missed a line of the spec (which line)
Line 1 of the spec required the AI-assisted attribution label at the top of the script, which was omitted in the initial draft and added manually in commit `8ace72d`. Line 31 also used `toLocaleTimeString` instead of `toLocaleDateString` for the month label and was patched by hand.

## The debug move -- one real error: the message pasted whole, what my trace said first, what the tool said
Error message: `TypeError: Cannot read properties of undefined (reading 'range')` when running `onEdit` manually from the Apps Script editor, plus `November report showed 0 sales and 0 units` during Test 2 before aligning date objects and month indexing.
What my trace said first: Running `onEdit(e)` directly from the editor passes `undefined` for the event object `e`, so `e.range` fails; in `generateMonthlyReport()`, JavaScript `getMonth()` is 0-indexed (`10` = November) and text-formatted dates fail `typeof row[0].getMonth === "function"`.
What the tool said: Confirmed that `onEdit(e)` must be tested by editing a cell in the `INTAKE` sheet rather than clicking Run in the editor, and that dates in `RECORD` must be real Google Sheets Date values (`=DATE(2026,11,5)`) with `reportMonth = 10`.
