
// Click Get Bonus Button
function clickGetBonuse(){
    console.log("Click Get Bonus Button.");
    var btnGetBonus = document.getElementById("get-bonus");
    if (btnGetBonus != null)
    {
        console.log("Click Get Bonus Button Really.");
        btnGetBonus.click();
    }
}


clickGetBonuse();
setInterval(clickGetBonuse, 60*1000);       //Click every minutes
