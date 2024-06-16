// Hamburger Menu
const menu = document.querySelector("#menu");
const nav = document.querySelector("#topBar");
const profileImage = document.querySelector("#profileImage");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Scrolling

window.addEventListener("scroll", function () {
    let header = document.querySelector("nav");
    header.classList.toggle("scrolling", window.scrollY > 0);
});

// Modal

const cards = document.querySelectorAll(".cardModal");

const modal = document.querySelector("#modal");
const titelModal = document.querySelector("#titleModal");
const iconModal = document.querySelectorAll(".iconModal");
const cardModal = document.querySelectorAll(".cardModal");
const subtitleModal = document.querySelectorAll(".subtitleModal");

function showModal(num) {
    modal.style.display = "flex";

    if (num === 1) {
        titelModal.innerHTML = "Front-end";
        iconModal[0].src = "assets/images/react-icon.svg";
        cardModal[0].title = "ReactJS";
        subtitleModal[0].innerHTML = "ReactJS";

        iconModal[1].src = "assets/images/typescript-icon.svg";
        cardModal[1].title = "TypeScript";
        subtitleModal[1].innerHTML = "TypeScript";

        iconModal[2].src = "assets/images/tailwind-icon.svg";
        cardModal[2].title = "Tailwindcss";
        subtitleModal[2].innerHTML = "Tailwindcss";

        iconModal[3].src = "assets/images/html-icon.svg";
        cardModal[3].title = "HTML";
        subtitleModal[3].innerHTML = "HTML";

        iconModal[4].src = "assets/images/javascript-icon.svg";
        cardModal[4].title = "JavaScript";
        subtitleModal[4].innerHTML = "JavaScript";
    } else if (num === 2) {
        titelModal.innerHTML = "Back-end";
        iconModal[0].src = "assets/images/python-icon.svg";
        cardModal[0].title = "Python";
        subtitleModal[0].innerHTML = "Python";

        iconModal[1].src = "assets/images/django-icon.svg";
        cardModal[1].title = "Django";
        subtitleModal[1].innerHTML = "Django";

        iconModal[2].src = "assets/images/mongodb-icon.png";
        cardModal[2].title = "MondoDB";
        subtitleModal[2].innerHTML = "MondoDB";

        iconModal[3].src = "assets/images/mysql-icon.svg";
        cardModal[3].title = "MySQL";
        subtitleModal[3].innerHTML = "MySQL";
        
        cards[4].style.display = "none";
    } else {
        titelModal.innerHTML = "Cloud";
        iconModal[0].src = "assets/images/googleCloud-icon.svg";
        cardModal[0].title = "Google CLoud";
        subtitleModal[0].innerHTML = "Google CLoud";

        iconModal[1].src = "assets/images/azure-icon.svg";
        cardModal[1].title = "Azure";
        subtitleModal[1].innerHTML = "Azure";

        iconModal[2].src = "assets/images/aws-icon.svg";
        cardModal[2].title = "AWS";
        subtitleModal[2].innerHTML = "AWS";

        cards[3].style.display = "none";
        cards[4].style.display = "none";
    }
}

function hideModal() {
    modal.style.display = "none";
    cards[3].style.display = "flex";
    cards[4].style.display = "flex";
}

// Copy Email

function copyEmail() {
    navigator.clipboard.writeText("timeset13@outlook.com")
}