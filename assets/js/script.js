// scroll 
window.addEventListener("scroll", () => {
    const nav = document.getElementById('nav');
    (window.scrollY > 40)
      ? nav.classList.add("bg-dark")
      : nav.classList.remove("bg-dark")
  })
  
  // form submit
document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();
  const date = new Date(Date.now());
  const popup = document.getElementById('popup');
  document.getElementById("date").textContent = date.toLocaleString();
  const toast = bootstrap.Toast.getOrCreateInstance(popup);
  toast.show()
  setTimeout(() => {
      toast.hide()
  }, 2500)
  e.target.reset();
})
$(document).ready(function () {
  // habilitar todos los tooltip de bootstrap
  $('[data-bs-toggle="tooltip"]').tooltip()
})

