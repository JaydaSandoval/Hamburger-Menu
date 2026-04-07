//Hamburger Menu
function toggleMenu(){
    var menu = document.getElementById('menuItems');
    if(menu.style.display === "display"){
        menu.style.display - "none";
    }else{
        menu.style.display = "block";
    }
}