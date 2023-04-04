let allToggleNavbar = document.querySelectorAll('[data-toggle="navbar"]');
allToggleNavbar.forEach(btn => {
    btn.addEventListener("click", () => {
        let target = btn.dataset.target;
        let navbar = document.querySelector(target);
        let ul = navbar.querySelector("ul");
        if(ul.classList.contains("open")){
            ul.classList.remove("open");
        }
        else{
            ul.classList.add("open");
        }
    });
});