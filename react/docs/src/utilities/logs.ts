setTimeout(logs, 1e3);
setTimeout(state, 1e3);

function logs(): void {
    const text: any = document.getElementById('text');

    if (!text || !import.meta.env.VITE_LOG) return;

    for (let i = 0; i < text.attributes.length; i++) {
        console.log(`<${text.tagName.toLowerCase()}>`, text.attributes.item(i));
    }

    console.log(`<${text.tagName.toLowerCase()}>  `, text.textContent);
}

function state(): void {
    const queue: any = document.getElementById('queue');

    if (!queue) return;
    queue.click();
}
