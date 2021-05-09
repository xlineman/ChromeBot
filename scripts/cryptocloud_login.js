"use strict;"

let username = "xline.man2020@outlook.com";
let password = "DVCbckY8HtaXrMk";
var btnLogin = null;
var nInverval = 0;


// Find Login submit button
function GetLoginSubmitButton()
{
    var btns = document.querySelectorAll("button.btn.btn-style-form.w-100");
    for (let i = 0; i < btns.length; i++) {
        const btn = btns[i];
        if (btn.innerText == "Login") {
            btnLogin = btn;
        }
    }
}

// Input Username and password. Click Login.
function Login()
{
    document.getElementById('InputEmailIn').innetText = username;
    document.getElementById('InputPassword').innetText = password;
    btnLogin.click();
}


// Run until Login Button is visible.
function UntilLogin()
{
    var agotoLogin = document.getElementsByClassName('goLogin')[0];
    if (agotoLogin != null)
    {
        agotoLogin.click();
        GetLoginSubmitButton();
        if (btnLogin != null)
        {
            //clearInterval(nInverval);      //This IntervalFunction is unload when this tab update.
            Login();  
        }
    }
}


nInverval = setInterval(UntilLogin, 2000);
