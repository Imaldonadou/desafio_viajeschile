// scroll 
window.addEventListener("scroll", () => {
    const nav = document.getElementById('nav');
    (window.scrollY > 40)
      ? nav.classList.add("bg-dark")
      : nav.classList.remove("bg-dark")
  })
  