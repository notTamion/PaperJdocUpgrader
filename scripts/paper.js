if (!window.location.href.startsWith("https://jd.papermc.io/paper/1.20")) {
    let urlarray = window.location.href.replace("https://jd.papermc.io/paper/", "").split("/");
    urlarray.shift();
    window.location.href = "https://jd.papermc.io/paper/1.20/" + urlarray.join("/");
}
