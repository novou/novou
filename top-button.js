(function () {
  var button = document.querySelector(".back-to-top");
  var threshold = 80;

  if (!button) {
    return;
  }

  function updateButton() {
    button.hidden = window.scrollY <= threshold;
  }

  button.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  window.addEventListener("scroll", updateButton, { passive: true });
  window.addEventListener("resize", updateButton);
  updateButton();
})();
