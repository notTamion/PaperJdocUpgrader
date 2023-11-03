if (window.location.href.startsWith("https://jd.papermc.io/paper/1.20")) {
    return;
}
let urlarray = window.location.href.replace("https://jd.papermc.io/paper/", "").split("/");
urlarray.shift();
window.location.replace("https://jd.papermc.io/paper/1.20/" + urlarray.join("/"));
