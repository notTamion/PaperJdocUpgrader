if (window.location.href.startsWith("https://jd.papermc.io/paper/1.20")) {
    return;
}
window.location.replace(window.location.href.replace(/[0-9]*\.[0-9]+/i, "1.20"));