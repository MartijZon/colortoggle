let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".side-bar");
    let getSidebarUL = document.querySelector(".side-bar ul");
    let getSidebarTitle = document.querySelector(".side-bar span");
    let getSidebarLink = document.querySelectorAll(".side-bar a");

    if (toggleNavStatus === false) {
        getSidebarUL.style.visibility = "visible";
        getSidebar.style.width = "250px";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLength = getSidebarLink.length;
        for (let i = 0; i < arrayLength; i++){
            getSidebarLink[i].style.opacity = "1";
        }
    toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = "0";

        let arrayLength = getSidebarLink.length;
        for (let i = 0; i < arrayLength; i++){
            getSidebarLink[i].style.opacity = "0";
        }

    getSidebarUL.style.visibility = "hidden";

    toggleNavStatus = false;
    }
}

function color(z) {
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    document.getElementsByTagName("body")[0].style.backgroundColor=b;
}