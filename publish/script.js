window.onload = function () {
  openingwindow();

  const openingwindow = () => {
    let element = document.getElementById("textjudul");
    if (element.classList.contains("animate__slideOutRight"))
      element.classList.remove("animate__slideOutRight");
    else {
      element.classList.add("animate__slideInLeft"); // Di sini, i-nya harus besar: animate__slideInLeft
    }
  };

  const closingwindow = () => {
    let element = document.getElementById("textjudul");
    if (element.classList.contains("animate__slideInLeft")) {
      element.classList.remove("animate__slideInLeft");
    } else {
      element.classList.add("animate__slideOutRight");
    }
  };

  document
    .getElementById("tautan1")
    .addEventListener("click", function (event) {
      event.preventDefault();

      closingwindow();

      setTimeout(function () {
        window.location.href = "Index.html";
      }, 1000);
    });

  document
    .getElementById("tautan2")
    .addEventListener("click", function (event) {
      event.preventDefault();

      closingwindow();

      setTimeout(function () {
        window.location.href = "koleksi.html";
      }, 1000);
    });

  document
    .getElementById("tautan3")
    .addEventListener("click", function (event) {
      event.preventDefault();

      closingwindow();

      setTimeout(function () {
        window.location.href = "kontak.html";
      }, 1000);
    });
};
