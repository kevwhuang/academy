const table = [
    { myId: 'App Code Name', Value: navigator.appCodeName },
    { myId: 'App Name', Value: navigator.appName },
    { myId: 'App Version', Value: navigator.appVersion },
    { myId: 'Cookie Enabled', Value: navigator.CookieEnabled },
    { myId: 'Geolocation', Value: navigator.geolocation },
    { myId: 'Java Enabled', Value: navigator.javaEnabled() },
    { myId: 'Language', Value: navigator.language },
    { myId: 'Online', Value: navigator.onLine },
    { myId: 'Platform', Value: navigator.platform },
    { myId: 'Product', Value: navigator.product },
    { myId: 'User Agent', Value: navigator.userAgent },
];
const transform = table.reduce((acc, { myId, ...x }) => { acc[myId] = x; return acc; }, {});

console.table(transform);

// =================================================================================================

const container = document.getElementsByClassName('container')[0];
const main = document.getElementsByTagName('main')[0];
const nav = document.getElementsByTagName('nav')[0];
const sect1 = document.getElementsByClassName('sect1')[0];
const sect2 = document.getElementsByClassName('sect2')[0];

nav.style.display = 'none';
sect1.style.display = 'block';
sect2.style.display = 'none';

function toggleNav() {
    if (nav.style.display === 'none') {
        nav.style.display = 'block';

        const heightNav = window.getComputedStyle(nav).getPropertyValue('height');
        const marginContainer = window.getComputedStyle(container).getPropertyValue('margin-top');
        const offset = parseFloat(heightNav.split('p')[0]) + parseFloat(marginContainer.split('p')[0]);

        main.style.marginTop = `${offset}px`;
    } else {
        main.style.marginTop = 0;
        nav.style.display = 'none';
    }

    scrollTo(0, 0);
}

function toggleSect() {
    if (sect1.style.display === 'none') {
        sect1.style.display = 'block';
        sect2.style.display = 'none';
    } else {
        sect1.style.display = 'none';
        sect2.style.display = 'block';
    }
}
