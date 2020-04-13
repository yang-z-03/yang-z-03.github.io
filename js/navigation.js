function global_nav_click(e) {
    gnav_clearall();
    e.parentNode.setAttribute("class", "Gnav-menu-item has-submenu is-open");
    e.setAttribute("aria-expanded", "True");
}

function gnav_clearall() {
    var start = document.getElementById("gnav.start");
    start.parentNode.setAttribute("class", "Gnav-menu-item has-submenu");
    start.setAttribute("aria-expanded", "False");

    var olink = document.getElementById("gnav.olink");
    olink.parentNode.setAttribute("class", "Gnav-menu-item has-submenu");
    olink.setAttribute("aria-expanded", "False");

    var page = document.getElementById("gnav.page");
    page.parentNode.setAttribute("class", "Gnav-menu-item has-submenu");
    page.setAttribute("aria-expanded", "False");

    var help = document.getElementById("gnav.help");
    help.parentNode.setAttribute("class", "Gnav-menu-item has-submenu");
    help.setAttribute("aria-expanded", "False");

    var tool = document.getElementById("gnav.tool");
    tool.parentNode.setAttribute("class", "Gnav-menu-item has-submenu");
    tool.setAttribute("aria-expanded", "False");
}