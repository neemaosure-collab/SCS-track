# Back office build -- a tailor (invoicing)

## Overkill test
1. How many rows a month: about forty.
2. How many people type: the owner and one helper.
3. Does money move in the sheet: no, it only records it.
4. Is there a phone-only user: yes, the helper checks balances on a phone.
5. What happens if it breaks: the paper receipt book is kept as backup.
Verdict: Sheets.  Pattern: invoicing.  Because: forty rows a month and two people need shared access without complex software.

## Validation
| Column | Rule | The garbage I typed | Refused? |
|---|---|---|---|
| Date | is valid date | 31/02 | yes |
| Customer | dropdown from Lists | unknown name | yes |
| Amount | greater than 0 | -50 | yes |

## Protection
| Range | Who can edit | Warning or restriction | Entry columns still open? |
|---|---|---|---|
| Dashboard | only me | restriction | yes |

## AI receipts
| The ask (headings only) | The formula | What I changed | The hand check |
|---|---|---|---|
| total still owed from Date, Invoice or payment, Amount | =SUMIF(Records!B:B,"invoice",Records!E:E) | subtracted payments using a second SUMIF | log row 1 |

## Break the books
1. Typed negative number in Amount: refused by validation rule.
2. Typed directly on the Dashboard: blocked by sheet protection.
3. Deleted a transaction row: restored via version history.
4. Sorted a single column: undone immediately.
5. Pasted text over a formula cell: blocked by protection.
6. Entered date as plain text: refused by date validation.
7. Added a new invoice row at the bottom: automatically counted in Dashboard totals.
