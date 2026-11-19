// AI-assisted, directed by nestine -- the FS5a label

function checkstock(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const dashboard = ss.getSheetByName("DASHBOARD")
  const StockData = dashboard.getRange("A12:C15").
  getValues();

  const lowStockItems =StockData.filter ( row => row[2] ==="REORDER");
  let reminders = ss.getSheetByName("REMINDERS")
  if (!reminders) {
    reminders = ss.insertSheet ("REMINDERS")
  }
  reminders.clearContents();

  reminders.getRange("A1:C1").setValues ([["ITEM", "CURRENT STOCK", "STATUS"]]);

  if (lowStockItems.length > 0) {
    reminders.getRange(2, 1, lowStockItems.length, 3).
    setValues(lowStockItems);
  }
}

function generateMonthlyReport(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const record = ss. getSheetByName("RECORD");
  const data =record.getRange("A2:F1000").getValues();
  const reportMonth = 10;
  const reportYear = 2026;

  const monthName =new Date (reportYear, reportMonth).toLocaleTimeString("en",{month: "long"});

  const monthLabel = `${monthName} ${reportYear}`;

  const monthlySales = data.filter(row =>row[0] && typeof row[0].getMonth === "function" && row[0].getMonth()===reportMonth && row[0].getFullYear()=== reportYear && row[2]==="OUT");

  const totalSales = monthlySales.reduce((sum,row) => sum + Number(row[5] || 0), 0);

  const unitsSold =monthlySales.reduce((sum,row) => sum + Number(row[3] || 0),0);

  let report = ss.getSheetByName("MONTHLYREPORT");
  if (!report) {
    report = ss.insertSheet("MONTHLYREPORT");
  }

report.clearContents();

report.getRange("A1:C1").setValues ([["REPORT MONTH", "TOTAL SALES", "UNITS SOLD"]]);
report.getRange("A2:C2").setValues ([[monthLabel, totalSales, unitsSold]]);
}

 function onEdit(e) {

  const sheet = e.range.getSheet();

  if (sheet.getName() !== "INTAKE") return;

  const row = e.range.getRow();
  const column = e.range.getColumn();

  if (row === 1 || column > 2) return;

  const item = sheet.getRange(row, 1).getValue();
  const quantity = sheet.getRange(row, 2).getValue();

  if (item === "" || quantity === "") return;

  const isValid = typeof quantity === "number" && quantity > 0;

  const dateCell = sheet.getRange(row, 3);

  if (dateCell.getValue() === "") {
    dateCell.setValue(new Date());
    dateCell.setNumberFormat("dd/MM/yyyy");
  }

  const checkCell = sheet.getRange(row, 4);

  if (isValid) {
    checkCell.setValue("OK");
  } else {
    checkCell.setValue("INVALID ENTRY");
  }

}
 

