document
	.querySelectorAll(".form-check-input")
	.forEach((checkboxNode: HTMLInputElement) => {
		let inputId: string = checkboxNode.id;

		chrome.storage.local.get(inputId, (item: any) => {
			if (item[inputId]) {
				checkboxNode.checked = true;
			}
		});
	});

document
	.querySelectorAll(".form-check-input")
	.forEach((item: HTMLInputElement) => {
		item.addEventListener("change", (e: InputEvent) => {
			let target: HTMLInputElement = e.target as HTMLInputElement;
			let inputId: string = target.id;

			chrome.storage.local.set({ [inputId]: target.checked });
		});
	});
