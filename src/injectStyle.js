
const contentContainerCSS = `
.MainTable {
    width: 100% !important;
}
#b_s89_g89s90 {
    table-layout: auto !important;
}
`;

document.addEventListener('DOMContentLoaded', loadEvent);

function loadEvent(event) {
    const documentUrl = document.URL;
    const eventType = event.type;

    const eventFileName = getUrlFileName(documentUrl);

    console.info("😎 loadEvent", eventType, eventFileName);

    // check we are on the correct page to inject css
    if (eventFileName.startsWith("ContentContainer.aspx")) {
        console.warn("on the ContentContainer!");
        injectStyle(contentContainerCSS);
    }

    if (eventFileName.startsWith("CopyContainer.aspx")) {
        console.warn("on the CopyContainer!");
        injectStyle(contentContainerCSS);
    }

}

function injectStyle(styleData) {
    console.log("injectStyle");

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
