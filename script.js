
var row=1;
var entry=document.getElementById("entry");
entry.addEventListener("click",displayDetails);


function displayDetails(){
  var BrowserName=document.getElementById("browserName").value;
  var BrowserVersion=document.getElementById("browserVersion").value;
  var ScreenWidth=document.getElementById("screenWidth").value;
  var ScreenHeight=document.getElementById("screenHeight").value;
  if(!BrowserName||!BrowserVersion||!ScreenWidth||!ScreenHeight){
    alert("please fill all the boxes");
    return;
  }
  var display=document.getElementById("display");
  var newRow=display.insertRow(row);
  var cell1=newRow.insertCell(0);
  var cell2=newRow.insertCell(1);
  var cell3=newRow.insertCell(2);
  var cell4=newRow.insertCell(3);
  
  cell1.innerHTML=BrowserName;
  cell2.innerHTML=BrowserVersion;
  cell3.innerHTML=ScreenWidth;
  cell4.innerHTML=ScreenHeight;
   row++;
  
}