let i = 0;

function stopwatch() {
    i++;
    postMessage(i);
    setTimeout(stopwatch, 1000);
}

stopwatch();
