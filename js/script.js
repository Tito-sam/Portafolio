const bton1 = document.querySelector(".btn1");
const bton2 = document.querySelector(".btn2");
const bton3 = document.querySelector(".btn3");
const bton4 = document.querySelector(".btn4");
const sliders_1 = document.querySelectorAll(".slider_1");
const container_1 = document.querySelector(".slider_container1");
const sliders_2 = document.querySelectorAll(".slider_2");
const container_2 = document.querySelector(".slider_container2");

let slider_1 = 0;
let slider_2 = 0;

const moverSlideIzq1 = () => {
    if (slider_1 >= 0  && slider_1 < sliders_1.length - 1) {
        let pixeles = (slider_1 + 1) * sliders_1[0].offsetWidth;
        let mover = "translateX(-" + pixeles + "px)";
        console.log(mover)
        const keyframes = [
            { transform: mover,
            opacity: 1,
            }
        ];
        const options = {
            duration: 200,
            fill:"forwards"
        }
        sliders_1[slider_1].classList.add("hidden");
        slider_1 += 1;
        sliders_1[slider_1].animate(keyframes, options);
        sliders_1[slider_1].classList.remove("hidden");
        
    }
};

const moverSlideDer1 = () => {
    if (slider_1 <= sliders_1.length - 1 && slider_1 > 0) {
        let pixeles = (slider_1 + 1) * sliders_1[0].offsetWidth;
        let mover = "translateX(" + pixeles + "px)";
        const keyframes1 = [
            { transform: mover,
            }
          ];
          const options1 = {
            duration: 200,
            fill:"forwards"
          }
          sliders_1[slider_1].animate(keyframes1, options1);
          sliders_1[slider_1].classList.add("hidden");
          slider_1 -= 1;
          sliders_1[slider_1].classList.remove("hidden");
    }
};

const moverSlideIzq2 = () => {
    if (slider_2 >= 0  && slider_2 < sliders_2.length - 1) {
        let pixeles = (slider_2 + 1) * sliders_2[0].offsetWidth;
        let mover = "translateX(-" + pixeles + "px)";
        const keyframes = [
            { transform: mover,
            opacity: 1,
            }
        ];
        const options = {
            duration: 200,
            fill:"forwards"
        }
        sliders_2[slider_2].classList.add("hidden");
        slider_2 += 1;
        sliders_2[slider_2].animate(keyframes, options);
        sliders_2[slider_2].classList.remove("hidden");
    }
};

const moverSlideDer2 = () => {
    if (slider_2 <= sliders_2.length - 1 && slider_2 > 0) {
        let pixeles = (slider_2 + 1) * sliders_2[0].offsetWidth;
        let mover = "translateX(" + pixeles + "px)";
        const keyframes1 = [
            { transform: mover,
            }
          ];
          const options1 = {
            duration: 200,
            fill:"forwards"
          }
          sliders_2[slider_2].animate(keyframes1, options1);
          sliders_2[slider_2].classList.add("hidden");
          slider_2 -= 1;
          sliders_2[slider_2].classList.remove("hidden");
    }
};

bton1.addEventListener('click', moverSlideIzq1);
bton2.addEventListener('click', moverSlideDer1);
bton3.addEventListener('click', moverSlideIzq2);
bton4.addEventListener('click', moverSlideDer2);
