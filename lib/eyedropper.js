export async function getEyedropperColor(hex, color) {
  if ("EyeDropper" in window) {
    const eyeDropper = new EyeDropper();
    try {
      const result = await eyeDropper.open();
      color.style.color = result.sRGBHex;
      color.style.backgroundColor = result.sRGBHex;
      hex.innerText = result.sRGBHex;
      return result.sRGBHex;
    } catch (error) {
      console.error("Eyedropper API error:", error);
    }
  } else {
    console.log("Eyedropper API is not supported in this browser.");
  }
}
