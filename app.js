// targeting
const menu = document.querySelector('#mobile_menu')
const menuLinks = document.querySelector('.navbar__menu')

// function to display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is_active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// function myFunction() {
//     var x = document.getElementById("navbar__container");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

// Contact Form

// const form = document.querySelector("form");


// Username
// chencindy.1206@gmail.com
// Password
// 3AF2AAE19BA621FDD17A6BF753C68091E238
// Server
// smtp.elasticemail.com
// Port
// 2525
// security token
// 21182581-742c-43e1-983b-35aeba754aed
// const form = document.querySelector("form");
// const input_name = document.getElementById("name");
// const email = document.getElementById("email");
// const subject = document.getElementById("subject");
// const message = document.getElementById("message");
// const submit = document.getElementsByClassName("contact_form")[0];

// submit.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("Clicked");
//     Email.send({
//         SecureToken : "21182581-742c-43e1-983b-35aeba754aed",
//         To : 'chencindy.1206@gmail.com',
//         From : "chencindy.1206@gmail.com",
//         Subject : "New Inquiry from " + subject.value,
//         Body : "Test"
//     }).then(
//         message => alert(message)
//     );
// });


// function sendEmail() {

//     Email.send({
//         SecureToken : "21182581-742c-43e1-983b-35aeba754aed",
//         To : 'chencindy.1206@gmail.com',
//         From : "chencindy.1206@gmail.com",
//         Subject : "New Inquiry from " + subject.value,
//         Body : "Name: " + input_name.vaule
//         + "<br> Email: " + email.value
//         + "<br> Subject: " + subject.value
//         + "<br> Message: " + message.value
//     }).then(
//       message => alert(message)
//     );

    // Email.send({
    //     Host : "smtp.elasticemail.com",
    //     Username : "chencindy.1206@gmail.com",
    //     Password : "3AF2AAE19BA621FDD17A6BF753C68091E238",
    //     To : 'chencindy.1206@gmail.com',
    //     From : "chencindy.1206@gmail.com",
    //     Subject : "New Inquiry from " + document.getElementById("name").value
    //     + "- " + document.getElementById("subject").value,
    //     Body : "Name: " + document.getElementById("name").value
    //     + "<br> Email: " + document.getElementById("email").value
    //     + "<br> Subject: " + document.getElementById("subject").value
    //     + "<br> Message: " + document.getElementById("message").value,
    // }).then(
    //   message => alert(message)
    // );
// }