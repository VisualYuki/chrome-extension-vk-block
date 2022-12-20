function startPage() {
    function updateOptionClass(state, label) {
        if (state) {
            document.getElementById("page_wrap").classList.add(`${label}-enable`);
        }
        else {
            document
                .getElementById("page_wrap")
                .classList.remove(`${label}-enable`);
        }
    }
    let checkboxLabels = [
        "ad-block-label",
        "recommendation-block-label",
        "copy-post-block-label",
    ];
    checkboxLabels.forEach((label) => {
        chrome.storage.local.get(label, (item) => {
            if (!item[label] !== undefined) {
                chrome.storage.local.set({ [label]: true });
            }
            updateOptionClass(item[label], label);
        });
    });
    chrome.storage.onChanged.addListener((changes, areaName) => {
        for (let prop in changes) {
            updateOptionClass(changes[prop].newValue, prop);
            chrome.storage.local.set({ [prop]: changes[prop].newValue });
        }
    });
}
startPage();
window.history.pushState = new Proxy(window.history.pushState, {
    apply: () => startPage(),
});
//const observer = new MutationObserver((mutations) => {
//	mutations.forEach(function (mutation) {
//		mutation.addedNodes.forEach((item: HTMLElement) => {
//			if (item.querySelectorAll(".wall_marked_as_ads").length) {
//				item.id = "display-none";
//			}
//		});
//	});
//});
//observer.observe(document.getElementById("feed_rows"), {
//	childList: true,
//});
//chrome.tabs.query({ currentWindow: true, active: true }, (result) => {
//	//chrome.action.disable(result[0].id);
//	console.log(result);
//	//chrome.tabs.remove(result[0].id);
//	//window.close();
//});
