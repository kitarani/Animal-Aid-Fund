 // Authentication
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const isAuthenticated = localStorage.getItem("isAuthenticated");

if (isAuthenticated) showLogout();
else showLogin();

loginBtn.addEventListener("click", () => {
    localStorage.setItem("isAuthenticated", true);
    showLogout();
});

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("isAuthenticated");
    showLogin();
});

function showLogin() {
    loginBtn.style.display = "inline";
    logoutBtn.style.display = "none";
}

function showLogout() {
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline";
}

// Theme Toggle
const body = document.body;
const themeToggleBtn = document.getElementById('themeToggleBtn');
const theme = localStorage.getItem("theme") || "day-mode";
body.classList.add(theme);

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('day-mode');
    body.classList.toggle('night-mode');
    localStorage.setItem("theme", body.classList.contains('night-mode') ? 'night-mode' : 'day-mode');
    themeToggleBtn.textContent = body.classList.contains('night-mode') ? 'Switch to Day Mode' : 'Switch to Night Mode';
});

 //keyboard
 const menuItems = document.querySelectorAll('.menu-item');

 document.addEventListener('keydown', (event) => {
     let focusedIndex = Array.from(menuItems).indexOf(document.activeElement);

     if (event.key === 'ArrowDown') {
         focusedIndex = (focusedIndex + 1) % menuItems.length;
     } else if (event.key === 'ArrowUp') {
         focusedIndex = (focusedIndex - 1 + menuItems.length) % menuItems.length;
     }

     menuItems[focusedIndex].focus();
 });

//stars
const stars = document.querySelectorAll('.star');
const ratingMessage = document.getElementById('ratingMessage');

stars.forEach((star, index) => {
 star.addEventListener('click', () => {
     stars.forEach(s => s.classList.remove('selected'));
     for (let i = 0; i <= index; i++) {
         stars[i].classList.add('selected');
     }
     ratingMessage.textContent = `You rated us ${index + 1} out of 5 stars!`;
 });
});
//popup
const popupForm = document.getElementById('popupForm');
const openPopup = document.getElementById('openPopup');

openPopup.addEventListener('click', () => {
 popupForm.style.display = 'flex';
});

function closePopup() {
 popupForm.style.display = 'none';
}

window.onclick = function(event) {
 if (event.target == popupForm) {
     popupForm.style.display = 'none';
 }
}
//date display
const timeButton = document.getElementById('timeButton');
 const timeDisplay = document.getElementById('timeDisplay');
 timeButton.addEventListener('click', () => {
     const currentTime = new Date().toLocaleTimeString();
     timeDisplay.textContent = `Current time is: ${currentTime}`;
 });
//accordion
function toggleAccordion(element) {
 const body = element.nextElementSibling;
 if (body.style.display === 'block') {
     body.style.display = 'none';
 } else {
     body.style.display = 'block';
 }
}

//random facts
const facts = [
         "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still perfectly edible.",
         "Octopuses have three hearts and blue blood.",
         "Bananas are berries, but strawberries aren’t.",
         "A group of flamingos is called a 'flamboyance'.",
         "The Eiffel Tower can be 15 cm taller during the summer due to the expansion of iron in heat."
     ];

     
     const contentArea = document.querySelector('#contentArea');
     const factButton = document.querySelector('#factButton');

     
     function displayRandomFact() {
         const randomIndex = Math.floor(Math.random() * facts.length);
         const randomFact = facts[randomIndex];
         contentArea.innerHTML = `<p>${randomFact}</p>`;
     }

     factButton.addEventListener('click', displayRandomFact);


//signUp form
document.getElementById('signupForm').addEventListener('submit', function (e){
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('nameError');
    let passwordError = document.getElementById('passwordError');
    let confirmPasswordError = document.getElementById('confirmPasswordError');

    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    let isValid = true;

    if (name.trim() === ''){
        nameError.textContent = 'Name is required.';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
        emailError.textContent = 'Invalid email format.';
        isValid = false;
    }

    if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    }

    if (password !== confirmPassword) {
        confirmPassword.textContent = 'Passwords do not match.';
        isValid = false;
    }

    if (isValid) {
        alert('Sign Up succesful!');
    }
}); 


//backgroundcolor
function myFunction(){
    document.body.style.background = "#ffbefe";
}