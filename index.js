// OctoControl
var printers = new Object();

window.onload = function(){
  // check for printers
  if(localStorage.getItem("savedPrinters") === null){
    // show modal about adding printers
  }else {
    switchView("home");
  }
};

function switchView(newView){
  $("#main-body").empty();
  $("#main-body").load("screens/"+newView+".html");
}
