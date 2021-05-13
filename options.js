"use strict;"

let inputEmail = document.getElementById('cryptoplace_email');
let inputPassword = document.getElementById('cryptoplace_password');
let inputEnable = document.getElementById('cryptoplace_enable');
//let buttonStart = document.getElementById('start_bot');


const InitializeData = function (e)
{
  //console.log("InitializeData");
  chrome.storage.local.get(['email', 'password', 'enable'], (data) => {
    inputEmail.value = data.email;
    inputPassword.value = data.password;
    inputEnable.checked = data.enable; 
  });
}

const enableClick = function(e) {
  
  chrome.storage.local.set({enable:inputEnable.checked});

  // if (inputEnable.checked){
  //   buttonStart.style.visibility = 'visible';
  // } else{
  //   buttonStart.style.visibility = 'hidden';
  // }

}
const emailChanger = function(e) {
  chrome.storage.local.set({'email':inputEmail.value});
}

const passwordChanger = function(e) {
  chrome.storage.local.set({password:inputPassword.value});
}

const StartClick = function(e) {
    chrome.tabs.create({url:"https://cryptoplace.cloud/cabinet/bonuses"});
}

document.addEventListener('DOMContentLoaded', InitializeData);
//buttonStart.addEventListener('click', StartClick);
inputEnable.addEventListener('click', enableClick);
inputEmail.addEventListener('input', emailChanger);
inputEmail.addEventListener('propertychange', emailChanger); // for IE8
inputPassword.addEventListener('input', passwordChanger);
inputPassword.addEventListener('propertychange', passwordChanger); // for IE8