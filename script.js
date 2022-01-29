function increaseButton() {
     var element = document.getElementById("Counter");
     var value = element.innerHTML;

    ++value;
    console.log(value);
    document.getElementById("Counter").innerHTML = value;

}

function decreaseButton() {
    var element = document.getElementById("Counter");
    var value = element.innerHTML;

   --value;
   console.log(value);
   document.getElementById("Counter").innerHTML = value;

}

function resetButton() {
    var element = document.getElementById("Counter");
    var value = element.innerHTML;

   --value;
   console.log(value);
   document.getElementById("Counter").innerHTML = '0'

}
