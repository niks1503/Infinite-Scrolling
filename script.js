const apikey = "JpdOLI233Qb8Nvh3PTZmvXSaB5CAtVlj3V4ZkoZi0JM";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=10`;

async function loadImages() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    let box = document.querySelector(".box");
    data.forEach((image) => {
      let img = document.createElement("img");
      img.src = image.urls.regular;
      img.style.height = "500px";
      img.style.width = "400px";
      box.appendChild(img);
    });
  } catch (error) {
    console.error(error);
  }
}

loadImages();

window.addEventListener("scroll", function () {
  if (
    Math.ceil(window.scrollY + this.window.innerHeight + 50) >=
    document.body.offsetHeight
  ) {
    loadImages();
  }
});
