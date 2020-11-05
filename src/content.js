const contentContainerCSS = `
.MainTable {
    width: 100% !important;
}
#b_s89_g89s90 {
    table-layout: auto !important;
}
`;

console.log("🤫 adding Unit4UIFixer listenerz");
document.addEventListener('DOMContentLoaded', loadEvent);

function loadEvent(event) {
    const documentUrl = document.URL;
    const eventFileName = getUrlFileName(documentUrl);
    const eventType = event.type;

    if (eventFileName.startsWith("ContentContainer.aspx") || eventFileName.startsWith("CopyContainer.aspx")) {
        console.info("😎 injecting Unit4UIFixer CSS on", eventFileName, eventType);
        injectStyle(contentContainerCSS);
    }
}

function injectStyle(styleData) {
    console.log("🚀 Unit4UIFixer injectStyle");

    // add the css to the new style tag, as a text node
    const style = document.createElement('style');
    style.id = 'unit4_style';
    style.type = 'text/css';
    style.rel = "stylesheet";
    style.appendChild(document.createTextNode(styleData));

    document.head.appendChild(style);
}

function getUrlFileName(url) {
    return url.replace(/\?.*$/, '').split('/').pop();
}

function onError(error) {
    console.log(`Error: ${error}`);
}

function onGot(item) {
    let color = "DEFAULTURL2";
    if (item.color) {
        color = item.color;
    }
    var settingsURL = color;
    console.log(`SettingsURL: ${color}`);
    console.log(`URL: ${document.URL}`);
    var res = /UBW/.test(document.URL);
    console.log(`res: ${res}`);
}

let getting = browser.storage.local.get("color");
getting.then(onGot, onError);