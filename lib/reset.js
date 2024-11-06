export function resetColorOutput(hex,color,mainh,mainr,mainc,invh,invr,invc,redint,greenint,blueint) {
    hex.innerHTML = "No color selected";
    mainh.innerHTML = "No color selected";
    mainr.innerHTML = "No color selected";
    invh.innerHTML = "No color selected";
    invr.innerHTML = "No color selected";
    color.style.color = "#000000";
    color.style.backgroundColor = "#ffffff";
    mainc.style.backgroundColor = "#ffffff";
    invc.style.backgroundColor = "#ffffff";
    redint.style.backgroundColor = "#ffffff";
    greenint.style.backgroundColor = "#ffffff";
    blueint.style.backgroundColor = "#ffffff";
  }