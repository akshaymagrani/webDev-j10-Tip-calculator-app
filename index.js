let bill = document.getElementsByClassName("bill-input");
let tipAmount = document.getElementById("result-tip-amount");
let totalAmount = document.getElementById("result-total");
let people = document.getElementsByClassName("no-of-people");
let customBtn = document.getElementById("btn-custom");
let customTip = document.getElementById("tip-custom");
let errorMsg = document.getElementsByClassName("errorMsg");

function tip(btn){
    if(people[0].value == ''|| people[0].value == 0){
        errorM();
    }else{
        let a = (parseInt(btn.innerText.slice(0,2)) * bill[0].value /(100*people[0].value)).toFixed(2);
        console.log(tipAmount.innerText);
        tipAmount.innerText = tipAmount.innerText.slice(0,1) + ' ' + a;
        let total = (parseInt(bill[0].value)/people[0].value + parseInt(a)).toFixed(2);  
        totalAmount.innerText = totalAmount.innerText.slice(0,1) + ' ' + total;
    }
}

function errorM(){    
        /* Styling the error message when there is no input to no-of-people input box */
        people[0].value = 0;
        people[0].style.boxShadow = "0 0 5px red";
        errorMsg[0].style.display = "inline"
        /* Default values for error */
        tipAmount.innerText = tipAmount.innerText.slice(0,1) + ' ' + '0.0';
        totalAmount.innerText = totalAmount.innerText.slice(0,1) + ' ' + '0.0';
        setTimeout(reset, 3000);
}


function custom() {
    customBtn.style.display = "none";
    customTip.style.display = "block";
}

function result(){
    var a = (customTip.value * bill[0].value /(100*people[0].value)).toFixed(2);
    let total = (parseInt(bill[0].value)/people[0].value + parseInt(a)).toFixed(2);
    tipAmount.innerText = tipAmount.innerText.slice(0,1) + ' ' + a;
    totalAmount.innerText = totalAmount.innerText.slice(0,1) + ' ' + total;
    if(people[0].value == ''|| people[0].value == 0){
        errorM();
    }
}

function reset(){
    bill[0].value = "";
    people[0].value = "";
    tipAmount.innerText = tipAmount.innerText.slice(0,1) + ' ' + 0;
    totalAmount.innerText = totalAmount.innerText.slice(0,1) + ' ' + 0; 
    customBtn.style.display = "block";
    customTip.value = '';
    customTip.style.display = "none";
    people[0].style.boxShadow = "none";
    errorMsg[0].style.display = "none";
}