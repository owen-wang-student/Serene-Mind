const rangeThumb = document.getElementById("rangeThumb");
const rangeNumber = document.getElementById("rangeNumber");
const rangeLine = document.getElementById("rangeLine");
const rangeInput = document.getElementById("rangeInput");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");

const rangeInputSlider = () => {
    rangeNumber.textContent = rangeInput.value;
    const thumbPosition = (rangeInput.value / rangeInput.max);
    const space = rangeInput.offsetWidth - rangeThumb.offsetWidth

    rangeThumb.style.left = (thumbPosition * space) + 'px'
    rangeLine.style.width = rangeInput.value + '%'

    rangeInput.addEventListener("input", rangeInputSlider);
    console.log(thumbPosition);

    clearVisibility();
    if(thumbPosition > 0.85){
        image1.classList.remove("image__hidden");
    }else if(0.85 >= thumbPosition && thumbPosition > 0.70){
        image2.classList.remove("image__hidden");
    }else if(0.70 >= thumbPosition && thumbPosition > 0.30){
        image3.classList.remove("image__hidden");
    }else if(0.30 >= thumbPosition && thumbPosition > 0.15){
        image4.classList.remove("image__hidden");
    }else{
        image5.classList.remove("image__hidden");
    }

}

rangeInputSlider()

function clearVisibility(){
    document.querySelectorAll(".mood__images").forEach(image => {
        image.classList.add("image__hidden");
    });
}