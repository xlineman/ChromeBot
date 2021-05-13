"use strict;"

let username = '';
let password = '';
let btnLogin = null;
let nInverval = 0;


// Find Login submit button
function GetLoginSubmitButton(){
    let btns = document.querySelectorAll("button.btn.btn-style-form.w-100");
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
    console.log('cyprtocloud_login');
    chrome.storage.local.get(['email', 'password'], (data) => {
        username = data.email;
        password = data.password;
      });

    let strjson = $('#login').serialize();
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
