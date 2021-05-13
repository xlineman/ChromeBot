"use strict;"
// Click Get Bonus Button
function clickGetBonus(){
    
    var btnGetBonus = document.getElementById("get-bonus");
    if ((btnGetBonus != null) && (btnGetBonus.innerText.indexOf('bonus') > 0))
    {
        console.log("Click 'Get Bonus' Button.");
        btnGetBonus.click();
    }
}


clickGetBonus();
setInterval(clickGetBonus, 10*1000);       //Attempt to Click Every 10s
