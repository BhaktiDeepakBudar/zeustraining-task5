const hamburger = document.querySelector("#btn-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const more = [...document.querySelectorAll(".expand-more")];
const less = [...document.querySelectorAll(".expand-less")];

let isMenuVisible = false;
hamburger.addEventListener('mouseover', (event) => {
    mobileMenu.classList.add('active');
});
mobileMenu.addEventListener('mouseover', (event) => {
    mobileMenu.classList.add('active');
});
hamburger.addEventListener('mouseout', (event) => {
    if(!isMenuVisible){
        mobileMenu.classList.remove('active');
    }
});
mobileMenu.addEventListener('mouseout', (event) => {
    if(!isMenuVisible){
        mobileMenu.classList.remove('active');
    }
});

more.forEach(function (expand_more) {
    expand_more.addEventListener("click", function (e) {
        var _a;
        expand_more.classList.toggle("hide-it");
        const expand_less = expand_more.nextElementSibling;
        expand_less === null || expand_less === void 0 ? void 0 : expand_less.classList.toggle("hide-it");
        const expandParent = expand_more.parentElement;
        if (expandParent) {
            expandParent.style.backgroundColor = "#f3f3f3";
        }
        const hiddenContent = (_a = expand_more.parentElement) === null || _a === void 0 ? void 0 : _a.nextElementSibling;
        if (hiddenContent) {
            hiddenContent.style.display = "block";
        }
    });
});
less.forEach(function (expand_less) {
    expand_less.addEventListener("click", function (e) {
        var _a;
        expand_less.classList.toggle("hide-it");
        const expand_more = expand_less.previousElementSibling;
        expand_more === null || expand_more === void 0 ? void 0 : expand_more.classList.toggle("hide-it");
        const expandParent = expand_less.parentElement;
        if (expandParent) {
            expandParent.style.backgroundColor = "#ffffff";
        }
        const hiddenContent = (_a = expand_less.parentElement) === null || _a === void 0 ? void 0 : _a.nextElementSibling;
        if (hiddenContent) {
            hiddenContent.style.display = "none";
        }
    });
});