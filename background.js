chrome.runtime.onInstalled.addListener(function() {
  console.log("runtime.onInstalled is catched.");
});

chrome.action.onClicked.addListener(function (tab) { 
  chrome.tabs.create({url:"https://cryptoplace.cloud/cabinet/bonuses"});
});

function RunScriptInCryptoplace(tabId, url)
{
  console.log("RunScriptInCryptoplace_1, url = %s, tabId = %d", url, tabId);

  if (url == "https://cryptoplace.cloud/")
  {
    console.log("RunScriptInCryptoplace_2");
    chrome.scripting.executeScript({target:{tabId: tabId}, files:['./scripts/cryptocloud_login_before.js']});
  }
  else if (url == "https://cryptoplace.cloud/#form-layer")
  {
    console.log("RunScriptInCryptoplace_3");
    chrome.scripting.executeScript({target:{tabId: tabId}, files:['./scripts/cryptocloud_login.js']});
  }
  else if (url == "https://cryptoplace.cloud/cabinet")
  {
    console.log("RunScriptInCryptoplace_4");
    chrome.scripting.executeScript({target:{tabId: tabId}, files:['./scripts/cryptocloud_cabinet.js']});
  }
  else if (url == "https://cryptoplace.cloud/cabinet/bonuses")
  {
    console.log("RunScriptInCryptoplace_5");
    chrome.scripting.executeScript({target:{tabId: tabId}, files:['./scripts/cryptocloud_bonuses.js']});
  }

}

function HandleUpdate(tabId, changeInfo, tab) {
  console.log("HandleUpdate, changeInfo = %o", changeInfo);
  if (changeInfo.status == "complete")
    RunScriptInCryptoplace(tabId, tab.url);
}

function HandleRemove(tabId, removeInfo) {
  
}

function HandleReplace(addedTabId, removedTabId) {
  console.log("HandleReplace, addedTabId = %d, removedTabId = %d", addedTabId, removedTabId);
  chrome.tabs.get(addedTabId, function(tab) {
    RunScriptInCryptoplace(tab.tabId, tab.url);
  });
}




chrome.tabs.onUpdated.addListener(HandleUpdate);
chrome.tabs.onRemoved.addListener(HandleRemove);
chrome.tabs.onReplaced.addListener(HandleReplace);
