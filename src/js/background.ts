chrome.tabs.onUpdated.addListener((tabid, changeInfo, tab) => {
	if (tab.url.includes("://vk.com")) {
		chrome.action.setIcon({
			path: "../img/vk.png",
			tabId: tab.id,
		});

		chrome.action.enable(tab.id);
	}
});

chrome.tabs.onActivated.addListener((activeInfo) => {
	chrome.action.setIcon({
		path: "../img/vk_disabled.png",
	});

	chrome.action.disable();
});

//chrome.action.setIcon({
//	path: "../img/vk_disabled.png",
//});

//	if (!tab.url.includes("://vk.com")) {
//		chrome.action.disable(activeInfo.tabId);
//}

//});

//chrome.runtime.onInstalled.addListener((details) => {

//});

//chrome.action.setBadgeText({
//	text: "on",
//});

//chrome.tabs.query({ active: true, lastFocusedWindow: true }, (result) => {
//	//chrome.action.disable(result[0].id);
//	console.log(result[0].url);

//	//chrome.tabs.remove(result[0].id);
//	//window.close();
//});

//chrome.tabs.onActivated.addListener((info) => {

//});

//chrome.action.setIcon({
//	path: "../img/vk_disabled.png",
//	//@ts-ignore
//	tabId: chrome.tabs.getCurrent(),
//});

//chrome.tabs.getCurrent((tab: any) => {
//	console.log("hello");
//	console.log(tab);
//});
