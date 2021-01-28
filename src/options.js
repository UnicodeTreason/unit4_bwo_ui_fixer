function saveOptions(e) {
    e.preventDefault();
    browser.storage.local.set({
        UBWUrl: document.querySelector("#UBWUrl").value
    });
}

function restoreOptions() {
    function setCurrentChoice(result) {
        document.querySelector("#UBWUrl").value = result.UBWUrl || "UBW";
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    let getting = browser.storage.local.get("UBWUrl");
    getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);