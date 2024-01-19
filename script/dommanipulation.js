
console.log("hii");
document.addEventListener("DOMContentLoaded", ()=> {

    let spec=document.getElementsByClassName("nav_item_specicon");
    console.log(spec[0])
    spec[0].onmouseover = function() {openMenu()};
    spec[0].onmouseout = function() {closeMenu()};
    function openMenu(){
        let menu = document.getElementsByClassName("hamburgerhoverhide");
        
        menu[0].classList.add("hamburgerhovershow")
        window.setTimeout(function(){
            menu[0].style.opacity = 1;
            menu[0].style.transform = 'scale(1)';
          },0);
        console.log("hii");
    }   
    function closeMenu(){
        let menu = document.getElementsByClassName("hamburgerhoverhide");
        window.setTimeout(function(){
            menu[0].style.opacity = 1;
            menu[0].style.transform = 'scale(0)';
          },0);
        menu[0].classList.remove("hamburgerhovershow")
    }


    let anouncment=document.getElementsByClassName("announcements");
    anouncment[0].onmouseover = function() {openMenu2()};
    anouncment[0].onmouseout = function() {closeMenu2()};
    function openMenu2(){
        let menu = document.getElementsByClassName("announcementshoverhide");        
        menu[0].classList.add("announcementshovershow")
        window.setTimeout(function(){
            menu[0].style.opacity = 1;
            menu[0].style.transform = 'scale(1)';
          },0);
        console.log("hii");
    }   
    function closeMenu2(){
        let menu = document.getElementsByClassName("announcementshoverhide");
        window.setTimeout(function(){
            menu[0].style.opacity = 1;
            menu[0].style.transform = 'scale(0)';
          },0);
        menu[0].classList.remove("announcementshovershow")
    }


    let noti=document.getElementsByClassName("notification");

    noti[0].onmouseover = function() {openMenu3()};
    noti[0].onmouseout = function() {closeMenu3()};
    function openMenu3(){
        let menu = document.getElementsByClassName("notificationhoverhide");
        
        menu[0].classList.add("notificationhovershow")
        
        window.setTimeout(function(){
            menu[0].style.opacity = 1;
            menu[0].style.transform = 'scale(1)';
          },0);
        console.log("hii");
    }   
    function closeMenu3(){
        let menu = document.getElementsByClassName("notificationhoverhide");
        window.setTimeout(function(){
            menu[0].style.opacity = 1;
            menu[0].style.transform = 'scale(0)';
          },0);

        menu[0].classList.remove("notificationhovershow")

    }
})







