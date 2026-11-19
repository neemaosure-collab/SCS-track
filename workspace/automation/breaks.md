# The nine breaks -- SCS3.5

<!-- Checked with the script open.  Every answer is a line number or a patch -- never "it should be fine".        -->
<!-- Break 8 is checked on the trigger settings: what fires it, and how often.  Break 9 is caught by the test log. -->

| # | Break | Cannot happen because ... (line) | Found -- patched at (line, commit) |
|---|---|---|---|
 | # | Break | Cannot happen because ... (line) | Found -- patched at (line, commit) |
|---|---|---|---|
| 1 | The header row counted | Line 6 reads A12:C15, below the header. | |
| 2 | The wrong tab | Lines 5, 26 and 56 check the expected sheet names. | |
| 3 | The number read as text | Line 68 checks that quantity is a number. | |
| 4 | The boundary | Lines 6 and 27 limit the ranges; line 61 skips row 1. | |
| 5 | The overwrite | Lines 14 and 46 clear old output before writing new output. | |
| 6 | The invented piece | Not yet fully verified: record which functions were actually run. | |
| 7 | The silent assumption | Lines 28–29 set the report month and year. | |
| 8 | The trigger that runs too often | Line 52: onEdit(e) runs automatically when a user edits the spreadsheet; 0 installed triggers shown. | |
| 9 | The confident wrong answer | Test log: November 2026 report returned 0 sales and 0 units instead of the expected 1000 sales and 5 units. Test failed; needs investigation. | |
