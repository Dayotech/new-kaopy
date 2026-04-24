 // MOBILE MENU
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}


// WHATSAPP FORM
function sendWhatsApp(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let url = `https://wa.me/2348160690157?text=Hello, my name is ${name}. Phone: ${phone}. Message: ${message}`;
  window.open(url, "_blank");
}


// LIGHTBOX (CLICK IMAGE TO ZOOM)
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");
  const lightbox = document.getElementById("lightbox");
  const lightImg = document.getElementById("lightbox-img");

  if (!lightbox || !lightImg) return;

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightImg.src = img.src;
    });
  });
});

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}