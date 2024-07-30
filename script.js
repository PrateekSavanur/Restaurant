document.addEventListener("DOMContentLoaded", () => {
  callClass();
  document.getElementById("current-year").textContent =
    new Date().getFullYear();
});

const callClass = () => {
  const galleryButtons = document.querySelectorAll(".gallery-btn");
  const galleryDisplay = document.querySelector(".gallery-display");

  const galleryImages = {
    1: ["./assets/1.jpeg", "./assets/2.jpeg", "./assets/2.jpeg"],
    2: ["./assets/1.jpeg", "./assets/1.jpeg", "./assets/1.jpeg"],
    3: ["./assets/1.jpeg", "./assets/1.jpeg", "./assets/1.jpeg"],
    4: ["./assets/1.jpeg", "./assets/1.jpeg", "./assets/1.jpeg"],
  };

  const galleryTitles = {
    1: "Gallery 1",
    2: "Gallery 2",
    3: "Gallery 3",
    4: "Gallery 4",
  };

  galleryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const galleryId = button.getAttribute("data-gallery");
      displayGalleryImages(galleryId);
    });
  });

  displayGalleryImages(Object.keys(galleryImages)[0]);

  function displayGalleryImages(galleryId) {
    galleryDisplay.innerHTML = "";

    const heading = document.createElement("h2");
    heading.textContent = galleryTitles[galleryId];
    galleryDisplay.appendChild(heading);

    const marquee = document.createElement("div");
    marquee.className = "marquee";
    heading.className = "text-center mb-3";

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
