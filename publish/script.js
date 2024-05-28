window.onload = function () {
  openingwindow();

  const openingwindow = () => {
    let element = document.getElementById("textjudul");
    if (element.classList.contains("animate__slideOutRight"))
      element.classList.remove("animate__slideOutRight");
    else {
      element.classList.add("animate__slideInLeft"); 
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

const text = "Hai semua saya Amri Firdaus,seorang Web developer";
let index = 0;
let speedketik = 100;

function ketik() {
  if (index < text.length) {
    document.getElementById("text-animasi").innerHTML += text.charAt(index);
    index++;
    setTimeout(ketik, speedketik);
  }
}

ketik();
