"use strict;"

let username = "xline.man2020@outlook.com";
let password = "DVCbckY8HtaXrMk";
var btnLogin = null;
var nInverval = 0;



function GetLoginSubmitButton()
{
    var btns = document.querySelectorAll("button.btn.btn-style-form.w-100");
    for (let i = 0; i < btns.length; i++) {
        const btn = btns[i];
        if (btn.innerText == "Login"){btnLogin = btn}
    }
}

function Login()
{
    console.log("cryptocloud_login_Login_1");
    setTimeout(GetLoginSubmitButton, 1000);
    console.log("cryptocloud_login_Login_2");
    while (btnLogin == null)
    {
        setTimeout(GetLoginSubmitButton, 3000);
        console.log("cryptocloud_login_Login_3");
    }

    //This loop is automatically removed when the page is redirected.

    console.log("cryptocloud_login_Login_4");
    document.getElementById('InputEmailIn').innetText = username;
    document.getElementById('InputPassword').innetText = password;
    btnLogin.click();

    console.log("cryptocloud_login_Login_5");
}


function UntilLogin()
{
    console.log("cryptocloud_login_clickgoLogin_1");
    var agotoLogin = document.getElementsByClassName('goLogin')[0];
    if (agotoLogin != null)
    {
        console.log("cryptocloud_login_clickgoLogin_2");
        agotoLogin.click();
        GetLoginSubmitButton();
        if (btnLogin != null)
        {
            clearInterval(nInverval);      
            Login();  
        }
    }
    console.log("cryptocloud_login_clickgoLogin_3");
}


console.log("cryptocloud_login_1");
nInverval = setInterval(UntilLogin, 2000);
