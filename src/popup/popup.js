document
    .querySelectorAll(".form-check-input")
    .forEach((checkboxNode) => {
    let inputId = checkboxNode.id;
    chrome.storage.local.get(inputId, (item) => {
        if (item[inputId]) {
            checkboxNode.checked = true;
        }
    });
});
document
    .querySelectorAll(".form-check-input")
    .forEach((item) => {
    item.addEventListener("change", (e) => {
        let target = e.target;
        let inputId = target.id;
        chrome.storage.local.set({ [inputId]: target.checked });
    });
});
