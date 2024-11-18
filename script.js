//dark/light mode
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () =>{
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
//weather api
const weatherAPIKey = 'YOUR_API_KEY';
const city = 'London';

function fetchWeather() {
  fetch(`http://dataservice.accuweather.com/alarms/v1/1day/{locationKey}`)
    .then((response) => response.json())
    .then((data) => {
      const temp = data.main.temp;
      const description = data.weather[0].description;
      document.getElementById('weather-info').innerHTML = `Temperature: ${temp}°C, ${description}`;
    })
    .catch((error) => console.error('Error fetching weather data:', error));
}

fetchWeather();


//for phone, etc
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-fa');
    navbar.classList.toggle('active');
}
 //FAQ
document.querySelectorAll('.accordion-header').forEach((header) => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('active');
    });
  });
  
  //rating
  document.querySelectorAll('.star').forEach((star) => {
    star.addEventListener('click', () => {
      const rating = star.getAttribute('data-value');
      document.getElementById('rating-result').textContent = rating;
      document.querySelectorAll('.star').forEach((s) => {
        s.classList.remove('selected');
        if (s.getAttribute('data-value') <= rating) {
          s.classList.add('selected');
        }
      });
    });
  });
  
  //popup
  const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

setTimeout(() => {
  popup.style.display = 'flex';
}, 2000);

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

document.getElementById('subscribe-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for subscribing!');
  popup.style.display = 'none';
});
//login/register
var log = document.getElementById("login");
        var reg = document.getElementById("register");
        var button = document.getElementById("btn");

        // Toggle between login and register forms
        function register(){
            log.style.left = "-400px";
            reg.style.left = "50px";
            button.style.left = "110px";
        }

        function login(){
            log.style.left = "50px";
            reg.style.left = "4550px";
            button.style.left = "0";
        }

        // Validation for Login Form
        function validateLogin() {
            var userId = document.getElementById('loginUserId').value;
            var password = document.getElementById('loginPassword').value;
            if (!userId || !password) {
                alert("Please fill in all fields.");
                return false;
            }
            // Add more specific validations as needed (e.g., regex for email)
            return true;
        }

        // Validation for Register Form
        function validateRegister() {
            var userId = document.getElementById('registerUserId').value;
            var email = document.getElementById('registerEmail').value;
            var password = document.getElementById('registerPassword').value;
            var confirmPassword = document.getElementById('confirmPassword').value;

            if (!userId || !email || !password || !confirmPassword) {
                alert("Please fill in all fields.");
                return false;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return false;
            }

            return true;
        }

