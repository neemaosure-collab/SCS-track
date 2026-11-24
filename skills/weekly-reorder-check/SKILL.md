# Weekly Stock Reorder Check

## Name
weekly-reorder-check

## When to use
Run every Monday morning after downloading the weekly stock tab CSV from the shop workbook to generate supplier-grouped WhatsApp reorder lists.

## Steps
1. Save the downloaded CSV export to workspace/stock-tools/stock-export.csv.
2. Run `node --test workspace/stock-tools/reorder.test.js` to verify reorder rules pass.
3. Run `node workspace/stock-tools/reorder.js workspace/stock-tools/stock-export.csv` to generate the supplier-grouped reorder message.
4. Check the printed output against the CSV for any blank stock cells or quoted comma rows before sending.
5. Copy each supplier block into WhatsApp for ordering.

## How you know it worked
The command exits with code 0 and prints "Reorder list" followed by each supplier heading and its low-stock items without NaN or missing rows.

Ran: 2026-11-24 -- Passed; printed supplier-grouped reorder list for 4 low-stock items across Gas and welding supplier, Agro wholesaler, and Hardware wholesaler.
