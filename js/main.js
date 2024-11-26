// navbar.js
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('scrolled');
        }
    });
});



//button toggle navigation in smaller and medium screens

document.getElementById('menubar').addEventListener('click', function () {
  var dropdown = document.getElementById('menulist');
  
  // Toggle the display style between 'block' and 'none'
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'block';
  }
});


// -------------------------------------------------------------------

// numbers in services section 

let disvalue = document.querySelectorAll(".number_loaded");
let interval = 3500;

disvalue.forEach((validisplays) => {
    let startval = 0;
    let endval = parseInt(validisplays.getAttribute("data-value"));
    let stopValue = parseInt(validisplays.getAttribute("data-stop")); // Unique stop value for each element
    endval = Math.min(endval, stopValue); // Ensure endval does not exceed stopValue
    let duration = Math.floor(interval / endval);
    let counter = setInterval(function() {
        startval += 1;
        validisplays.textContent = startval;
        if (startval >= endval) {
            clearInterval(counter);
        }
    }, duration);
});


//----------------------------------------------------------------
//button let's talk

// Select the button and the contact section
let button = document.getElementById('AdamButton');
let contactSection = document.getElementById('contact');

// Function to scroll to the contact section
function scrollToContact() {
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Attach the scroll function to the button's click event
button.onclick = scrollToContact;
//--------------------------------------------------

//-------------contact us validation-----------

let userFirstNameInput = document.getElementById("firstName");
let userLastNameInput = document.getElementById("lastName");
let userEmailInput = document.getElementById("email");
let userSubInput = document.getElementById("subject");
let userPhoneInput = document.getElementById("phone");
let userUrlInput = document.getElementById("url");
let userMessageInput = document.getElementById("message");

let timesIconFirstName = document.getElementById("timesCircleFirstName");
let timesIconLastName = document.getElementById("timesCircleLastName");
let timesIconEmail = document.getElementById("timesCircleEmail");
let timesIconSub = document.getElementById("timesCircleSub");
let timesIconPhone = document.getElementById("timesCirclePhone");
let timesIconUrl = document.getElementById("timesCircleUrl");
let timesIconMess = document.getElementById("timesCircleMess");
let checkIcons = Array.from(document.querySelectorAll('.fa-circle-check'));

function validateFirstName() {
  let regexText = /^[a-zA-Z][a-zA-Z '.-]*[A-Za-z][^-]$/;
  if (regexText.test(userFirstNameInput.value) == true) {
    timesIconFirstName.nextElementSibling.classList.remove("d-none");
    timesIconFirstName.classList.add("d-none");
    return true;
  } else {
    timesIconFirstName.classList.remove("d-none");
    timesIconFirstName.nextElementSibling.classList.add("d-none");
    return false;
  }
}

function validateLastName() {
    let regexText = /^[a-zA-Z][a-zA-Z '.-]*[A-Za-z][^-]$/;
    if (regexText.test(userLastNameInput.value) == true) {
        timesIconLastName.nextElementSibling.classList.remove("d-none");
        timesIconLastName.classList.add("d-none");
      return true;
    } else {
        timesIconLastName.classList.remove("d-none");
        timesIconLastName.nextElementSibling.classList.add("d-none");
      return false;
    }
  }

function validateEmail() {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regexEmail.test(userEmailInput.value) == true) {
    timesIconEmail.nextElementSibling.classList.remove("d-none");
    timesIconEmail.classList.add("d-none");
    return true;
  } else {
    timesIconEmail.classList.remove("d-none");
    timesIconEmail.nextElementSibling.classList.add("d-none");
    return false;
  }
}
function validateSub() {
  let regexText = /^[a-zA-Z][a-zA-Z '.-]*[A-Za-z][^-]$/;
  if (regexText.test(userSubInput.value) == true) {
    timesIconSub.nextElementSibling.classList.remove("d-none");
    timesIconSub.classList.add("d-none");
    return true;
  } else {
    timesIconSub.classList.remove("d-none");
    timesIconSub.nextElementSibling.classList.add("d-none");
    return false;
  }
}

function validatePhone() {
    let regexPhone =/^01[0125][0-9]{8}$/ ;
    if (regexPhone.test(userPhoneInput.value) == true) {
        timesIconPhone.nextElementSibling.classList.remove("d-none");
        timesIconPhone.classList.add("d-none");
      return true;
    } else {
        timesIconPhone.classList.remove("d-none");
        timesIconPhone.nextElementSibling.classList.add("d-none");
      return false;
    }
  }

  function validateUrl() {
    let regexUrl = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/\S*)?$/;
    if (regexUrl.test(userUrlInput.value) == true) {
        timesIconUrl.nextElementSibling.classList.remove("d-none");
        timesIconUrl.classList.add("d-none");
      return true;
    } else {
        timesIconUrl.classList.remove("d-none");
        timesIconUrl.nextElementSibling.classList.add("d-none");
      return false;
    }
  }

function validateMessage() {
  let regexMessage = /^([A-z ]{3,200})$/;
  if (regexMessage.test(userMessageInput.value) == true) {
    timesIconMess.nextElementSibling.classList.remove("d-none");
    timesIconMess.classList.add("d-none");
    return true;
  } else {
    timesIconMess.classList.remove("d-none");
    timesIconMess.nextElementSibling.classList.add("d-none");
    return false;
  }
}
userFirstNameInput.addEventListener("keyup", function () {
    validateFirstName();
});
userLastNameInput.addEventListener("keyup", function () {
    validateLastName();
});
userEmailInput.addEventListener("keyup", function () {
  validateEmail();
});
userSubInput.addEventListener("keyup", function () {
  validateSub();
});
userPhoneInput.addEventListener("keyup", function () {
    validatePhone();
  });
userUrlInput.addEventListener("keyup", function () {
    validateUrl();
});  
userMessageInput.addEventListener("keyup", function () {
  validateMessage();
});
document.getElementById("send").addEventListener("click", function () {
  if (
    validateFirstName() == true &&
    validateLastName() == true &&
    validateEmail() == true &&
    validateSub() == true &&
    validatePhone() == true &&
    validateUrl() == true &&
    validateMessage() == true
  ) {
    send();
  }
});


   
