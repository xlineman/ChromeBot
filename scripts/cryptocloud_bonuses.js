
// Click Get Bonus Button
function clickGetBonuse(){
    
    var btnGetBonus = document.getElementById("get-bonus");
    if ((btnGetBonus != null) && (btnGetBonus.innerText.indexOf('bonus') > 0))
    {
        console.log("Click Get Bonus Button Really.");
        btnGetBonus.click();
    }
}


clickGetBonuse();
setInterval(clickGetBonuse, 10*1000);       //Click 10s
