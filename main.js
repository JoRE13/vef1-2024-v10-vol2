import { getEyedropperColor } from "./lib/eyedropper.js";
import { colorAnalysis } from "./lib/color.js";
import { resetColorOutput } from "./lib/reset.js";

const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");
const hex = document.querySelector(".hex");
const color = document.querySelector(".color");
const mainh = document.querySelector(".main-hex");
const mainr = document.querySelector(".main-rgb");
const mainc = document.querySelector(".main-color");
const invh = document.querySelector(".inverted-hex");
const invr = document.querySelector(".inverted-rgb");
const invc = document.querySelector(".inverted-color");
const redint = document.querySelector(".red");
const greenint = document.querySelector(".green");
const blueint = document.querySelector(".blue");

async function render(fileInput, output, hex, color){
  fileInput.addEventListener("change", () => {
    const [file] = fileInput.files;
    resetColorOutput(hex,color,mainh,mainr,mainc,invh,invr,invc,redint,greenint,blueint);
    if (file && file.type.startsWith("image/")) {
      const img = document.createElement("img");
      img.alt = "Uploaded Image";
  
      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target.result;
        output.innerHTML = "";
        output.appendChild(img);
      };
      reader.readAsDataURL(file); 
      img.addEventListener("click", async () => {
        const hexcolor = await getEyedropperColor(hex, color);
        await colorAnalysis(hexcolor,mainh,mainr,mainc,invh,invr,invc,redint,greenint,blueint);
      });
    } else {
      output.innerText = "Please upload a valid image file.";
    }
  });
}

render(fileInput, output, hex, color);