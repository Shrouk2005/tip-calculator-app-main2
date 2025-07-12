let buttons = document.querySelectorAll(".pos-buttons button");
let tipAmountpra = document.querySelector(".tipAmountpra");
let totalAmountpra = document .querySelector(".totalAmountpra");
let zeropra = document.querySelectorAll(".bill :nth-child(3) , .people :nth-child(3)");
let percent =0;

for(let i =0; i<buttons.length; i++){

buttons[i] .onclick = ()=>{
percent = buttons[i].innerHTML.replace("%","") /100;
 showData();
}

}

price.onkeyup = ()=>{
    percent = 0;
 showData();
}
people.onkeyup = ()=>{
    percent = 0;
 showData();
}
custom.onkeyup = ()=>{
    percent = custom.value / 100;
    showData();
}

reset.onclick = ()=>{
    tipAmountpra.innerHTML = "$0.00";
    totalAmountpra.innerHTML = "$0.00";
    price.value = '';
    people.value = '';
}




function showData(){

let priceOverpeople = price.value /people.value;

 if(price.value != '' && people.value != ''){
 
 totalAmountpra.innerHTML = `$${(priceOverpeople + priceOverpeople *percent).toFixed(2)}`;
 tipAmountpra.innerHTML = `$${(priceOverpeople*percent).toFixed(2)}`;

}else{
totalAmountpra.innerHTML = '$0.00';
tipAmountpra.innerHTML = '$0.00';
}

if(price.value < 1){
 zeropra [0].style.display = 'block'
}else{
    zeropra[0].style.display = 'none'
}

if(people.value < 1){
 zeropra [1].style.display = 'block'
}else{
    zeropra[1].style.display = 'none'
}

}