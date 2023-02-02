function generateLogo(bottomText) {
  let img = document.getElementById("aws-badge");
  const name = bottomText;
  let LogoScale = 1.75;
  let scale = 1;

  var myFont = new FontFace("myFont", "url(assets/fonts/AmazonEmber_Rg.ttf)");

  myFont.load().then(function (font) {
    // with canvas, if this is ommited won't work
    document.fonts.add(font);

    console.log("Font loaded");

    const canvas = document.getElementById("logo-canvas");
    const ctx = canvas.getContext("2d");

    canvas.width =
      (Math.max(
        ctx.measureText("AWS User Groups").width,
        ctx.measureText(name).width
      ) +
        img.width * LogoScale +
        450) *
      scale;
    canvas.height = (img.height * LogoScale + 50) * scale;



    ctx.scale(scale, scale);

    ctx.fillStyle = "#000000";
    ctx.font = `bold 30px myFont`;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 20, 0, img.width * LogoScale, img.height * LogoScale);

    ctx.fillText("AWS", img.width * LogoScale + 60, 85);

    ctx.font = `80px myFont`;
    ctx.fillStyle = "#A166FF";
    ctx.fillText("User Groups", img.width * LogoScale + 55, 150);

    ctx.font = `27px myFont`;
    ctx.fillText(name, img.width * LogoScale + 60, img.height * LogoScale - 80);
  });
}

const bottomTextInput = document.getElementById("city-text");

bottomTextInput.addEventListener("input", (e) => {
  generateLogo(bottomTextInput.value);
});

window.addEventListener("DOMContentLoaded", () => {
  bottomTextInput.value = "United Arab Emirates";

  generateLogo(bottomTextInput.value);
});
