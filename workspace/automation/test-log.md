# Test log -- SCS3.5

<!-- The answers are worked out by hand, on paper, BEFORE the script runs. Expected first, actual after, edge case last. -->
<!-- Pass or fail: record the real result. Where a test fails: trace it, patch by hand, run again, and record the patch. -->

| Case | Input rows (made up) | Expected (by hand, before the run) | Actual (after the run) | Pass or fail | Patch (line, commit) |
|---|---|---|---|---|---|
| Test 1 | DASHBOARD: Sugar, 4, REORDER; Bread, 20, OK; Milk, 20, OK; Rice, 5, REORDER | REMINDERS should contain Sugar and Rice only, with their stock and REORDER status. | Sugar, 4, REORDER; Rice, 5, REORDER | PASS | None |
| Test 2 | RECORD: 05/11/2026 OUT, 3 units, sales 600; 12/11/2026 OUT, 2 units, sales 400; 15/11/2026 IN, 10 units, sales 0 | November OUT sales should total 1000, with 5 units sold. The IN row should not count. | November report showed 0 sales and 0 units. | FAIL | Not yet patched |
| Edge case | INTAKE: item Mandazi, quantity 0 | The date should be added and the status should say INVALID ENTRY. | INVALID ENTRY appeared in STATUS. | PASS | None |
| Second edge case (optional, SGL menu) | | | | | |
| Partner as a careless owner | | | | | |
| Re-run in front of the trainer | | | | | |

