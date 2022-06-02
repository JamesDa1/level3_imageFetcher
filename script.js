const fetchImgBtn = document.querySelector("#fetchImgBtn");
const checkBlur = document.querySelector("#blur");

fetchImgBtn.addEventListener("click", () => {
  let width = document.querySelector("#width").value;
  let height = document.querySelector("#height").value;
  // checks for black/white option
  let grayScaleActive = document.querySelector("#grayScale").checked
    ? "?grayscale"
    : "";

  // Couldn't figure out how to add BlurCode as a ternary operator
  // Modifies URL to add grayScale and Blur if selected
  let blurCode = "";
  if (checkBlur.checked) {
    let blurStrength = document.querySelector("#blurIntensity").value;
    if (grayScaleActive) {
      blurCode = `&blur=${blurStrength}`;
    } else {
      blurCode = `?blur=${blurStrength}`;
    }
  }

  let link = `https://picsum.photos/${width}/${height}${grayScaleActive}${blurCode}`;
  console.log(link);
  fetch(link).then((response) => {
    let img = document.createElement("img");
    img.src = response.url;
    document.querySelector("#images").appendChild(img);
  });
});

// Deletes clicked img element
window.onclick = event => {
  if (event.target.tagName === "IMG") {
    event.target.remove()
  }
}
