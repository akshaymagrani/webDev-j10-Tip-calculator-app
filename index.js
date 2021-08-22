let bill = document.getElementsByClassName("bill-input");
let tipAmount = document.getElementById("result-tip-amount");
let totalAmount = document.getElementById("result-total");
let people = document.getElementsByClassName("no-of-people");

function tip(btn){
    if(people[0].value == ''){
        people[0].value = 1;
    }
        var a = (parseInt(btn.innerText.slice(0,2)) * bill[0].value /(100*people[0].value)).toFixed(2);
        console.log(tipAmount.innerText);
        tipAmount.innerText = tipAmount.innerText.slice(0,1) + ' ' + a;
        function total(){
            let total = (parseInt(bill[0].value)/people[0].value + parseInt(a)).toFixed(2);  
            console.log(typeof a, typeof bill[0].value);
            totalAmount.innerText = totalAmount.innerText.slice(0,1) + ' ' + total;
        }
  
    total();
    return a;
}

function reset(){
    bill[0].value = "";
    people[0].value = "";
    tipAmount.innerText = tipAmount.innerText.slice(0,1) + ' ' + 0;
    totalAmount.innerText = totalAmount.innerText.slice(0,1) + ' ' + 0; 
}