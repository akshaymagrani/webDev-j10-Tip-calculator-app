let bill = document.getElementsByClassName("bill-input");
let tip = document.getElementsByClassName("tip");

for(var i = 0; i<=4; i++){
    console.log(tipAmount[i].innerText);
}
console.log(bill[0].value,tipAmount);
function total(){
    let total = "0";
    total = tipAmount + bill[0].value;  
}

function reset(){
    bill[0].value = "";

}