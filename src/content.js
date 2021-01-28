const contentContainerCSS = `
.MainTable {
    width: 100% !important;
}
#b_s89_g89s90 {
    table-layout: auto !important;
}
`;

console.log(`Add DOMContentLoaded EventListener`);
document.addEventListener('DOMContentLoaded', loadEvent);

function loadEvent(event) {
    const documentUrl = document.URL;
    const eventFileName = getUrlFileName(documentUrl);
    const eventType = event.type;

    if (eventFileName.startsWith("ContentContainer.aspx") || eventFileName.startsWith("CopyContainer.aspx")) {
        if (correctURL){
            console.log(`Configured URL and current URL match, injecting CSS`);
            injectStyle(contentContainerCSS);
        }
    }
}

function injectStyle(styleData) {
    console.log(`Injecting custom CSS`);

    // Add the css to the new style tag, as a text node
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
    let UBWUrl = "UBW";
    if (item.UBWUrl) {
        UBWUrl = item.UBWUrl;
    }
    correctURL = (document.URL).includes(UBWUrl);
}

let getting = browser.storage.local.get("UBWUrl");
getting.then(onGot, onError);