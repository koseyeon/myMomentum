const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"]
const imgPath = "img";
const todayImage = images[Math.floor((Math.random()*images.length))]
function paintBackground(){
  const bgImg = document.createElement("img");
  bgImg.src = `${imgPath}/${todayImage}`;
  document.body.appendChild(bgImg);
}
paintBackground();