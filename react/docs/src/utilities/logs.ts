setTimeout(state, 2e3);

if (import.meta.env.VITE_LOG) {
    setTimeout(logs, 2e3);
}

function logs(): void {
    const text: any = document.getElementById('props');

    if (!text) return;

    for (let i = 0; i < text.attributes.length; i++) {
        console.log(`<${text.tagName.toLowerCase()}>`, text.attributes.item(i));
    }

    console.log(`<${text.tagName.toLowerCase()}>  `, text.textContent);
}

function state(): void {
    const queue: any = document.getElementById('state');

    if (!queue) return;
    queue.click();
}
