
// TYPING ANIMATION

var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","UI/UX Designer"],
    typeSpeed:100,
    BackSpeed:40,
    loop:true
})


// ANIMATION

ScrollReveal(
    {
        reset: true,
        distance: '80px',
        duration: 2000,
        delay:20
    }
);

ScrollReveal().reveal(".section",{origin:'top'});
ScrollReveal().reveal(".section-title",{origin:'left'});
ScrollReveal().reveal(".progress-in",{origin:'left'});
ScrollReveal().reveal(".timeline",{origin:'bottom'});
ScrollReveal().reveal(".portfolio-item",{origin:'left'});
ScrollReveal().reveal(".contact",{origin:'top'});
ScrollReveal().reveal(".form-group",{origin:'left'});




// SEND DATA START

const Name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");



function save(Name,email,subject,message){
    const firebaseConfig = {
        apiKey: "AIzaSyCe-oUp7tgty-34j25bSOR-_LMG1MEjEZw",
        authDomain: "portfolio-enquiry-form.firebaseapp.com",
        databaseURL: "https://portfolio-enquiry-form-default-rtdb.firebaseio.com",
        projectId: "portfolio-enquiry-form",
        storageBucket: "portfolio-enquiry-form.appspot.com",
        messagingSenderId: "698838426098",
        appId: "1:698838426098:web:6791186381bc581c2fcb6b",
        measurementId: "G-W4912ZVG08"
      };

      firebase.initializeApp(firebaseConfig);
      const data = firebase.database().ref("EnquiryForm");

      var newId = data.push();

      newId.set(
        {
            Name : Name,
            email : email,
            subject : subject,
            message : message
        }
      );

}

function sendEmail(){
    save(Name.value,email.value,subject.value,message.value);
}

// SEND DATA END



let a = document.getElementById("2");
let b = document.getElementById("1");


a.onclick = function a() {
    a.classList.add("active");
    b.classList.remove("active");
}

const navItems = document.querySelector(".nav-item")

navItems.addEventListener("click",function(){
    
});