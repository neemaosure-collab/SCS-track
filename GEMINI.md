# Project Rules -- scs-track

## Stack
- Node.js v22.22.1 using built-in modules only (node:fs, node:test, node:assert) with zero external npm dependencies.
- Stock helper scripts live in workspace/stock-tools/ (reorder.js, send-sms.js, stock-export.csv).
- Google Apps Script workbook automation lives in workspace/automation/stock-automation.gs.

## Tests
- Run stock tool unit tests: node --test workspace/stock-tools/reorder.test.js
- Run CLI reorder check against sample CSV: node workspace/stock-tools/reorder.js workspace/stock-tools/stock-export.csv

## Never
- Never hardcode API keys, tokens, or gateway secrets in source files; always read credentials from process.env and keep .env in .gitignore.
- Never use strict < when checking reorder thresholds where items at the reorder level must be included; use <=.
- Never split CSV rows with naive line.split(",") when item descriptions can contain quoted commas, and never silently drop rows with blank stock quantities.
- Never commit real client names, staff details, customer lists, phone numbers, or financial records into this repository.
