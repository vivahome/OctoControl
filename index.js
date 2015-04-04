// OctoControl

window.onload = function(){
  switchView("home");
};

function switchView(newView){
  $("#main-body").empty();
  $("#main-body").load("screens/"+newView+".html");
}
