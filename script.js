// function ucapan() {
//   const pesan = document.getElementById("pesan");
//   pesan.innerHTML = "Uhuyyy";
// }

// function showImages() {
//   const imageContainer = document.getElementById("image-container");
//   const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

//   images.forEach((image) => {
//     const img = document.createElement("img");
//     img.src = image;
//     img.classList.add("image");
//     imageContainer.appendChild(img);
//   });
// }

function toggleContent() {
  const content = document.querySelector(".content");
  content.classList.toggle("hidden");
}
