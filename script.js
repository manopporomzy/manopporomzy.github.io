function openMenu(menu) {
    var i;
    var x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(menu).style.display = "block";
}