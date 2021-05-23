"use strict;"

const CRYPTO_PLACE_DOMAIN = "https://cryptoplace.cloud";
let bEnableCryptoPlace = true;


//Called When this extension is installed.
chrome.runtime.onInstalled.addListener(function() {});

chrome.action.onClicked.addListener(function (){
  chrome.tabs.create({url:"https://cryptoplace.cloud/cabinet/bonuses"});
})


function RunScriptInCryptoplace(tabId, url){
  chrome.storage.local.get(['enable'], (data) => {
    bEnableCryptoPlace = data.enable; 
  });
  
  if (bEnableCryptoPlace && (url.indexOf(CRYPTO_PLACE_DOMAIN) >= 0)){
    if (url == CRYPTO_PLACE_DOMAIN + "/")  {
      chrome.scripting.executeScript({target:{tabId: tabId}, files:['./scripts/cryptocloud_login.js']});
    }
    else if (url == CRYPTO_PLACE_DOMAIN + "/cabinet/bonuses")  {
      chrome.scripting.executeScript({target:{tabId: tabId}, files:['./scripts/cryptocloud_bonuses.js']});
    }
    else if (url.indexOf(CRYPTO_PLACE_DOMAIN + "/cabinet") >= 0)  {
      chrome.scripting.executeScript({target:{tabId: tabId}, files:['./scripts/cryptocloud_cabinet.js']});
    }
    //else : In Progress to Sign in.
  }
}

// Called when url and status of the tab are changed.
function HandleUpdate(tabId, changeInfo, tab) {
  
  if (changeInfo.status == "complete"){
    RunScriptInCryptoplace(tabId, tab.url);
  }
}

// Not Used
function HandleRemove(tabId, removeInfo) {}

// Not Used
function HandleReplace(addedTabId, removedTabId) {
  chrome.tabs.get(addedTabId, function(tab) {
    RunScriptInCryptoplace(tab.tabId, tab.url);
  });
}

chrome.tabs.onUpdated.addListener(HandleUpdate);
chrome.tabs.onRemoved.addListener(HandleRemove);
chrome.tabs.onReplaced.addListener(HandleReplace);
