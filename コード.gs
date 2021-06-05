// @ts-nocheck
function setStartTime() { 
　var sheet = SpreadsheetApp.getActiveSheet(); 
// 　var lastRow = sheet.getLastRow(); 
　var formatDate = Utilities.formatDate(new Date(), "JST","yy/MM/dd"); 
  var columnBVals = sheet.getRange('B:B').getValues(); // B列「動物」の値を配列で取得
  var LastRow = columnBVals.filter(String).length;
　sheet.getRange(LastRow + 3,2).setValue(formatDate); 

　function padding(num) { 　
　　return ('00' + num).slice(-2) 　} 

　function formattedCurrentTime() { 　 
　var now = new Date() 
　return now.getHours() + ':' + padding(now.getMinutes()) 　} 　

　var day = new Date().getDate(); 　
　sheet.getRange(LastRow + 3,3).setValue(formattedCurrentTime()); 
} 

function setEndTime() { 
　var sheet = SpreadsheetApp.getActiveSheet(); 
　var columnBVals = sheet.getRange('B:B').getValues(); // B列「動物」の値を配列で取得
  var LastRow = columnBVals.filter(String).length; 　
　
　function padding(num) {
　return ('00' + num).slice(-2) 　} 　

　function formattedCurrentTime() { 
　var now = new Date() 
　return now.getHours() + ':' + padding(now.getMinutes()) }
　var day = new Date().getDate(); 
  sheet.getRange(LastRow + 2,4).setValue(formattedCurrentTime()); 
}

// function onEdit(e) {
//   if (e.value = "業務開始") {
//     e.range.setBackground("red");
//   }
// }

// function onEdit(e) {
//   if (e.value = "業務開始") {
//     setStartTime();
//   }
// }

function test(){
  var sheet = SpreadsheetApp.getActiveSheet(); 
　var lastRow = sheet.getLastRow(); 
  // 3.I3セルを取得する
  var cell_I3 = sheet.getRange("I3")
  // 4.I3セルの値を取得する
  var val_I3 = cell_I3.getValue() 

  if(val_I3=="業務開始"){
    setStartTime();
  }if(val_I3=="業務終了"){
    setEndTime();
  }else{
    // YESでない場合
　　// 1.なにもしない
  }
}

function onEdit(e) {
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getActiveSheet();
var range = sheet.getActiveRange();
var row = e.range.getRow();
var column = e.range.getColumn();
if (sheet.getName() == "テストA" && row == 3 && column == 9) {
  test();
  }else{

  }
}