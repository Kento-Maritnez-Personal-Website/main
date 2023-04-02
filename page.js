let showcard = document.getElementsByClassName("show-card");
function opentab (tabname){
   for (showcard of showcard) {
      showcard.remove("active-card");
   }
   document.getElementById(tabname).add("active-card");
}