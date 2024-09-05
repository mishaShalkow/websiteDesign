window.onload = function () {
  let headerMenuLink = [...document.getElementsByClassName("menu__link")];
  for (let i = 0; i < headerMenuLink.length; i++) {
    headerMenuLink[i].addEventListener("click", function (e) {
      e.preventDefault();
      headerMenuLink.forEach((link) => link.classList.remove("_active"));
      this.classList.add("_active");
    });
  }
};
