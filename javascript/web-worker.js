let i = 0;

(function stopwatch() {
    postMessage(i++);
    setTimeout(stopwatch, 1000);
}());
