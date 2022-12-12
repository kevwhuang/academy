let i = 0;

function stopwatch() {
    i += 1;
    postMessage(i);
    setTimeout('stopwatch()', 1000);
}

stopwatch();
