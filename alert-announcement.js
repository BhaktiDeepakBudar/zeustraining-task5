let speakericon = document.querySelector(".microphone");
let announcementli = document.querySelector(".announcement-noti");
let announcement_container = [...document.querySelectorAll(".announcement--container")];
let dropdowns_content_container = [...document.querySelectorAll(".announcement-content-container")]

speakericon.addEventListener("mouseover", (e) => {
    announcement_container[1].classList.add("announcements--container--dropdown");
});
speakericon.addEventListener("mouseout", (e) => {
    announcement_container[1].classList.remove("announcements--container--dropdown")
});

announcement_container[1].addEventListener("mouseover", (e) => {
    announcement_container[1].classList.add("announcements--container--dropdown");
});
announcement_container[1].addEventListener("mouseout", (e) => {
    announcement_container[1].classList.remove("announcements--container--dropdown")
});
const announcements = [];
let allannouncement = "";
for(let ele of announcements){
    allannouncement += ele;
}
dropdowns_content_container[1].insertAdjacentHTML('afterbegin', allannouncement);

//For NOtifications
let bellicon = document.querySelector(".bell-svg");
let bellInList = document.querySelector(".bell-option");
bellicon.addEventListener("mouseover", (e) => {
    announcement_container[0].classList.add("announcements--container--dropdown");
});
bellicon.addEventListener("mouseleave", (e)=> {
    announcement_container[0].classList.remove("announcements--container--dropdown");
});
announcement_container[0].addEventListener("mouseover", (e) => {
    announcement_container[0].classList.add("announcements--container--dropdown");
});
announcement_container[0].addEventListener("mouseleave", (e)=> {
    announcement_container[0].classList.remove("announcements--container--dropdown");
});
const notifications = [];
let allNotifications = "";
for(let obj of notifications){
    allNotifications+=obj;
}
dropdowns_content_container[0].insertAdjacentHTML('afterbegin', allNotifications);