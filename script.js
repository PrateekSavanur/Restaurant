document.addEventListener("DOMContentLoaded", () => {
  callClass();
  document.getElementById("current-year").textContent =
    new Date().getFullYear();
});

const callClass = () => {
  const galleryButtons = document.querySelectorAll(".gallery-btn");
  const galleryDisplay = document.querySelector(".gallery-display");

  const galleryImages = {
    1: [
      "./assets/f1.jpeg",
      "./assets/f2.jpeg",
      "./assets/f3.jpeg",
      "./assets/f4.jpeg",
    ],
    2: [
      "./assets/a1.jpeg",
      "./assets/a2.jpeg",
      "./assets/a3.jpeg",
      "./assets/a4.jpeg",
    ],
    3: [
      "./assets/d1.jpeg",
      "./assets/d2.jpeg",
      "./assets/d3.jpeg",
      "./assets/d4.jpeg",
    ],
    4: [
      "./assets/d1.jpeg",
      "./assets/d2.jpeg",
      "./assets/d3.jpeg",
      "./assets/d4.jpeg",
    ],
    5: [
      "./assets/d1.jpeg",
      "./assets/d2.jpeg",
      "./assets/d3.jpeg",
      "./assets/d4.jpeg",
    ],
    6: [
      "./assets/d1.jpeg",
      "./assets/d2.jpeg",
      "./assets/d3.jpeg",
      "./assets/d4.jpeg",
    ],
    7: [
      "./assets/d1.jpeg",
      "./assets/d2.jpeg",
      "./assets/d3.jpeg",
      "./assets/d4.jpeg",
    ],
  };

  const galleryTitles = {
    1: "Food",
    2: "Ambience",
    3: "Drinks",
    4: "Events",
    5: "Featured",
    6: "Influencers",
    7: "Launch",
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
