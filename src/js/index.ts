function startPage() {
	function updateOptionClass(state: boolean, label: string) {
		if (state) {
			document.getElementById("page_wrap").classList.add(`${label}-enable`);
		} else {
			document
				.getElementById("page_wrap")
				.classList.remove(`${label}-enable`);
		}
	}

	let checkboxLabels: string[] = [
		"ad-block-label",
		"recommendation-block-label",
		"copy-post-block-label",
	];

	checkboxLabels.forEach((label: string) => {
		chrome.storage.local.get(label, (item) => {
			if (!item[label] !== undefined) {
				chrome.storage.local.set({ [label]: true });
			}

			updateOptionClass(item[label], label);
		});
	});

	chrome.storage.onChanged.addListener((changes: any, areaName: string) => {
		for (let prop in changes) {
			updateOptionClass(changes[prop].newValue, prop);
			chrome.storage.local.set({ [prop]: changes[prop].newValue });
		}
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
}

startPage();

window.history.pushState = new Proxy(window.history.pushState, {
	apply: () => startPage(),
});
