let urlarray = window.location.href.replace("https://hub.spigotmc.org/javadocs/", "").split("/");
urlarray.shift();
window.location.href = "https://jd.papermc.io/paper/1.20/" + urlarray.join("/");