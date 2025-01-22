function changehero(clickedImage) {
    const bruhSrc = clickedImage.src;
    document.getElementById("change").src = bruhSrc;
    console.log("You have pressed the button"); //debugging
}