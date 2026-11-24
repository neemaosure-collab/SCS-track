# Patch Card -- SCS3.6

One real bug from the audit.  The fix, not a rewrite.  The spec and the test come before the prompt.

The bug, in one sentence: reorderList() in workspace/stock-tools/reorder.js line 23 uses < instead of <=, dropping items whose stock equals their reorder level (such as grinding discs 115 mm at 20 vs 20).
Which check found it (auth, edge case, wrong version, invented library): edge case
The spec for the fix, one thing: Change only the comparison operator in reorderList() on line 23 of workspace/stock-tools/reorder.js from < to <= so items at or below their reorder level are returned; do not rewrite any other function.
The test that shows the bug (input -> expected): "grinding discs 115 mm,Gas and welding supplier,20,20,pieces" -> reorderList(parseCsv(csv)) returns ["grinding discs 115 mm"] (failed on starting state with [], passed after patch).
The prompt, word for word: Patch only reorderList() in workspace/stock-tools/reorder.js line 23 so items where In stock is less than or equal to Reorder at (<=) are included. Do not rewrite parseCsv, groupBySupplier, tidyName, or formatMessage.

## The Diff, Read Whole

Every line the patch changed.  A line the spec did not ask for is marked BEYOND in the second column.

| Line | What the patch changed | In the spec? | My adjustment |
|---|---|---|---|
| 23 | - return rows.filter((r) => parseInt(r["In stock"], 10) < parseInt(r["Reorder at"], 10)); -> + return rows.filter((r) => parseInt(r["In stock"], 10) <= parseInt(r["Reorder at"], 10)); | yes | Kept as patched; updated line 21 comment in follow-up adjustment commit to explicitly state (inclusive <= boundary). |

Tests before the patch: 5 passing, 1 failing (includes items exactly at their reorder level)
Tests after the patch: 7 passing, 0 failing (node --test workspace/stock-tools/reorder.test.js)
Tests after my adjustment: 7 passing, 0 failing (node --test workspace/stock-tools/reorder.test.js)
Commits on scs3.6-patch (the test, the patch, the adjustment): test: reproduce reorder boundary bug when stock equals reorder level; fix: include items at reorder level (<=); chore: clarify inclusive reorder boundary comment after diff review

## Receipt

1. Label: AI-assisted, directed by nestine
2. Tool and tier: Gemini (Free tier)
3. Spec and prompt: above, word for word
4. Tests or checks: node --test workspace/stock-tools/reorder.test.js (7/7 passing)
5. Rights line: not checked
6. Cost: 0
