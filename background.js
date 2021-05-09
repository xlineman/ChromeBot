//Called When this extension is installed.
chrome.runtime.onInstalled.addListener(function() {
  console.log("runtime.onInstalled is catched.");
});

// Called When I click the Extension Icon.
chrome.action.onClicked.addListener(function (tab) { 
  chrome.tabs.create({url:"https://cryptoplace.cloud/cabinet/bonuses"});
});


function RunScriptInCryptoplace(tabId, url){
  if (url == "https://cryptoplace.cloud/")  {
    chrome.scripting.executeScript({target:{tabId: tabId}, files:['./scripts/cryptocloud_login_before.js']});
  }
  else if (url == "https://cryptoplace.cloud/#form-layer")  {
    chrome.scripting.executeScript({target:{tabId: tabId}, files:['./scripts/cryptocloud_login.js']});
  }
  else if (url == "https://cryptoplace.cloud/cabinet")  {
    chrome.scripting.executeScript({target:{tabId: tabId}, files:['./scripts/cryptocloud_cabinet.js']});
  }
  else if (url == "https://cryptoplace.cloud/cabinet/bonuses")  {
    chrome.scripting.executeScript({target:{tabId: tabId}, files:['./scripts/cryptocloud_bonuses.js']});
  }
}

// Called when url and status of the tab are changed.
function HandleUpdate(tabId, changeInfo, tab) {
  console.log("HandleUpdate, changeInfo = %o", changeInfo);
  if (changeInfo.status == "complete")
    RunScriptInCryptoplace(tabId, tab.url);
}

// Not Used
function HandleRemove(tabId, removeInfo) {
  
}

// Not Used
function HandleReplace(addedTabId, removedTabId) {
  console.log("HandleReplace, addedTabId = %d, removedTabId = %d", addedTabId, removedTabId);
  chrome.tabs.get(addedTabId, function(tab) {
    RunScriptInCryptoplace(tab.tabId, tab.url);
  });
}

chrome.tabs.onUpdated.addListener(HandleUpdate);
chrome.tabs.onRemoved.addListener(HandleRemove);
chrome.tabs.onReplaced.addListener(HandleReplace);
