"use strict;"

let username = "xline.man2020@outlook.com";
let password = "DVCbckY8HtaXrMk";
var btnLogin = null;
var nInverval = 0;


// Find Login submit button
function GetLoginSubmitButton(){
    var btns = document.querySelectorAll("button.btn.btn-style-form.w-100");
    for (let i = 0; i < btns.length; i++) {
        const btn = btns[i];
        if (btn.innerText == "Login") {
            btnLogin = btn;
        }
    }
}


// Run until Login Button is visible.
function UntilLogin()
{
    var strjson = $('#login').serialize();
    console.log(strjson);
    console.log(encodeURIComponent(username));
    if (strjson.indexOf(encodeURIComponent(username)) > 0) {
        GetLoginSubmitButton();
        btnLogin.click();
        clearInterval(nInverval);
    }
    else{
        $("a.goLogin")[0].click();
        $('#InputEmailIn').val(username);
        $('#InputPassword').val(password);
    }
    
}

$("a.goLogin")[0].click();
nInverval = setInterval(UntilLogin, 2000);
