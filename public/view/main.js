"use strict";
///////////////////////////////// SLIDER

// document.addEventListener("DOMContentLoaded", () => {
const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");
let currentIndex = 0;
const totalSlides = slides.length;

function updateSlider() {
  const slideWidth = 25;

  if (currentIndex >= totalSlides - 4) {
    currentIndex = 0; // возврат
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - 4; // конец
  }
  sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  updateSlider();
});

///////////////////////////////// NEKO.BEST API

const heterochromia = document.getElementById("#cat_heterochromia");
const catgirl = document.getElementById("#cat_catgirl");
const foxgirl = document.getElementById("#cat_foxgirl");
const blonde = document.getElementById("#cat_blonde");
const imageContainer = document.querySelector(
  ".recent_image_description_container"
);
const descriptionContainer = document.getElementById("#descriptionContainer");

async function nekoFetch(category) {
  try {
    const data = fetch(`https://nekos.best/api/v2/${category}`, {
      method: "GET",
    });
    const info = await data.json();
    isRendered();
    renderImage(info.results[0].url);
    renderDescription(info.results[0].artist_name, info.results[0].artist_href);
  } catch (error) {
    console.error("Ошибка поймана:", error);
  }
}

function nekoFetch(category) {
  fetch(`https://nekos.best/api/v2/${category}`, {
    method: "GET",
  })
    .then((data) => {
      if (data.status === 200) {
        return data.json();
      } else {
        throw new Error("Ошибка статуса", data.status);
      }
    })
    .then((info) => {
      // console.log(info);
      isRendered();
      renderImage(info.results[0].url);
      renderDescription(
        info.results[0].artist_name,
        info.results[0].artist_href
      );
    })
    .catch((error) => {
      console.error("Ошибка поймана - ", error);
    });
}

nekoFetch("kitsune");

function isRendered() {
  const elementImage = document.getElementById("#imageDiv");
  const elementDesc = document.getElementById("#descDiv");
  const elementDesc2 = document.getElementById("#descDiv2");
  if (elementImage && elementDesc && elementDesc2) {
    elementImage.remove();
    elementDesc.remove();
    elementDesc2.remove();
  }
}

function renderImage(data) {
  const imageDiv = document.createElement("div");
  imageDiv.id = "#imageDiv";
  imageDiv.className = "recent_image";
  imageDiv.style.backgroundImage = `url(${data})`;
  imageDiv.style.backgroundSize = "cover";
  imageDiv.style.backgroundPosition = "center";
  imageContainer.append(imageDiv);
}

function renderDescription(attr1, attr2) {
  // console.log(attr1, attr2);
  if (!attr1 || !attr2) {
    attr1 = "Неизвестен";
    attr2 = null;
  }

  const descDiv = document.createElement("div");
  descDiv.id = "#descDiv";
  descDiv.style.fontSize = "30px";
  descDiv.textContent = `Artist: ${attr1}`;
  const descDiv2 = document.createElement("a");
  descDiv2.id = "#descDiv2";
  descDiv2.href = `${attr2}`;
  descDiv2.style.fontSize = "16px";
  descDiv2.textContent = `Перейти на страницу автора`;
  descDiv2.style.textDecoration = "none";
  descDiv2.style.color = "#007bff";

  if (attr2 === null) {
    descDiv2.style.display = "none";
  }
  descriptionContainer.append(descDiv);
  descriptionContainer.append(descDiv2);
}

///////////////////////////////// UPPER

function moveToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

//////////////////////////////// THEME SWITHCER
const changer = document.getElementById("changer");
const html = document.getElementById("html");

changer.addEventListener("click", () => {
  html.setAttribute("data-theme", "dark");
});
