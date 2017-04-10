



// Calling to calculate the total of the services we provide 

function calcTotal() {
  var itemTotal = 0;
  var items = document.getElementsByTagName("input");
    for (var i=0;i<5;i++) {
      if(items [i].checked){
        itemTotal += (items[i].value*1);
      }      
    }
  
  document.getElementById("total").innerHTML = "Your Services Total would be about $" + itemTotal.toFixed(2) + " per hour.";
  
 var sButton = document.getElementById("submit");
  sButton.addEventListener("click", calcTotal);

}

document.getElementById("submit").addEventListener("click", calcTotal, false);

             