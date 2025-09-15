// Set Year
document.getElementById('year').textContent = new Date().getFullYear();

// Dark/Light toggle
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  if(document.body.getAttribute('data-theme')==='dark'){
    document.body.setAttribute('data-theme','light');
    toggle.textContent = '🌞';
  } else {
    document.body.setAttribute('data-theme','dark');
    toggle.textContent = '🌙';
  }
});

// EmailJS Contact Form
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  emailjs.sendForm("service_mzl0d4j", "template_76sklss", this)
  .then(() => {
    alert("✅ Message sent successfully!");
    this.reset();
  }, (err) => {
    alert("❌ Failed to send: " + JSON.stringify(err));
  });
});

// Slider Auto Switch
const slider = document.getElementById("slider");
if (slider) {
  let index = 0;
  const slides = slider.querySelectorAll("img");

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000); // 3 seconds interval
}


// ===============================
// Hero Image Cycle (Profile Images)
// ===============================
const cycleContainer = document.querySelector(".image-cycle");
if (cycleContainer) {
  let images = cycleContainer.querySelectorAll("img");
  let cycleIndex = 0;

  setInterval(() => {
    images[cycleIndex].classList.remove("active");
    cycleIndex = (cycleIndex + 1) % images.length;
    images[cycleIndex].classList.add("active");
  }, 4000); // 4 seconds interval
}

