
// check untill we are on the correct page to inject css
if (document.URL.indexOf("ContentContainer.aspx") !== -1) {
    console.log("on the ContentContainer, injecting Unit4 css");

    const contentContainerCSS = `
        .MainTable {
            width: 100% !important;
        }
    `;

    const style = document.createElement('style');
    style.type = 'text/css';

    // add the css to the new style tag, as a text node
    style.appendChild(document.createTextNode(contentContainerCSS));

    document.head.appendChild(style);
}
