const fetchImgBtn = document.querySelector("#fetchImgBtn");
const checkBlur = document.querySelector("#blur");

fetchImgBtn.addEventListener("click", () => {
  let width = document.querySelector("#width").value;
  let height = document.querySelector("#height").value;
  // checks for black/white option
  let grayScaleActive = document.querySelector("#grayScale").checked
    ? "?grayscale"
    : "";

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
