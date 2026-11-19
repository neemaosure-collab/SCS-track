# Reading log -- SCS3.5

Script: workspace/automation/<name>.gs
Read to the last line before the first run: yes 
Label: AI-assisted, directed by nestine

<!-- Every line of the script in your own words, BEFORE the first run.  One row per line, or a range such as 12-14 -->
<!-- when the lines are one statement.  Which word: variable, sequence, condition, loop, trigger.  Blank lines,  -->
<!-- comment lines and lines that are only a closing bracket need no row.  A line you cannot say is rewritten in   -->
<!-- words you can, or deleted.  If a patch adds a line, renumber the rows below it.                               -->

| Line no. | The line, first words | In my own words | Which word |
|---|---|---|---|
| 3 | function checkstock() | Starts the function that checks stock levels. | sequence |
| 4 | const ss = SpreadsheetApp.getActiveSpreadsheet(); | Gets the spreadsheet that is currently open. | variable |
| 5 | const dashboard = ss.getSheetByName("DASHBOARD") | Finds the DASHBOARD tab in the spreadsheet. | variable |
| 6 | const StockData = dashboard.getRange("A12:C15"). | Selects cells A12 to C15 on the DASHBOARD tab. | variable |
| 7 | getValues(); | Reads the selected cells and gets their values. | sequence |
| 9 | const lowStockItems = StockData.filter(row => row[2] === "REORDER"); | Keeps only rows marked REORDER. | condition |
| 10 | let reminders = ss.getSheetByName("REMINDERS") | Looks for the REMINDERS tab. | variable |
| 11 | if (!reminders) { | Checks whether the REMINDERS tab does not exist. | condition |
| 12 | reminders = ss.insertSheet("REMINDERS") | Creates the REMINDERS tab if it is missing. | sequence |
| 14 | reminders.clearContents(); | Clears the old contents of the REMINDERS tab. | sequence |
| 16 | reminders.getRange("A1:C1").setValues(...) | Adds the column headings to the REMINDERS tab. | sequence |
| 18 | if (lowStockItems.length > 0) { | Checks whether there are any items that need reordering. | condition |
| 19 | reminders.getRange(2, 1, lowStockItems.length, 3). | Selects the rows where the low-stock items will be written. | sequence |
| 20 | setValues(lowStockItems); | Writes the low-stock items into the REMINDERS tab. | sequence |
| 24 | function generateMonthlyReport(){ | Starts the function that creates the monthly sales report. | sequence |
| 25 | const ss = SpreadsheetApp.getActiveSpreadsheet(); | Gets the currently open spreadsheet. | variable |
| 26 | const record = ss.getSheetByName("RECORD"); | Finds the RECORD tab. | variable |
| 27 | const data = record.getRange("A2:F1000").getValues(); | Reads the records from cells A2 to F1000. | variable |
| 28 | const reportMonth = 10; | Sets the report month number to 10. | variable |
| 29 | const reportYear = 2026; | Sets the report year to 2026. | variable |
| 31 | const monthName = new Date(reportYear, reportMonth).toLocaleTimeString("en",{month:"long"}); | Attempts to get the month name for the report. | variable |
| 33 | const monthLabel = `${monthName} ${reportYear}`; | Combines the month name and year. | variable |
| 35 | const monthlySales = data.filter(...) | Keeps only OUT sales recorded in the selected month and year. | condition |
| 37 | const totalSales = monthlySales.reduce(...) | Adds together the sales amounts for the month. | loop |
| 39 | const unitsSold = monthlySales.reduce((sum,row) => sum + Number(row[3] || 0),0); | Adds up the units sold. | loop |
| 41 | let report = ss.getSheetByName("MONTHLYREPORT"); | Looks for the MONTHLYREPORT tab. | variable |
| 42 | if (!report) { | Checks whether the report tab is missing. | condition |
| 43 | report = ss.insertSheet("MONTHLYREPORT"); | Creates the report tab if it is missing. | sequence |
| 46 | report.clearContents(); | Clears the old report contents. | sequence |
| 48 | report.getRange("A1:C1").setValues([["REPORT MONTH", "TOTAL SALES", "UNITS SOLD"]]); | Adds the report column headings. | sequence |
| 49 | report.getRange("A2:C2").setValues([[monthLabel, totalSales, unitsSold]]); | Writes the month, total sales and units sold into the report. | sequence |
| 52 | function onEdit(e) { | Starts the function that responds to spreadsheet edits. | trigger |
| 54 | const sheet = e.range.getSheet(); | Gets the tab where the edit happened. | variable |
| 56 | if (sheet.getName() !== "INTAKE") return; | Stops if the edit was not on the INTAKE tab. | condition |
| 58 | const row = e.range.getRow(); | Gets the edited row number. | variable |
| 59 | const column = e.range.getColumn(); | Gets the edited column number. | variable |
| 61 | if (row === 1 or column > 2) | Skips the heading row and edits outside the first two columns. | condition |
| 63 | const item = sheet.getRange(row, 1).getValue(); | Gets the item name from column A. | variable |
| 64 | const quantity = sheet.getRange(row, 2).getValue(); | Gets the quantity from column B. | variable |
| 66 | if (item === "" || quantity === "") return; | Stops if the item or quantity is empty. | condition |
| 68 | const isValid = typeof quantity === "number" && quantity > 0; | Checks that the quantity is a positive number. | condition |
| 70 | const dateCell = sheet.getRange(row, 3); | Selects the date cell in column C. | variable |
| 72 | if (dateCell.getValue() === "") { | Checks whether the date cell is empty. | condition |
| 73 | dateCell.setValue(new Date()); | Adds the current date. | sequence |
| 74 | dateCell.setNumberFormat("dd/MM/yyyy"); | Displays the date in day/month/year format. | sequence |
| 77 | const checkCell = sheet.getRange(row, 4); | Selects the checking cell in column D. | variable |
| 79 | if (isValid) { | Checks whether the quantity is valid. | condition |
| 80 | checkCell.setValue("OK"); | Writes OK when the quantity is valid. | sequence |
| 81 | } else { | Starts the alternative action when the quantity is invalid. | condition |
| 82 | checkCell.setValue("INVALID ENTRY"); | Writes INVALID ENTRY when the quantity is invalid. | sequence |
