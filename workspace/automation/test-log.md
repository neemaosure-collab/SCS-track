# Test log -- SCS3.5

<!-- The answers are worked out by hand, on paper, BEFORE the script runs. Expected first, actual after, edge case last. -->
<!-- Pass or fail: record the real result. Where a test fails: trace it, patch by hand, run again, and record the patch. -->

| Case | Input rows (made up) | Expected (by hand, before the run) | Actual (after the run) | Pass or fail | Patch (line, commit) |
|---|---|---|---|---|---|
| Test 1 | DASHBOARD: Sugar, 4, REORDER; Bread, 20, OK; Milk, 20, OK; Rice, 5, REORDER | REMINDERS should contain Sugar and Rice only, with their stock and REORDER status. | Sugar, 4, REORDER; Rice, 5, REORDER | PASS | None |
| Test 2 | RECORD: 05/11/2026 OUT, 3 units, sales 600; 12/11/2026 OUT, 2 units, sales 400; 15/11/2026 IN, 10 units, sales 0 | November OUT sales should total 1000, with 5 units sold, and REPORT MONTH set to November 2026. The IN row should not count. | Initial run returned 0 sales and 0 units, and formatted REPORT MONTH with a timestamp instead of the month name. Traced to month indexing/formatting in generateMonthlyReport(); patched by hand and re-ran to get November 2026, 1000 sales, 5 units. | fail -> pass | line 31, cf06e22 |
| Edge case | INTAKE: item Mandazi, quantity 0 | The date should be added and the status should say INVALID ENTRY. | INVALID ENTRY appeared in STATUS with today's date added. | PASS | None |
| Second edge case (optional, SGL menu) | INTAKE: item Sugar, quantity -5 | Negative quantity should be flagged as INVALID ENTRY. | INVALID ENTRY appeared in STATUS. | PASS | None |
| Partner as a careless owner | INTAKE: item left blank, quantity 10 | Script should return early and leave DATE and STATUS empty. | DATE and STATUS remained blank as expected. | PASS | None |
| Re-run in front of the trainer | Full run across DASHBOARD, RECORD, and INTAKE with made-up rows | REMINDERS lists REORDER items, MONTHLYREPORT shows November 2026 totals, INTAKE validates quantity > 0. | All three functions executed cleanly and matched expected outputs. | PASS | None |
