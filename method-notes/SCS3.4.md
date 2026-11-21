# Method note -- SCS3.4

## 1. What I set out to do
I set out to build a structured back-office workbook with separate Lists, Records, and Dashboard tabs for an invoicing workflow.

## 2. What I did, in order
I defined lookup tables in Lists, added data validation rules to Records, and built summary formulas on Dashboard using full-column ranges.

## 3. How I checked it worked
I performed five manual hand checks against the Records rows and tested invalid inputs against every entry column.

## 4. What went wrong
Initially, a formula range stopped early and missed rows at the bottom of Records, causing a mismatch in the overdue count.

## 5. What I would do differently
I would always use open-ended column references like Records!E:E from the very beginning so new rows never fall outside the calculation.

## 6. What I might be wrong about
I might be assuming the helper will always select names from the dropdown rather than pasting values; I will verify this during live user testing.

## 6. What I might be wrong about, and how I would find out
I might be wrong in assuming the shop attendant will always use the filter menu before sorting or pick items from the dropdown rather than pasting values over them. I will find out by comparing the DASHBOARD totals against the physical counter notebook after the first week of live use and checking RECORD for any red validation corners.
