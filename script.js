document.addEventListener("DOMContentLoaded", () => callClass());

const callClass = () => {
  const galleryButtons = document.querySelectorAll(".gallery-btn");
  const galleryDisplay = document.querySelector(".gallery-display");

  const galleryImages = {
    1: ["./assets/1.jpeg", "./assets/1.jpeg", "./assets/1.jpeg"],
    2: ["./assets/2.jpeg", "./assets/1.jpeg", "./assets/2.jpeg"],
    3: ["./assets/1.jpeg", "./assets/1.jpeg", "./assets/1.jpeg"],
    4: ["./assets/2.jpeg", "./assets/2.jpeg", "./assets/2.jpeg"],
  };

  galleryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const galleryId = button.getAttribute("data-gallery");
      displayGalleryImages(galleryId);
    });
  });

  function displayGalleryImages(galleryId) {
    galleryDisplay.innerHTML = "";
    const marquee = document.createElement("div");
    marquee.className = "marquee";

    galleryImages[galleryId].forEach((imageSrc) => {
      const img = document.createElement("img");
      img.src = imageSrc;
      img.className = "img-fluid";
      marquee.appendChild(img);
    });

    galleryDisplay.appendChild(marquee);
    galleryDisplay.style.display = "block";
  }
};

document.getElementById("current-year").textContent = new Date().getFullYear();
